import * as stylex from '@stylexjs/stylex';

import { bp, fonts, themeColors } from './styles/tokens.stylex';

export const app = stylex.create({
  root: {
    minHeight: '100vh',
    backgroundColor: themeColors.bg,
    color: themeColors.ink,
    fontFamily: fonts.sans,
    fontSize: 17,
    lineHeight: 1.55,
    transitionProperty: 'background-color, color',
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease',
  },
  // The one gap between sections, so none of them pads itself.
  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: {
      default: 88,
      [bp.wide]: 128,
    },
  },
});
