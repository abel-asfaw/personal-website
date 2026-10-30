#!/bin/sh
# Called by the lefthook pre-push hook on pushes Claude Code runs. Exits non-zero when the
# review finds anything, which blocks the push; git push --no-verify skips it, as does
# SKIP_PUSH_REVIEW=1.

# Claude Code sets CLAUDECODE=1 for the commands it runs; a push from your own shell has none.
if [ "$CLAUDECODE" != 1 ]; then
  echo "Not pushed through Claude Code; skipping the pre-push review."
  exit 0
fi

# Git hooks don't load .env, so read the flag from it unless the shell already set one.
env_file="$(git rev-parse --show-toplevel)/.env"
if [ -z "${SKIP_PUSH_REVIEW+set}" ] && [ -f "$env_file" ]; then
  SKIP_PUSH_REVIEW=$(sed -n 's/^SKIP_PUSH_REVIEW=//p' "$env_file" | tail -n 1 | tr -d "\r\"'")
fi

if [ "$SKIP_PUSH_REVIEW" = 1 ]; then
  echo "SKIP_PUSH_REVIEW is set; skipping the pre-push review."
  exit 0
fi

if ! command -v claude >/dev/null 2>&1; then
  echo "claude isn't installed; skipping the pre-push review."
  exit 0
fi

zero=0000000000000000000000000000000000000000
failed=0
pushed_refs=0

# git passes one line per pushed ref on stdin.
while read -r local_ref local_sha _remote_ref remote_sha; do
  pushed_refs=$((pushed_refs + 1))
  case "$local_ref" in refs/tags/*) continue ;; esac
  [ "$local_sha" = "$zero" ] && continue

  # A new branch has no remote sha, and one pushed from elsewhere isn't in the local clone.
  if [ "$remote_sha" = "$zero" ] || ! git cat-file -e "$remote_sha" 2>/dev/null; then
    base=origin/main
  else
    base=$remote_sha
  fi

  if ! git rev-parse --verify --quiet "$base" >/dev/null; then
    echo "Can't find $base to review $local_ref against; fetch it, or skip the review with git push --no-verify."
    failed=1
    continue
  fi

  count=$(git rev-list --count "$base..$local_sha")
  [ "$count" -eq 0 ] && continue

  echo "Reviewing $count commit(s) on $local_ref against $base..."

  # dontAsk denies every tool not listed, so the review can read but never edit.
  # stdin is git's ref list, so claude reads /dev/null instead of consuming it.
  output=$(claude -p "/pre-push-review $base $local_sha" \
    --permission-mode dontAsk \
    --allowedTools "Skill Read Grep Glob Agent Bash(git diff:*) Bash(git log:*) Bash(git show:*) Bash(git rev-parse:*) Bash(git merge-base:*)" \
    --no-session-persistence </dev/null)
  status=$?

  printf '%s\n' "$output"

  if [ $status -ne 0 ]; then
    echo "The review didn't finish; push again, or skip it with git push --no-verify."
    failed=1
  elif ! printf '%s\n' "$output" | tail -n 1 | grep -q 'REVIEW: PASS'; then
    failed=1
  fi
done

if [ "$pushed_refs" -eq 0 ]; then
  echo "Got no pushed refs on stdin, so nothing was reviewed. Check use_stdin in lefthook.yml."
fi

exit $failed
