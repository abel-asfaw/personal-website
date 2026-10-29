import * as stylex from '@stylexjs/stylex';
import { useLayoutEffect, useRef, useState } from 'react';

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
  /** Lets the row be scrolled sideways while the animation is held. */
  isScrollable: boolean;
  /** The second row scrolls the other way in the outlined accent look. */
  isReversed?: boolean;
}

// The track is two identical halves for a seamless loop, and each half
// holds the list twice to fill wide screens. Only the very first copy is
// focusable and announced; the rest are visual filler.
const COPIES = 4;

/** Distance from the first item to the same item `copies` lists later. */
function copyWidth(track: HTMLElement, count: number, copies: number) {
  const items = track.children;
  const first = items[0].getBoundingClientRect();
  const later = items[count * copies].getBoundingClientRect();
  return later.left - first.left;
}

/**
 * Keeps a scroll offset within the middle of the track, a list away from
 * either end, so the row can keep scrolling both ways without running out.
 */
function wrapOffset(offset: number, unit: number) {
  return ((((offset - unit / 2) % unit) + unit) % unit) + unit / 2;
}

/** The animation delay that picks the loop back up at this scroll offset. */
function resumeDelay(track: HTMLElement, count: number, offset: number) {
  const style = getComputedStyle(track);
  const period = copyWidth(track, count, COPIES / 2);
  const progress = (offset % period) / period;
  const elapsed =
    style.animationDirection === 'reverse' ? 1 - progress : progress;
  return `${-elapsed * parseFloat(style.animationDuration)}s`;
}

export function SkillMarquee({
  skills,
  counts,
  picked,
  onPick,
  isPaused,
  isScrollable,
  isReversed = false,
}: SkillMarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  // Where scrolling took over from the animation; null while it animates.
  const [scrollFrom, setScrollFrom] = useState<number | null>(null);
  const [delay, setDelay] = useState<string | null>(null);
  const isScrolling = scrollFrom !== null;
  const listLength = skills.length;

  // Swap between the animation and scrolling before paint, so the row
  // never jumps: the frozen transform becomes the scroll offset, and the
  // scroll offset becomes the delay the animation resumes from.
  useLayoutEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) {
      return;
    }
    if (isScrollable && !isScrolling) {
      setScrollFrom(-new DOMMatrix(getComputedStyle(track).transform).m41);
    } else if (!isScrollable && isScrolling) {
      setDelay(resumeDelay(track, listLength, root.scrollLeft));
      setScrollFrom(null);
      root.scrollLeft = 0;
    }
  }, [isScrollable, isScrolling, listLength]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (scrollFrom === null || !root || !track) {
      return;
    }
    root.scrollLeft = wrapOffset(scrollFrom, copyWidth(track, listLength, 1));
  }, [scrollFrom, listLength]);

  const handleScroll = () => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) {
      return;
    }
    const unit = copyWidth(track, listLength, 1);
    const next = wrapOffset(root.scrollLeft, unit);
    // Only jump by whole lists, never nudge on rounding.
    if (Math.abs(next - root.scrollLeft) >= unit / 2) {
      root.scrollLeft = next;
    }
  };

  if (listLength === 0) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      onScroll={isScrolling ? handleScroll : undefined}
      {...stylex.props(
        skillMarquee.root,
        isScrolling && skillMarquee.scrollable,
        stylex.defaultMarker(),
      )}
    >
      <ul
        ref={trackRef}
        {...stylex.props(
          skillMarquee.track,
          isReversed && skillMarquee.reverse,
          isPaused && skillMarquee.paused,
          isScrolling && skillMarquee.still,
          delay !== null && skillMarquee.resumeAt(delay),
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
