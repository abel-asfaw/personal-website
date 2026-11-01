import * as stylex from '@stylexjs/stylex';

const DARK = '@media (prefers-color-scheme: dark)';

// Colors that serve as more than one token below.
const DAY_PANEL = '#F9FBF7';
const NIGHT_ROUTE_SOFT = '#3A4D43';

// The one place the theme palette is written down. `themeColors` follows the
// system color scheme; `dayTheme` / `nightTheme` in `themes.ts` pin one when
// the visitor picks. main.css repeats the page background and focus colors.
export const dayColors = stylex.defineConsts({
  bg: '#EDF0EA',
  headerBg: 'rgba(237, 240, 234, 0.85)',
  panel: DAY_PANEL,
  ink: '#12201A',
  muted: '#4D5C53',
  line: '#D2D9CE',
  lineSoft: '#E1E6DD',
  grid: 'rgba(18, 32, 26, 0.05)',
  glow: 'rgba(37, 87, 245, 0.15)',
  xhair: 'rgba(37, 87, 245, 0.22)',
  accent: '#2557F5',
  accentText: '#1D45C4',
  onAccent: '#FFFFFF',
  map: '#E3E9DF',
  contour: '#C9D3C4',
  routeSoft: '#A3B0A0',
  litRing: 'rgba(232, 140, 0, 0.9)',
  litHalo: 'rgba(232, 140, 0, 0.22)',
  // Outline around the map's position pin.
  pinRing: DAY_PANEL,
});

export const nightColors = stylex.defineConsts({
  bg: '#0B110E',
  headerBg: 'rgba(11, 17, 14, 0.82)',
  panel: '#111A15',
  ink: '#E4EEE7',
  muted: '#97AA9E',
  line: '#26342C',
  lineSoft: '#1B2620',
  grid: 'rgba(228, 238, 231, 0.045)',
  glow: 'rgba(110, 155, 255, 0.22)',
  xhair: 'rgba(143, 178, 255, 0.28)',
  accent: '#6E9BFF',
  accentText: '#8FB2FF',
  onAccent: '#06102A',
  map: '#0E1612',
  contour: '#1E2B24',
  routeSoft: NIGHT_ROUTE_SOFT,
  litRing: 'rgba(255, 200, 87, 0.95)',
  litHalo: 'rgba(255, 200, 87, 0.25)',
  // The ahead-stop gray, so the pin doesn't sink into the dark map.
  pinRing: NIGHT_ROUTE_SOFT,
});

// Day values by default, night values when the system prefers dark.
export const themeColors = stylex.defineVars({
  bg: { default: dayColors.bg, [DARK]: nightColors.bg },
  headerBg: { default: dayColors.headerBg, [DARK]: nightColors.headerBg },
  panel: { default: dayColors.panel, [DARK]: nightColors.panel },
  ink: { default: dayColors.ink, [DARK]: nightColors.ink },
  muted: { default: dayColors.muted, [DARK]: nightColors.muted },
  line: { default: dayColors.line, [DARK]: nightColors.line },
  lineSoft: { default: dayColors.lineSoft, [DARK]: nightColors.lineSoft },
  grid: { default: dayColors.grid, [DARK]: nightColors.grid },
  glow: { default: dayColors.glow, [DARK]: nightColors.glow },
  xhair: { default: dayColors.xhair, [DARK]: nightColors.xhair },
  accent: { default: dayColors.accent, [DARK]: nightColors.accent },
  accentText: { default: dayColors.accentText, [DARK]: nightColors.accentText },
  onAccent: { default: dayColors.onAccent, [DARK]: nightColors.onAccent },
  map: { default: dayColors.map, [DARK]: nightColors.map },
  contour: { default: dayColors.contour, [DARK]: nightColors.contour },
  routeSoft: { default: dayColors.routeSoft, [DARK]: nightColors.routeSoft },
  litRing: { default: dayColors.litRing, [DARK]: nightColors.litRing },
  litHalo: { default: dayColors.litHalo, [DARK]: nightColors.litHalo },
  pinRing: { default: dayColors.pinRing, [DARK]: nightColors.pinRing },
});

export const colors = stylex.defineConsts({
  online: '#22A35A',
  // Letterbox behind project screenshots, in both themes.
  screen: '#0B0B10',
  // Along a scroller's edge with more content past it.
  scrollShadow: 'rgba(0, 0, 0, 0.18)',
});

export const fonts = stylex.defineConsts({
  sans: "'Space Grotesk', system-ui, sans-serif",
  mono: "'DM Mono', ui-monospace, monospace",
});

export const shadows = stylex.defineConsts({
  lift: '0 10px 24px -14px rgba(0, 0, 0, 0.5)',
  float: '0 10px 24px -12px rgba(0, 0, 0, 0.5)',
  stop: '0 4px 14px -6px rgba(0, 0, 0, 0.4)',
  dock: '0 14px 40px -12px rgba(0, 0, 0, 0.5)',
  window: '0 24px 48px -18px rgba(0, 0, 0, 0.55)',
  portrait: '0 24px 48px -24px rgba(18, 32, 26, 0.45)',
});

export const easing = stylex.defineConsts({
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Quick settle used for cards, chips and the compass needle; mirrored as
  // SPRING_EASE in motion.ts for Motion.
  spring: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
});

export const sizes = stylex.defineConsts({
  // The least a route stop or open tabs card stands on a phone; both match,
  // so the two sections read as one set.
  phoneCard: '520px',
});

export const bp = stylex.defineConsts({
  // Above the design's 700px phone layout. Dock.tsx repeats the query to
  // close its list here, so the two change together.
  wide: '@media (min-width: 701px)',
  // Room for the hero's copy and compass side by side.
  split: '@media (min-width: 960px)',
  fineHover: '@media (hover: hover) and (pointer: fine)',
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
});
