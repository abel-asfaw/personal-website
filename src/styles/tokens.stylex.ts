import * as stylex from '@stylexjs/stylex';

// Exact Tailwind v4.1 palette values. Semantic names; Tailwind shade in comment.
export const colors = stylex.defineConsts({
  page: 'oklch(14.1% 0.005 285.823)', // zinc-950
  surface: 'oklch(21% 0.006 285.885)', // zinc-900
  surfaceHover: 'oklch(27.4% 0.006 286.033)', // zinc-800
  border: 'oklch(27.4% 0.006 286.033)', // zinc-800
  borderBright: 'oklch(92% 0.004 286.32)', // zinc-200
  textStrong: 'oklch(97% 0 0)', // neutral-100
  text: 'oklch(92.2% 0 0)', // neutral-200
  textSoft: 'oklch(87% 0 0)', // neutral-300
  textMuted: 'oklch(70.8% 0 0)', // neutral-400
  white: '#ffffff',
  navGlass: 'oklch(27.8% 0.033 256.848 / 0.2)', // gray-800/20
  accent: 'oklch(57.465% 0.17274 146.599)', // custom green-650
  accentHover: 'oklch(52.7% 0.154 150.069)', // green-700
  iconAccent: 'oklch(79.2% 0.209 151.711)', // green-400
  pill: 'oklch(51.1% 0.262 276.966)', // indigo-600
  gradientA: 'oklch(85.5% 0.138 181.071)', // teal-300
  gradientB: 'oklch(62.7% 0.265 303.9)', // purple-500
  gradientC: 'oklch(70.5% 0.213 47.604)', // orange-500
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
