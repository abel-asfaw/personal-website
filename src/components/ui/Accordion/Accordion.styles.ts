import * as stylex from '@stylexjs/stylex';
import { bp, colors, shadows } from '../../../styles/tokens.stylex';

export const accordion = stylex.create({
  panel: {
    overflow: 'hidden',
  },
  panelBody: {
    paddingTop: '1rem',
  },
});

export const accordionContent = stylex.create({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderRadius: '0.25rem',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.border,
    backgroundColor: colors.page,
    padding: '1rem',
  },
});

export const accordionHeader = stylex.create({
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    userSelect: 'none',
    borderRadius: '0.25rem',
    borderWidth: '0.5px',
    borderStyle: 'solid',
    borderColor: colors.border,
    paddingInline: {
      default: '0.5rem',
      [bp.sm]: '1rem',
    },
    paddingBlock: '1rem',
    filter: shadows.drop25,
  },
  icon: {
    color: colors.iconAccent,
  },
});
