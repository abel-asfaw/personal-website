import * as stylex from '@stylexjs/stylex';

import { bp, easing, fonts, themeColors } from '../../styles/tokens.stylex';

export const footer = stylex.create({
  root: {
    maxWidth: 1240,
    marginInline: 'auto',
    // Less than the gap between sections: the footer closes the page rather
    // than starting a new part of it, and its rule does the separating.
    paddingTop: {
      default: 56,
      [bp.wide]: 80,
    },
    paddingInline: 24,
    paddingBottom: 32,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  eyebrow: {
    fontFamily: fonts.mono,
    fontSize: 13,
    color: themeColors.accentText,
  },
  meta: {
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: themeColors.line,
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
