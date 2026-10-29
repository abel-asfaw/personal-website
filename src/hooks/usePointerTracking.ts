import { useCallback, useEffect, useRef, useState } from 'react';

export interface PointerState {
  active: boolean;
  /** Position in px from the panel's top-left corner. */
  x: number;
  y: number;
  /** Position as a share of the panel's width and height. */
  ratioX: number;
  ratioY: number;
  /** Compass needle angle in degrees. */
  heading: number;
  /** Whether a finger is steering, which turns off the trailing glide. */
  isTouch: boolean;
}

const RESTING_HEADING = 35;

type Gesture =
  | { mode: 'pending'; startX: number; startY: number }
  | { mode: 'map' | 'scroll' };

// Moves the needle the short way round: the angle keeps counting past 360°
// instead of jumping from 270° to -90°, which the transition would spin.
function turnTo(from: number, to: number) {
  return from + ((((to - from) % 360) + 540) % 360) - 180;
}

/**
 * Tracks the pointer (or a dragging finger) across a panel, and points a
 * compass inside it at the pointer. Spread `handlers` on the panel.
 *
 * A touch drag that starts sideways steers the map and holds the page still
 * until the finger lifts; one that starts up or down scrolls the page as usual.
 */
export function usePointerTracking() {
  const panelRef = useRef<HTMLDivElement>(null);
  const compassRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const gesture = useRef<Gesture | null>(null);
  const [pointer, setPointer] = useState<PointerState>({
    active: false,
    x: 0,
    y: 0,
    ratioX: 0.5,
    ratioY: 0.5,
    heading: RESTING_HEADING,
    isTouch: false,
  });

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  // Batches pointer updates into one render per frame.
  const track = useCallback(
    (clientX: number, clientY: number, isTouch: boolean) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const panel = panelRef.current;
        if (!panel) {
          return;
        }
        const rect = panel.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const compass = compassRef.current?.getBoundingClientRect();
        // The compass is hidden on phones; its needle then stays at rest.
        const target =
          compass && compass.width > 0
            ? (Math.atan2(
                clientY - (compass.top + compass.height / 2),
                clientX - (compass.left + compass.width / 2),
              ) *
                180) /
                Math.PI +
              90
            : RESTING_HEADING;
        setPointer((p) => ({
          active: true,
          x,
          y,
          ratioX: x / rect.width,
          ratioY: y / rect.height,
          heading: turnTo(p.heading, target),
          isTouch,
        }));
      });
    },
    [],
  );

  const leave = useCallback(() => {
    cancelAnimationFrame(frame.current);
    setPointer((p) => ({
      ...p,
      active: false,
      heading: turnTo(p.heading, RESTING_HEADING),
    }));
  }, []);

  // Native listeners: React's touch handlers are passive, so they can't stop
  // the page scrolling under a map drag.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) {
      return undefined;
    }

    const onTouchStart = (event: TouchEvent) => {
      // A second finger turns a map drag into a scroll or pinch.
      if (gesture.current?.mode === 'map') {
        leave();
      }
      const touch = event.touches[0];
      gesture.current =
        touch && event.touches.length === 1
          ? { mode: 'pending', startX: touch.clientX, startY: touch.clientY }
          : { mode: 'scroll' };
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      let current = gesture.current;
      if (!touch || !current) {
        return;
      }
      // Decided on the first move: once the browser starts scrolling, it
      // ignores preventDefault for the rest of the touch (`cancelable` is
      // false), and the map would track a page scrolling under it.
      if (current.mode === 'pending') {
        const dx = Math.abs(touch.clientX - current.startX);
        const dy = Math.abs(touch.clientY - current.startY);
        if (dx === dy) {
          return;
        }
        current = { mode: dx > dy && event.cancelable ? 'map' : 'scroll' };
        gesture.current = current;
      }
      if (current.mode === 'map') {
        event.preventDefault();
        track(touch.clientX, touch.clientY, true);
      }
    };

    const onTouchEnd = () => {
      if (gesture.current?.mode === 'map') {
        leave();
      }
      gesture.current = null;
    };

    panel.addEventListener('touchstart', onTouchStart, { passive: true });
    panel.addEventListener('touchmove', onTouchMove, { passive: false });
    panel.addEventListener('touchend', onTouchEnd);
    panel.addEventListener('touchcancel', onTouchEnd);
    return () => {
      panel.removeEventListener('touchstart', onTouchStart);
      panel.removeEventListener('touchmove', onTouchMove);
      panel.removeEventListener('touchend', onTouchEnd);
      panel.removeEventListener('touchcancel', onTouchEnd);
    };
  }, [track, leave]);

  const handlers = {
    // Touch is handled by the native touch listeners above.
    onPointerMove: (event: React.PointerEvent) => {
      if (event.pointerType !== 'touch') {
        track(event.clientX, event.clientY, false);
      }
    },
    onPointerLeave: (event: React.PointerEvent) => {
      if (event.pointerType !== 'touch') {
        leave();
      }
    },
  };

  return { panelRef, compassRef, pointer, handlers };
}
