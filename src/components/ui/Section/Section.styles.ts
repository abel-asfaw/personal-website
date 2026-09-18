import * as stylex from '@stylexjs/stylex';

import { colors } from '../../../styles/tokens.stylex';

export const section = stylex.create({
  root: {
    gridColumn: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
    fontWeight: 600,
    color: colors.textStrong,
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
