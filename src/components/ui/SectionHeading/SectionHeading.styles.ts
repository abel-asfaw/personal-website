import * as stylex from '@stylexjs/stylex';

import { fonts, themeColors } from '../../../styles/tokens.stylex';

export const sectionHeading = stylex.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  eyebrow: {
    fontFamily: fonts.mono,
    fontSize: 13,
    color: themeColors.accentText,
  },
  title: {
    fontSize: 'clamp(34px, 4.4vw, 56px)',
    lineHeight: 1,
    fontWeight: 700,
    letterSpacing: '-0.035em',
  },
});
