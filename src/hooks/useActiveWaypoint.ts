import { useEffect, useState } from 'react';

// A section counts as current once its top passes this far down the viewport.
const READ_LINE = 0.35;

/**
 * The `href` of the waypoint section the visitor is reading, or null above the
 * first one. Pinned to the last waypoint at the bottom of the page, where a
 * short final section never reaches the read line.
 */
export function useActiveWaypoint(hrefs: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // A handful of rect reads per frame; React skips the re-render while the
    // answer stays the same.
    const update = () => {
      const line = window.innerHeight * READ_LINE;
      const { scrollHeight } = document.documentElement;
      // A page too short to scroll (say, while content loads) isn't "at the
      // bottom" of anything.
      const atBottom =
        scrollHeight > window.innerHeight &&
        window.innerHeight + window.scrollY >= scrollHeight - 2;

      let current: string | null = null;
      if (atBottom) {
        current = hrefs[hrefs.length - 1] ?? null;
      } else {
        for (const href of hrefs) {
          const section = document.querySelector(href);
          if (section && section.getBoundingClientRect().top <= line) {
            current = href;
          }
        }
      }
      setActive(current);
    };

    // Scroll and resize fire many times a frame; measure at most once per
    // frame.
    let frame = 0;
    const schedule = () => {
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          update();
        });
      }
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    // Sections mount after the Contentful data loads and can change height.
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
    };
  }, [hrefs]);

  return active;
}
