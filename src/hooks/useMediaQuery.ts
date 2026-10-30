import { useCallback, useMemo, useSyncExternalStore } from 'react';

export function useMediaQuery(query: string) {
  // One MediaQueryList per query: renders read `.matches` from it, and React
  // keeps one listener instead of re-subscribing on every render.
  const list = useMemo(() => window.matchMedia(query), [query]);
  const subscribe = useCallback(
    (onChange: () => void) => {
      list.addEventListener('change', onChange);
      return () => list.removeEventListener('change', onChange);
    },
    [list],
  );
  return useSyncExternalStore(subscribe, () => list.matches);
}
