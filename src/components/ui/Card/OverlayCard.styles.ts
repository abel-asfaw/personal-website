import * as stylex from '@stylexjs/stylex';

import { colors, easing, shadows } from '../../../styles/tokens.stylex';

export const overlayCard = stylex.create({
  root: {
    maxWidth: '24rem',
    overflow: 'hidden',
    borderRadius: '0.5rem',
    borderWidth: '0.5px',
    borderStyle: 'solid',
    borderColor: colors.border,
    backgroundColor: colors.surface,
    filter: shadows.drop25,
  },
  imageLink: {
    position: 'relative',
    display: 'flex',
    height: '50%',
    overflow: 'hidden',
  },
  image: {
    height: 'auto',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    opacity: {
      default: 0,
      ':hover': 0.8,
    },
    transitionProperty: 'opacity',
    transitionDuration: '300ms',
    transitionTimingFunction: easing.in,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    paddingInline: '1.5rem',
    paddingBlock: '1rem',
  },
  title: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    fontWeight: 500,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  links: {
    display: 'flex',
    gap: '0.75rem',
  },
  link: {
    display: 'inline-flex',
    textAlign: 'left',
    color: {
      default: colors.textMuted,
      ':hover': colors.white,
    },
  },
  toggle: {
    textAlign: 'right',
    cursor: 'pointer',
  },
  collapsed: {
    overflow: 'hidden',
  },
  description: {
    lineHeight: 1.625,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    paddingTop: '0.75rem',
  },
});
