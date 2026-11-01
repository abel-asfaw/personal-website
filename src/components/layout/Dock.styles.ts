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
    // The list follows the chip in the markup, so Tab goes from the chip into
    // the links, but it stacks above it.
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    gap: 8,
    position: 'fixed',
    right: 16,
    // Safari already ends the viewport above its floating toolbar.
    bottom: 6,
    zIndex: 30,
    fontFamily: fonts.mono,
  },
  // The chip and the list are frosted like the header, so they read as part
  // of the page chrome.
  frosted: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    backgroundColor: themeColors.headerBg,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  },
  chip: {
    gap: 10,
    paddingInlineStart: 16,
    paddingInlineEnd: 14,
    borderRadius: 999,
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
    transitionDuration: {
      default: '0.2s',
      [bp.reducedMotion]: '0s',
    },
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
    borderRadius: 18,
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
    transitionDuration: {
      default: '0.2s',
      [bp.reducedMotion]: '0s',
    },
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
