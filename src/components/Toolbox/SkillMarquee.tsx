import * as stylex from '@stylexjs/stylex';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { plural } from '../../content/route';
import { useMediaQuery } from '../../hooks/useMediaQuery';
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
// holds the list three times, enough to fill wide screens and to give a
// paused row room to scroll. Only the very first copy is focusable and
// announced; the rest are visual filler.
const COPIES = 6;

// Safari before 26 has no scrollend, so it waits for scroll events to pause.
const HAS_SCROLL_END = 'onscrollend' in window;

/** Distance from the first item to the same item `copies` lists later. */
function copyWidth(track: HTMLElement, count: number, copies: number) {
  const items = track.children;
  const first = items[0].getBoundingClientRect();
  const later = items[count * copies].getBoundingClientRect();
  return later.left - first.left;
}

/**
 * Moves a scroll offset by whole lists into the middle of the scroll range,
 * so the row can keep scrolling both ways without running out.
 */
function wrapOffset(offset: number, unit: number, center: number) {
  const start = center - unit / 2;
  return ((((offset - start) % unit) + unit) % unit) + start;
}

function isFocusWithin(element: HTMLElement) {
  return element.contains(document.activeElement);
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
  // Reduced motion lays the rows out as still, wrapped lists already.
  const prefersReducedMotion = useMediaQuery(
    '(prefers-reduced-motion: reduce)',
  );
  const canScroll = isScrollable && !prefersReducedMotion;
  // Where scrolling took over from the animation; null while it animates.
  const [scrollFrom, setScrollFrom] = useState<number | null>(null);
  // The scroll offset the animation picks back up from once it restarts.
  const resumeFrom = useRef<number | null>(null);
  const settleTimer = useRef<number | undefined>(undefined);
  const isScrolling = scrollFrom !== null;
  const listLength = skills.length;

  // Swap between the animation and scrolling before paint, so the row
  // never jumps: the loop's progress becomes the scroll offset, and back.
  useLayoutEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) {
      return;
    }
    if (canScroll && !isScrolling) {
      // No animation when keyboard focus has parked the row at its start.
      const timing = track.getAnimations()[0]?.effect?.getComputedTiming();
      const progress = timing?.progress ?? 0;
      setScrollFrom(progress * copyWidth(track, listLength, COPIES / 2));
    } else if (!canScroll && isScrolling) {
      resumeFrom.current = root.scrollLeft;
      root.scrollLeft = 0;
      setScrollFrom(null);
    }
  }, [canScroll, isScrolling, listLength]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (scrollFrom === null || !root || !track) {
      return;
    }
    // Leave a focused first copy where it is, on screen.
    root.scrollLeft = isFocusWithin(root)
      ? scrollFrom
      : wrapOffset(
          scrollFrom,
          copyWidth(track, listLength, 1),
          (root.scrollWidth - root.clientWidth) / 2,
        );
  }, [scrollFrom, listLength]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const offset = resumeFrom.current;
    if (isScrolling || offset === null || !track) {
      return;
    }
    resumeFrom.current = null;
    const animation = track.getAnimations()[0];
    if (!animation?.effect) {
      return;
    }
    const period = copyWidth(track, listLength, COPIES / 2);
    const progress = (offset % period) / period;
    const { direction, duration } = animation.effect.getComputedTiming();
    const elapsed = direction === 'reverse' ? 1 - progress : progress;
    animation.currentTime = elapsed * Number(duration);
  }, [isScrolling, listLength]);

  useEffect(() => () => window.clearTimeout(settleTimer.current), []);

  const wrapScroll = () => {
    const root = rootRef.current;
    const track = trackRef.current;
    // Jumping would carry a focused first copy off screen.
    if (!root || !track || isFocusWithin(root)) {
      return;
    }
    const unit = copyWidth(track, listLength, 1);
    const center = (root.scrollWidth - root.clientWidth) / 2;
    const next = wrapOffset(root.scrollLeft, unit, center);
    // Only jump by whole lists, never nudge on rounding.
    if (Math.abs(next - root.scrollLeft) >= unit / 2) {
      root.scrollLeft = next;
    }
  };

  // Jumping mid-fling can cut the fling short, so the wrap waits for
  // scrolling to settle: on scrollend, or a short pause where it's missing.
  const handleScroll = () => {
    if (HAS_SCROLL_END) {
      return;
    }
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(wrapScroll, 150);
  };

  if (listLength === 0) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      onScroll={isScrolling ? handleScroll : undefined}
      onScrollEnd={isScrolling ? wrapScroll : undefined}
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
