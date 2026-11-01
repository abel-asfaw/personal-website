import { useCallback, useState } from 'react';

export interface ScrollEdges {
  /** Whether content is scrolled out of view above. */
  above: boolean;
  /** Whether content runs out of view below. */
  below: boolean;
}

/**
 * Tracks whether a vertical scroller has content hidden past either edge.
 * Spread the returned ref on the scroller; its children are watched too, so
 * one that grows or shrinks re-measures.
 */
export function useScrollEdges() {
  const [edges, setEdges] = useState<ScrollEdges>({
    above: false,
    below: false,
  });

  // A callback ref, so a remounted scroller is picked up on its own.
  const ref = useCallback((scroller: HTMLElement | null) => {
    if (!scroller) {
      return undefined;
    }

    const measure = () => {
      const { scrollTop, scrollHeight, clientHeight } = scroller;
      // A pixel of slack: fractional heights leave the end a hair short.
      const above = scrollTop > 1;
      const below = scrollTop + clientHeight < scrollHeight - 1;
      setEdges((prev) =>
        prev.above === above && prev.below === below ? prev : { above, below },
      );
    };

    measure();
    scroller.addEventListener('scroll', measure, { passive: true });
    const observer = new ResizeObserver(measure);
    observer.observe(scroller);
    for (const child of scroller.children) {
      observer.observe(child);
    }
    return () => {
      scroller.removeEventListener('scroll', measure);
      observer.disconnect();
    };
  }, []);

  return { ref, edges };
}
