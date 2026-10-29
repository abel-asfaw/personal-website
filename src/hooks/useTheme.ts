import { useEffect, useState } from 'react';

import { useMediaQuery } from './useMediaQuery';

export type Theme = 'day' | 'night';

const STORAGE_KEY = 'theme';

function readSavedTheme(): Theme | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'day' || saved === 'night' ? saved : null;
  } catch {
    return null;
  }
}

/**
 * Follows the system color scheme until the visitor picks Day or Night,
 * then remembers that choice. `picked` is null while following the system.
 */
export function useTheme() {
  const prefersNight = useMediaQuery('(prefers-color-scheme: dark)');
  const [picked, setPicked] = useState<Theme | null>(readSavedTheme);
  const theme: Theme = picked ?? (prefersNight ? 'night' : 'day');

  // Mirrors the choice onto <html> so the page background and color-scheme
  // outside the app root match (see main.css and the script in index.html).
  useEffect(() => {
    if (picked) {
      document.documentElement.dataset.theme = picked;
    } else {
      delete document.documentElement.dataset.theme;
    }
  }, [picked]);

  const toggle = () => {
    const next: Theme = theme === 'night' ? 'day' : 'night';
    setPicked(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be blocked; the choice still holds for this visit.
    }
  };

  return { theme, picked, toggle };
}
