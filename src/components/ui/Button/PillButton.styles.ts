import * as stylex from '@stylexjs/stylex';

import { colors, easing, fonts } from '../../../styles/tokens.stylex';

export const pillButton = stylex.create({
  root: {
    borderRadius: '999px',
    paddingInline: '0.75rem',
    paddingBlock: '0.375rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontFamily: fonts.mono,
    backgroundColor: colors.pill,
    color: colors.white,
    scale: {
      default: '1',
      ':hover': '1.07',
    },
    transitionProperty: 'all',
    transitionDuration: '400ms',
    transitionTimingFunction: easing.inOut,
  },
});
