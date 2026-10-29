import * as stylex from '@stylexjs/stylex';

import { fonts, themeColors } from './styles/tokens.stylex';

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
});
