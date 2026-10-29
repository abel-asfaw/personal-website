import { useEffect, useState } from 'react';

const TOUR_STEP_MS = 2600;

interface TourState {
  /** `null` means "the latest stop", so the default survives CMS edits. */
  selected: number | null;
  /** Bumped on every move so the stop card replays its entrance. */
  tick: number;
  playing: boolean;
}

/**
 * Drives the career route: which stop is current and the auto-playing tour,
 * which steps forward every few seconds and finishes at the latest stop.
 */
export function useRouteTour(stopCount: number) {
  const last = Math.max(stopCount - 1, 0);
  const [state, setState] = useState<TourState>({
    selected: null,
    tick: 0,
    playing: false,
  });

  const currentOf = (s: TourState) => Math.min(s.selected ?? last, last);
  const stop = currentOf(state);

  // Moves to `index`; the tour keeps playing only if there's road left.
  const moveTo = (s: TourState, index: number, playing: boolean) => {
    const target = Math.min(Math.max(index, 0), last);
    const keepPlaying = playing && target < last;
    return target === currentOf(s)
      ? { ...s, playing: keepPlaying }
      : { selected: target, tick: s.tick + 1, playing: keepPlaying };
  };

  useEffect(() => {
    if (!state.playing) {
      return undefined;
    }
    const timer = window.setInterval(() => {
      // Hold the tour while the tab is in the background.
      if (!document.hidden) {
        setState((s) => moveTo(s, currentOf(s) + 1, s.playing));
      }
    }, TOUR_STEP_MS);
    return () => window.clearInterval(timer);
    // `moveTo`/`currentOf` only depend on `last`.
    // oxlint-disable-next-line react/exhaustive-deps
  }, [state.playing, last]);

  /** Jumps to a stop and stops the tour. */
  const goTo = (index: number) => setState((s) => moveTo(s, index, false));

  return {
    stop,
    tick: state.tick,
    playing: state.playing,
    atStart: stop === 0,
    atEnd: stop >= last,
    goTo,
    /** Starts the tour over from the first stop. */
    start: () => setState((s) => moveTo(s, 0, true)),
    /** Plays on from the next stop, or replays from the first at the end. */
    play: () =>
      setState((s) => {
        const current = currentOf(s);
        return moveTo(s, current >= last ? 0 : current + 1, true);
      }),
    pause: () => setState((s) => ({ ...s, playing: false })),
    // From the latest state, so a click in the same frame as a tour step
    // isn't lost.
    prev: () => setState((s) => moveTo(s, currentOf(s) - 1, false)),
    next: () => setState((s) => moveTo(s, currentOf(s) + 1, false)),
  };
}

export type RouteTour = ReturnType<typeof useRouteTour>;
