import * as stylex from '@stylexjs/stylex';

import { bp, easing, fonts, themeColors } from '../../styles/tokens.stylex';

export const header = stylex.create({
  root: {
    position: 'sticky',
    top: 0,
    zIndex: 20,
    backgroundColor: themeColors.headerBg,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: themeColors.lineSoft,
  },
  bar: {
    maxWidth: 1240,
    marginInline: 'auto',
    paddingBlock: 10,
    paddingInline: 24,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    rowGap: 8,
    columnGap: 16,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    minHeight: 44,
    fontSize: 18,
    fontWeight: 700,
    color: themeColors.ink,
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    columnGap: 20,
    fontFamily: fonts.mono,
    fontSize: 13,
  },
  // The phone layout swaps these for the bottom dock.
  link: {
    position: 'relative',
    display: {
      default: 'none',
      [bp.wide]: 'flex',
    },
    alignItems: 'center',
    minHeight: 44,
    color: themeColors.muted,
    opacity: {
      default: 1,
      ':active': 0.6,
    },
    transitionProperty: 'color, opacity',
    transitionDuration: '0.2s',
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
  // The section on screen. Restates the hover condition, which would
  // otherwise keep winning over a plain `transform`.
  linkCurrent: {
    color: themeColors.ink,
  },
  underlineCurrent: {
    transform: {
      default: 'scaleX(1)',
      [bp.fineHover]: {
        default: 'scaleX(1)',
        [stylex.when.ancestor(':hover')]: 'scaleX(1)',
      },
    },
  },
});
