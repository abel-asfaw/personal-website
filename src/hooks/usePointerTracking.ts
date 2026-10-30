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
  /**
   * Pointer offset from the compass center: -1 at the panel's left (top)
   * edge, 1 at its right (bottom) edge, 0 over the center or at rest.
   */
  tiltX: number;
  tiltY: number;
  /** Whether a finger is dragging, which turns off the trailing glide. */
  isFingerDrag: boolean;
}

const RESTING_HEADING = 35;

const clamp = (value: number) => Math.max(-1, Math.min(1, value));

// An offset from the compass as a share of the room on its side of it, so
// -1 and 1 land on the panel's edges however off-center the compass sits.
function reach(offset: number, before: number, after: number) {
  if (offset === 0) {
    return 0;
  }
  return clamp(offset / (offset > 0 ? after : before));
}

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
    tiltX: 0,
    tiltY: 0,
    isFingerDrag: false,
  });

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  // Batches pointer updates into one render per frame.
  const track = useCallback(
    (clientX: number, clientY: number, isFingerDrag: boolean) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const panel = panelRef.current;
        if (!panel) {
          return;
        }
        const rect = panel.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const box = compassRef.current?.getBoundingClientRect();
        // Points from the compass center; at rest if it isn't laid out.
        const compass = box && box.width > 0 ? box : null;
        const cx = compass ? compass.left + compass.width / 2 : clientX;
        const cy = compass ? compass.top + compass.height / 2 : clientY;
        const dx = clientX - cx;
        const dy = clientY - cy;
        const target = compass
          ? (Math.atan2(dy, dx) * 180) / Math.PI + 90
          : RESTING_HEADING;
        setPointer((p) => ({
          active: true,
          x,
          y,
          ratioX: x / rect.width,
          ratioY: y / rect.height,
          heading: turnTo(p.heading, target),
          tiltX: reach(dx, cx - rect.left, rect.right - cx),
          tiltY: reach(dy, cy - rect.top, rect.bottom - cy),
          isFingerDrag,
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
      isFingerDrag: false,
      heading: turnTo(p.heading, RESTING_HEADING),
      tiltX: 0,
      tiltY: 0,
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
      // Same for a second finger that landed outside the panel, where
      // onTouchStart never saw it.
      if (event.touches.length > 1) {
        if (current.mode === 'map') {
          leave();
        }
        gesture.current = { mode: 'scroll' };
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

  // Fingers go through the native touch listeners above. So does an Apple
  // Pencil on the screen, which fires touch events as well as pen ones, so a
  // pen only counts here outside a touch gesture: hovering, or a pen that
  // never fires touch events.
  const isPointerTracked = (event: React.PointerEvent) =>
    event.pointerType === 'mouse' ||
    (event.pointerType === 'pen' && gesture.current === null);

  const handlers = {
    onPointerMove: (event: React.PointerEvent) => {
      if (isPointerTracked(event)) {
        track(event.clientX, event.clientY, false);
      }
    },
    onPointerLeave: (event: React.PointerEvent) => {
      if (isPointerTracked(event)) {
        leave();
      }
    },
  };

  return { panelRef, compassRef, pointer, handlers };
}
