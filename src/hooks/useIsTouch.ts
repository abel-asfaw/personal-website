import { useMediaQuery } from './useMediaQuery';

/** True on touch-first devices, where the copy says "tap" instead of "click". */
export function useIsTouch() {
  return useMediaQuery('(hover: none)');
}
