import * as stylex from '@stylexjs/stylex';

import { bp, fonts, shadows, themeColors } from '../../styles/tokens.stylex';

export const dock = stylex.create({
  root: {
    display: {
      default: 'flex',
      [bp.wide]: 'none',
    },
    position: 'fixed',
    left: '50%',
    bottom: 14,
    transform: 'translateX(-50%)',
    zIndex: 30,
    gap: 2,
    padding: 5,
    borderRadius: 999,
    backgroundColor: themeColors.ink,
    boxShadow: shadows.dock,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 44,
    paddingInline: 14,
    borderRadius: 999,
    fontFamily: fonts.mono,
    fontSize: 12,
    color: themeColors.bg,
    opacity: {
      default: 1,
      ':active': 0.7,
    },
    transitionProperty: 'background-color, color, opacity',
    transitionDuration: '0.2s',
  },
  // The last waypoint ("Hi") is the call to action.
  cta: {
    backgroundColor: themeColors.accent,
    color: themeColors.onAccent,
  },
  // The section on screen.
  current: {
    backgroundColor: themeColors.bg,
    color: themeColors.ink,
  },
  // "Hi" keeps its accent fill and gains a ring when its section is on screen.
  ctaCurrent: {
    boxShadow: `inset 0 0 0 2px ${themeColors.onAccent}`,
  },
});
