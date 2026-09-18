import * as stylex from '@stylexjs/stylex';

import { bp, colors, fonts } from './styles/tokens.stylex';

export const app = stylex.create({
  root: {
    fontFamily: fonts.sans,
    display: 'grid',
    minHeight: '100vh',
    gridTemplateRows: 'auto 1fr auto',
    gap: {
      default: '3rem',
      [bp.sm]: '4rem',
    },
    color: colors.text,
  },
  // Centered content column; direct children set `gridColumn: 2`.
  main: {
    display: 'grid',
    gridTemplateColumns: '1fr min(75ch, calc(100% - 48px)) 1fr',
    columnGap: 24,
    rowGap: {
      default: '5rem',
      [bp.sm]: '8rem',
    },
    alignItems: 'center',
  },
  loading: {
    gridColumn: 2,
    placeSelf: 'center',
  },
});
