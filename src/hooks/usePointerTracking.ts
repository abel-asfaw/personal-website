import { useEffect, useRef, useState } from 'react';

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
}

const RESTING_HEADING = 35;

/**
 * Tracks the pointer (or a dragging finger) across a panel, and points a
 * compass inside it at the pointer. Spread `handlers` on the panel.
 */
export function usePointerTracking() {
  const panelRef = useRef<HTMLDivElement>(null);
  const compassRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const [pointer, setPointer] = useState<PointerState>({
    active: false,
    x: 0,
    y: 0,
    ratioX: 0.5,
    ratioY: 0.5,
    heading: RESTING_HEADING,
  });

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  // Batches pointer updates into one render per frame.
  const track = (clientX: number, clientY: number) => {
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
      const heading =
        compass && compass.width > 0
          ? (Math.atan2(
              clientY - (compass.top + compass.height / 2),
              clientX - (compass.left + compass.width / 2),
            ) *
              180) /
              Math.PI +
            90
          : RESTING_HEADING;
      setPointer({
        active: true,
        x,
        y,
        ratioX: x / rect.width,
        ratioY: y / rect.height,
        heading,
      });
    });
  };

  const leave = () => {
    cancelAnimationFrame(frame.current);
    setPointer((p) => ({ ...p, active: false, heading: RESTING_HEADING }));
  };

  const handlers = {
    // Touch is handled by the touch events below, which keep firing while
    // the page scrolls under the finger.
    onPointerMove: (event: React.PointerEvent) => {
      if (event.pointerType !== 'touch') {
        track(event.clientX, event.clientY);
      }
    },
    onPointerLeave: (event: React.PointerEvent) => {
      if (event.pointerType !== 'touch') {
        leave();
      }
    },
    onTouchStart: (event: React.TouchEvent) => {
      const touch = event.touches[0];
      if (touch) {
        track(touch.clientX, touch.clientY);
      }
    },
    onTouchMove: (event: React.TouchEvent) => {
      const touch = event.touches[0];
      if (touch) {
        track(touch.clientX, touch.clientY);
      }
    },
    onTouchEnd: leave,
    onTouchCancel: leave,
  };

  return { panelRef, compassRef, pointer, handlers };
}
