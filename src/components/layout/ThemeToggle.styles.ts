import * as stylex from '@stylexjs/stylex';

import { bp, fonts, themeColors } from '../../styles/tokens.stylex';

export const themeToggle = stylex.create({
  root: {
    display: 'flex',
    // Stretch the segments to fill the pill so their corners sit evenly
    // inside its curve, rather than centering short ones in it.
    alignItems: 'stretch',
    gap: 2,
    minHeight: 40,
    // Longhands: Button's paddingBlock/paddingInline would beat `padding`.
    paddingBlock: 4,
    paddingInline: 4,
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    backgroundColor: themeColors.panel,
  },
  segment: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    paddingBlock: 4,
    paddingInline: 12,
    borderRadius: 999,
    fontFamily: fonts.mono,
    fontSize: 12,
    backgroundColor: 'transparent',
    color: themeColors.muted,
    transitionProperty: 'background-color, color',
    transitionDuration: {
      default: '0.3s',
      [bp.reducedMotion]: '0s',
    },
  },
  active: {
    backgroundColor: themeColors.ink,
    color: themeColors.bg,
  },
  word: {
    display: {
      default: 'none',
      [bp.wide]: 'inline',
    },
  },
});
