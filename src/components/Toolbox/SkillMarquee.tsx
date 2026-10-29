import * as stylex from '@stylexjs/stylex';

import { plural } from '../../content/route';
import { Button } from '../ui/Button';
import { skillMarquee } from './Toolbox.styles';

interface SkillMarqueeProps {
  skills: string[];
  /** Number of route stops per skill, shown as a badge. */
  counts: Map<string, number>;
  picked: string | null;
  onPick: (skill: string) => void;
  isPaused: boolean;
  /** The second row scrolls the other way in the outlined accent look. */
  isReversed?: boolean;
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
  isPaused,
  isReversed = false,
}: SkillMarqueeProps) {
  if (skills.length === 0) {
    return null;
  }

  return (
    <div {...stylex.props(skillMarquee.root, stylex.defaultMarker())}>
      <ul
        {...stylex.props(
          skillMarquee.track,
          isReversed && skillMarquee.reverse,
          isPaused && skillMarquee.paused,
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
                <Button
                  tabIndex={isCopy ? -1 : undefined}
                  // Copies are hidden from screen readers, so a click on one
                  // mustn't move focus there.
                  onMouseDown={
                    isCopy ? (event) => event.preventDefault() : undefined
                  }
                  aria-pressed={isPicked}
                  aria-label={
                    count > 0 ? `${skill}, ${plural(count, 'stop')}` : undefined
                  }
                  onClick={() => onPick(skill)}
                  style={[
                    stylex.defaultMarker(),
                    skillMarquee.skill,
                    isReversed && skillMarquee.skillAccent,
                    isPicked && skillMarquee.skillPicked,
                  ]}
                >
                  {skill}
                  {count > 0 ? (
                    <span
                      aria-hidden="true"
                      {...stylex.props(
                        skillMarquee.count,
                        isReversed && skillMarquee.countAccent,
                        isPicked && skillMarquee.countPicked,
                      )}
                    >
                      {count}
                    </span>
                  ) : null}
                </Button>
              </li>
            );
          }),
        )}
      </ul>
    </div>
  );
}
