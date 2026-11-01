import * as stylex from '@stylexjs/stylex';

import {
  bp,
  easing,
  fonts,
  shadows,
  themeColors,
} from '../../styles/tokens.stylex';

const rise = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(6px) scale(0.98)' },
  to: { opacity: 1, transform: 'none' },
});

export const dock = stylex.create({
  root: {
    display: {
      default: 'flex',
      [bp.wide]: 'none',
    },
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 8,
    position: 'fixed',
    right: 16,
    // Safari already ends the viewport above its floating toolbar.
    bottom: 6,
    zIndex: 30,
    fontFamily: fonts.mono,
  },
  // Frosted like the header, so it reads as part of the page chrome.
  chip: {
    gap: 10,
    paddingInlineStart: 16,
    paddingInlineEnd: 14,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    borderRadius: 999,
    backgroundColor: themeColors.headerBg,
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    color: themeColors.ink,
    fontSize: 12,
    opacity: {
      default: 1,
      ':active': 0.7,
    },
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    backgroundColor: themeColors.routeSoft,
    transitionProperty: 'background-color, box-shadow',
    transitionDuration: '0.2s',
  },
  // A section is on screen.
  dotLit: {
    backgroundColor: themeColors.litRing,
    boxShadow: `0 0 0 4px ${themeColors.litHalo}`,
  },
  position: {
    color: themeColors.muted,
  },
  chevron: {
    display: 'flex',
    color: themeColors.muted,
    transitionProperty: 'transform',
    transitionDuration: {
      default: '0.2s',
      [bp.reducedMotion]: '0s',
    },
    transitionTimingFunction: easing.out,
  },
  chevronOpen: {
    transform: 'rotate(180deg)',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    margin: 0,
    padding: 6,
    listStyle: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    borderRadius: 18,
    backgroundColor: themeColors.headerBg,
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    boxShadow: shadows.dock,
    transformOrigin: 'bottom right',
    animationName: {
      default: rise,
      [bp.reducedMotion]: 'none',
    },
    animationDuration: '0.2s',
    animationTimingFunction: easing.spring,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    minHeight: 44,
    paddingInline: 12,
    borderRadius: 12,
    fontSize: 13,
    color: themeColors.ink,
    opacity: {
      default: 1,
      ':active': 0.7,
    },
    transitionProperty: 'background-color, opacity',
    transitionDuration: '0.2s',
  },
  number: {
    width: 18,
    fontSize: 10,
    color: themeColors.muted,
  },
  // The section on screen.
  current: {
    backgroundColor: themeColors.lineSoft,
  },
});
