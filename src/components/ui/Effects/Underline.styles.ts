import * as stylex from '@stylexjs/stylex';

import { colors, easing } from '../../../styles/tokens.stylex';

export const underline = stylex.create({
  root: {
    marginBottom: '-0.125rem',
    marginLeft: {
      default: 'auto',
      [stylex.when.ancestor(':hover')]: 0,
    },
    width: {
      default: 0,
      [stylex.when.ancestor(':hover')]: '100%',
    },
    borderRadius: '0.25rem',
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderColor: {
      default: colors.page,
      [stylex.when.ancestor(':hover')]: colors.borderBright,
    },
    transitionProperty: 'all',
    transitionDuration: '300ms',
    transitionTimingFunction: easing.in,
  },
});
