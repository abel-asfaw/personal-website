import * as stylex from '@stylexjs/stylex';

import { colors, fonts } from '../styles/tokens.stylex';

export const skills = stylex.create({
  list: {
    gap: '1rem',
  },
  tile: {
    fontFamily: fonts.mono,
  },
  icon: {
    display: 'flex',
    color: colors.iconAccent,
    fontSize: 24,
  },
});
