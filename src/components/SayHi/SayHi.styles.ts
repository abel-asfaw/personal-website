import * as stylex from '@stylexjs/stylex';

import { bp, easing, fonts, themeColors } from '../../styles/tokens.stylex';

// On touch screens the arrow nudges now and then, standing in for hover.
const nudge = stylex.keyframes({
  '0%, 60%, 100%': { transform: 'none' },
  '75%': { transform: 'translateX(12px)' },
});

const BIG = 'clamp(44px, 8vw, 120px)';

export const sayHi = stylex.create({
  root: {
    maxWidth: 1240,
    marginInline: 'auto',
    paddingTop: {
      default: 88,
      [bp.wide]: 128,
    },
    paddingInline: 24,
    // Leaves room for the phone dock.
    paddingBottom: {
      default: 120,
      [bp.wide]: 40,
    },
    scrollMarginTop: 64,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  eyebrow: {
    fontFamily: fonts.mono,
    fontSize: 13,
    color: themeColors.accentText,
  },
  mail: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
    paddingBlock: 28,
    borderBlockWidth: 2,
    borderBlockStyle: 'solid',
    borderBlockColor: themeColors.ink,
    color: themeColors.ink,
  },
  say: {
    fontSize: BIG,
    lineHeight: 0.95,
    fontWeight: 700,
    letterSpacing: {
      default: '-0.05em',
      [stylex.when.ancestor(':active')]: '-0.035em',
      [bp.fineHover]: {
        default: '-0.05em',
        [stylex.when.ancestor(':hover')]: '-0.035em',
      },
    },
    transitionProperty: 'letter-spacing',
    transitionDuration: {
      default: '0.4s',
      [bp.reducedMotion]: '0s',
    },
    transitionTimingFunction: easing.spring,
  },
  arrow: {
    fontSize: BIG,
    lineHeight: 1,
    color: themeColors.accentText,
    transform: {
      default: null,
      [stylex.when.ancestor(':active')]: 'translateX(18px)',
      [bp.fineHover]: {
        default: null,
        [stylex.when.ancestor(':hover')]: 'translateX(18px)',
      },
    },
    transitionProperty: 'transform',
    transitionDuration: {
      default: '0.35s',
      [bp.reducedMotion]: '0s',
    },
    transitionTimingFunction: easing.spring,
    animationName: {
      default: null,
      [bp.noHover]: {
        default: nudge,
        [bp.reducedMotion]: null,
      },
    },
    animationDuration: '2.8s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },
  meta: {
    paddingTop: 28,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    fontFamily: fonts.mono,
    fontSize: 13,
    color: themeColors.muted,
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: 4,
    columnGap: 20,
  },
  link: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minHeight: 44,
    color: themeColors.ink,
  },
  underline: {
    position: 'absolute',
    insetInline: 0,
    bottom: 10,
    height: 1,
    backgroundColor: 'currentColor',
    transformOrigin: 'left',
    transform: {
      default: 'scaleX(0)',
      [bp.fineHover]: {
        default: 'scaleX(0)',
        [stylex.when.ancestor(':hover')]: 'scaleX(1)',
      },
    },
    transitionProperty: 'transform',
    transitionDuration: {
      default: '0.25s',
      [bp.reducedMotion]: '0s',
    },
    transitionTimingFunction: easing.out,
  },
});
