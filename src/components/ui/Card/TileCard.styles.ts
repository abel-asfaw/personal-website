import * as stylex from '@stylexjs/stylex';

import { bp, colors, shadows } from '../../../styles/tokens.stylex';

export const tileCard = stylex.create({
  root: {
    display: 'flex',
    height: '100%',
    width: {
      default: '100%',
      [bp.xs]: '10rem',
    },
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '0.25rem',
    borderWidth: '0.5px',
    borderStyle: 'solid',
    borderColor: colors.border,
    backgroundColor: {
      default: colors.surface,
      ':hover': colors.surfaceHover,
    },
    padding: '0.75rem',
    cursor: 'default',
    scale: {
      default: '1',
      ':hover': '1.08',
    },
    willChange: 'transform',
    filter: shadows.drop25,
    transitionProperty: 'all',
    transitionDuration: '500ms',
  },
});
