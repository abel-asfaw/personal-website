import * as stylex from '@stylexjs/stylex';

import { bp, colors } from '../styles/tokens.stylex';

export const experience = stylex.create({
  list: {
    gap: '1rem',
  },
  itemHeader: {
    display: 'flex',
    flex: 1,
    flexDirection: {
      default: 'column',
      [bp.sm]: 'row',
    },
    alignItems: 'flex-start',
    justifyContent: {
      default: null,
      [bp.sm]: 'space-between',
    },
  },
  jobTitle: {
    fontWeight: 500,
  },
  dates: {
    color: colors.textMuted,
    textAlign: {
      default: null,
      [bp.sm]: 'right',
    },
  },
  description: {
    lineHeight: 1.625,
    color: colors.textSoft,
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    paddingTop: '0.5rem',
  },
  item: {
    width: '100%',
  },
});
