import * as stylex from '@stylexjs/stylex';

import { bp, colors, shadows } from '../styles/tokens.stylex';

const wave = stylex.keyframes({
  '0%': { backgroundSize: '400% 400%', backgroundPosition: 'left' },
  '100%': { backgroundSize: '400% 400%', backgroundPosition: 'right' },
});

const bouncy = stylex.keyframes({
  '0%': { transform: 'translateY(15%)' },
  '100%': { transform: 'translateY(-15%)' },
});

export const about = stylex.create({
  root: {
    gridColumn: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    textAlign: 'center',
  },
  portrait: {
    position: 'relative',
    aspectRatio: '1/1',
    width: {
      default: '12rem',
      [bp.sm]: '20rem',
    },
  },
  heading: {
    marginBottom: '-0.25rem',
    fontSize: {
      default: '1.875rem',
      [bp.sm]: '2.25rem',
    },
    lineHeight: {
      default: '2.25rem',
      [bp.sm]: '2.5rem',
    },
    fontWeight: 600,
    color: colors.textStrong,
  },
  tagline: {
    backgroundImage: `linear-gradient(to right in oklab, ${colors.gradientA}, ${colors.gradientB}, ${colors.gradientC})`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    animationName: wave,
    animationDuration: '5s',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },
  bio: {
    width: {
      default: '100%',
      [bp.sm]: '83.333333%',
    },
    lineHeight: 1.625,
  },
  ctaRow: {
    display: 'flex',
    gap: '1rem',
    textAlign: 'center',
    fontWeight: 600,
  },
  primaryCta: {
    backgroundColor: {
      default: colors.accent,
      ':hover': colors.accentHover,
    },
    color: colors.white,
    filter: shadows.drop25,
  },
  secondaryCta: {
    borderWidth: '0.5px',
    borderStyle: 'solid',
    borderColor: colors.border,
    backgroundColor: {
      default: colors.surface,
      ':hover': colors.surfaceHover,
    },
    color: {
      default: null,
      ':hover': colors.white,
    },
    filter: shadows.drop25,
  },
  chevron: {
    flexShrink: 0,
    willChange: 'transform',
    animationName: bouncy,
    animationDuration: '800ms',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-out',
    animationIterationCount: 'infinite',
  },
  mailIcon: {
    flexShrink: 0,
  },
});
