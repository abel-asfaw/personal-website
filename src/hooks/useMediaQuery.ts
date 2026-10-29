import { useCallback, useSyncExternalStore } from 'react';

export function useMediaQuery(query: string) {
  // Stable per query, so React keeps one listener instead of re-subscribing
  // on every render.
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener('change', onChange);
      return () => list.removeEventListener('change', onChange);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
  );
}
