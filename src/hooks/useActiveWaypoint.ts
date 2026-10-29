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
    // A handful of rect reads per scroll event; React skips the re-render
    // while the answer stays the same.
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

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    // Sections mount after the Contentful data loads and can change height.
    const observer = new ResizeObserver(update);
    observer.observe(document.body);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      observer.disconnect();
    };
  }, [hrefs]);

  return active;
}
