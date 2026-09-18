import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineConsts({
  page: '#09090b',
  surface: '#18181b',
  surfaceHover: '#27272a',
  border: '#27272a',
  borderSubtle: '#1f1f22',
  borderBright: '#e4e4e7',
  textStrong: '#f5f5f5',
  text: '#e5e5e5',
  textSoft: '#d4d4d4',
  textMuted: '#a1a1a1',
  white: '#ffffff',
  navGlass: '#1e293933',
  accent: '#009231',
  accentHover: 'oklch(52.7% 0.154 150.069)',
  iconAccent: '#05df72',
  pill: '#4f39f6',
  gradientA: '#46ecd5',
  gradientB: 'oklch(62.7% 0.265 303.9)',
  gradientC: 'oklch(70.5% 0.213 47.604)',
});

export const fonts = stylex.defineConsts({
  sans: "'GoogleSans', sans-serif",
  mono: "'Roboto', sans-serif",
});

export const shadows = stylex.defineConsts({
  drop25: 'drop-shadow(0 3px 3px rgb(0 0 0 / 0.25))',
  drop30: 'drop-shadow(0 3px 3px rgb(0 0 0 / 0.3))',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
});

export const easing = stylex.defineConsts({
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
});

export const bp = stylex.defineConsts({
  xs: '@media (min-width: 376px)',
  sm: '@media (min-width: 640px)',
});
