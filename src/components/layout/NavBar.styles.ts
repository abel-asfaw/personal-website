import * as stylex from '@stylexjs/stylex';

import { bp, colors, shadows } from '../../styles/tokens.stylex';

export const navBar = stylex.create({
  root: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    backgroundColor: colors.navGlass,
    paddingBlock: '1rem',
    boxShadow: shadows.sm,
    filter: shadows.drop30,
    backdropFilter: 'blur(8px)',
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: {
      default: '1.5rem',
      [bp.sm]: '5rem',
    },
    fontWeight: 600,
  },
  link: {
    color: colors.textStrong,
  },
});
