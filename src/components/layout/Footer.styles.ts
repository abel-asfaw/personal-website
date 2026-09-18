import * as stylex from '@stylexjs/stylex';

import { bp, colors } from '../../styles/tokens.stylex';

export const footer = stylex.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    padding: '1.5rem',
    color: colors.textMuted,
  },
  links: {
    marginTop: {
      default: '0.5rem',
      [bp.xs]: 0,
    },
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  link: {
    color: {
      default: null,
      ':hover': colors.white,
    },
  },
});
