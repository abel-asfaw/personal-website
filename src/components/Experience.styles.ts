import * as stylex from '@stylexjs/stylex';

import { bp, colors, easing, fonts, shadows } from '../styles/tokens.stylex';

export const experience = stylex.create({
  content: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
    gap: '1.5rem',
  },
  stops: {
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(2, minmax(0, 1fr))',
      [bp.sm]: 'repeat(auto-fit, minmax(8rem, 1fr))',
    },
    gap: '0.5rem',
  },
  // Each stop is its own stacking context (it sets `translate`), so the
  // selected one is lifted to keep the sliding indicator above its siblings.
  itemSelected: {
    zIndex: 1,
  },
  stop: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    gap: '0.25rem',
    cursor: 'pointer',
    borderBottomLeftRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    paddingBottom: '0.75rem',
    textAlign: 'left',
    backgroundColor: {
      default: 'transparent',
      ':hover': colors.surface,
    },
    translate: {
      default: '0 0',
      ':hover': '0 -2px',
    },
    transitionProperty: 'background-color, translate',
    transitionDuration: '200ms',
    transitionTimingFunction: easing.out,
  },
  stopSelected: {
    backgroundColor: colors.surface,
    filter: shadows.drop25,
  },
  bar: {
    position: 'relative',
    height: '0.25rem',
    marginBottom: '0.5rem',
    borderRadius: '0.125rem',
    backgroundColor: colors.border,
  },
  indicator: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    borderRadius: '0.125rem',
    backgroundColor: colors.iconAccent,
  },
  stopDate: {
    paddingInline: '0.75rem',
    fontFamily: fonts.mono,
    fontSize: '0.8125rem',
    color: colors.textMuted,
  },
  stopCompany: {
    paddingInline: '0.75rem',
    fontWeight: 600,
    color: colors.textMuted,
    transitionProperty: 'color',
    transitionDuration: '200ms',
    transitionTimingFunction: easing.out,
  },
  stopCompanySelected: {
    color: colors.white,
  },
  panel: {
    // Tall enough for the longest role, so switching doesn't shift the page.
    minHeight: {
      default: null,
      [bp.sm]: '17rem',
    },
    borderRadius: '1rem',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.border,
    backgroundColor: colors.surface,
    filter: shadows.drop25,
    padding: {
      default: '1.25rem',
      [bp.sm]: '2rem',
    },
  },
  role: {
    display: 'flex',
    flex: 1,
    minWidth: 0,
    flexDirection: 'column',
    gap: '0.75rem',
  },
  dates: {
    fontFamily: fonts.mono,
    fontSize: '0.875rem',
    color: colors.iconAccent,
  },
  jobTitle: {
    fontSize: {
      default: '1.25rem',
      [bp.sm]: '1.5rem',
    },
    lineHeight: 1.25,
    fontWeight: 600,
    color: colors.textStrong,
  },
  company: {
    fontWeight: 400,
    color: colors.textMuted,
  },
  description: {
    lineHeight: 1.625,
    color: colors.textSoft,
  },
  skills: {
    fontFamily: fonts.mono,
    fontSize: '0.8125rem',
    lineHeight: 1.625,
    color: colors.textMuted,
  },
});
