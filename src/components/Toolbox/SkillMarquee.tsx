import * as stylex from '@stylexjs/stylex';

import { skillMarquee } from './Toolbox.styles';

interface SkillMarqueeProps {
  skills: string[];
  /** Number of route stops per skill, shown as a badge. */
  counts: Map<string, number>;
  picked: string | null;
  onPick: (skill: string) => void;
  paused: boolean;
  /** The second row scrolls the other way in the outlined accent look. */
  reverse?: boolean;
}

// The track is two identical halves for a seamless loop, and each half
// holds the list twice to fill wide screens. Only the very first copy is
// focusable and announced; the rest are visual filler.
const COPIES = 4;

export function SkillMarquee({
  skills,
  counts,
  picked,
  onPick,
  paused,
  reverse = false,
}: SkillMarqueeProps) {
  if (skills.length === 0) {
    return null;
  }

  return (
    <div {...stylex.props(skillMarquee.root, stylex.defaultMarker())}>
      <ul
        {...stylex.props(
          skillMarquee.track,
          reverse && skillMarquee.reverse,
          paused && skillMarquee.paused,
        )}
      >
        {Array.from({ length: COPIES }, (_, copy) =>
          skills.map((skill) => {
            const isCopy = copy > 0;
            const isPicked = picked === skill;
            const count = counts.get(skill) ?? 0;

            return (
              <li
                key={`${copy}-${skill}`}
                aria-hidden={isCopy || undefined}
                {...stylex.props(isCopy && skillMarquee.duplicate)}
              >
                <button
                  type="button"
                  tabIndex={isCopy ? -1 : undefined}
                  aria-pressed={isPicked}
                  aria-label={
                    count > 0
                      ? `${skill}, ${count} ${count === 1 ? 'stop' : 'stops'}`
                      : undefined
                  }
                  onClick={() => onPick(skill)}
                  {...stylex.props(
                    stylex.defaultMarker(),
                    skillMarquee.skill,
                    reverse && skillMarquee.skillAccent,
                    isPicked && skillMarquee.skillPicked,
                  )}
                >
                  {skill}
                  {count > 0 ? (
                    <span
                      aria-hidden="true"
                      {...stylex.props(
                        skillMarquee.count,
                        reverse && skillMarquee.countAccent,
                        isPicked && skillMarquee.countPicked,
                      )}
                    >
                      {count}
                    </span>
                  ) : null}
                </button>
              </li>
            );
          }),
        )}
      </ul>
    </div>
  );
}
