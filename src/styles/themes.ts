import * as stylex from '@stylexjs/stylex';

import { dayColors, nightColors, themeColors } from './tokens.stylex';

// Each theme names every palette key: createTheme accepts a partial theme,
// and a missing key would quietly fall back to the system color scheme.
type Palette = Record<keyof typeof dayColors, string>;

const DAY: Palette = {
  bg: dayColors.bg,
  headerBg: dayColors.headerBg,
  panel: dayColors.panel,
  ink: dayColors.ink,
  muted: dayColors.muted,
  line: dayColors.line,
  lineSoft: dayColors.lineSoft,
  grid: dayColors.grid,
  glow: dayColors.glow,
  xhair: dayColors.xhair,
  accent: dayColors.accent,
  accentText: dayColors.accentText,
  onAccent: dayColors.onAccent,
  map: dayColors.map,
  contour: dayColors.contour,
  routeSoft: dayColors.routeSoft,
  litRing: dayColors.litRing,
  litHalo: dayColors.litHalo,
  pinRing: dayColors.pinRing,
};

const NIGHT: Palette = {
  bg: nightColors.bg,
  headerBg: nightColors.headerBg,
  panel: nightColors.panel,
  ink: nightColors.ink,
  muted: nightColors.muted,
  line: nightColors.line,
  lineSoft: nightColors.lineSoft,
  grid: nightColors.grid,
  glow: nightColors.glow,
  xhair: nightColors.xhair,
  accent: nightColors.accent,
  accentText: nightColors.accentText,
  onAccent: nightColors.onAccent,
  map: nightColors.map,
  contour: nightColors.contour,
  routeSoft: nightColors.routeSoft,
  litRing: nightColors.litRing,
  litHalo: nightColors.litHalo,
  pinRing: nightColors.pinRing,
};

// Applied only once the visitor picks Day or Night; until then the
// `themeColors` defaults follow `prefers-color-scheme`.
export const dayTheme = stylex.createTheme(themeColors, DAY);

export const nightTheme = stylex.createTheme(themeColors, NIGHT);
