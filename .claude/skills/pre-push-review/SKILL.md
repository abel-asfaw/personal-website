---
name: pre-push-review
description: |
  Reviews the commits about to be pushed: the code-review skill for bugs, then the consistency-review skill for project conventions.
  Run by the lefthook pre-push hook; also usable by hand before a push. Takes the base ref and, optionally, the head to review.
---

# Pre-push Review

Review the commits between a base and a head. The arguments are the base and the head, in that order. Without a base, use the upstream branch (`@{upstream}`), or `origin/main` when there is none; without a head, use `HEAD`. Review only `git diff <base>...<head>`, not uncommitted changes, since those aren't being pushed.

This is a read-only review: report findings, don't edit files.

## Steps

1. Run the `code-review` skill at `medium` effort on that diff, for correctness bugs.
2. Apply the `consistency-review` skill to the same diff. Skip its Automated Checks step: the pre-commit hook already ran lint, format and typecheck on every commit.
3. Drop findings the two reviews share, keeping the more specific one.

## Output

List each finding as `file:line`, then one sentence on what's wrong and one on the fix, bugs first. Leave out the consistency score.

End with exactly one line, the last line of the output:

- `REVIEW: PASS` when there are no findings.
- `REVIEW: FAIL` when there is at least one.
