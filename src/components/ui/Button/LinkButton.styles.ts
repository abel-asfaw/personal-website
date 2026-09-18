import * as stylex from '@stylexjs/stylex';

import { easing } from '../../../styles/tokens.stylex';

export const linkButton = stylex.create({
  root: {
    transitionProperty: 'all',
    transitionDuration: '300ms',
    transitionTimingFunction: easing.in,
  },
  nav: {
    padding: '0.25rem',
  },
  prompt: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '0.25rem',
    paddingBlock: '0.625rem',
    paddingInline: '1rem',
  },
});
