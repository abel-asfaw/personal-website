import * as stylex from '@stylexjs/stylex';

import {
  bp,
  easing,
  fonts,
  shadows,
  themeColors,
} from '../../../styles/tokens.stylex';

// Shared by <Button> and <LinkButton>: the same pill on a <button> or an <a>.
export const button = stylex.create({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    minHeight: 48,
    paddingBlock: 0,
    paddingInline: 22,
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    fontWeight: 700,
    whiteSpace: 'nowrap',
    transform: {
      default: null,
      ':active': 'scale(0.96)',
      ':disabled': 'none',
      [bp.fineHover]: {
        default: null,
        ':hover': 'translateY(-2px)',
        ':active': 'scale(0.98)',
        ':disabled': 'none',
      },
    },
    boxShadow: {
      default: null,
      [bp.fineHover]: {
        default: null,
        ':hover': shadows.lift,
        ':disabled': 'none',
      },
    },
    opacity: {
      default: null,
      ':disabled': 0.4,
    },
    transitionProperty:
      'transform, background-color, color, border-color, box-shadow',
    transitionDuration: {
      default: '0.2s',
      [bp.reducedMotion]: '0s',
    },
    transitionTimingFunction: easing.out,
  },
  solid: {
    backgroundColor: themeColors.accent,
    color: themeColors.onAccent,
  },
  outline: {
    borderColor: themeColors.line,
    backgroundColor: themeColors.bg,
    color: themeColors.ink,
  },
  ink: {
    backgroundColor: themeColors.ink,
    color: themeColors.bg,
  },
  // Small mono pill, e.g. the toolbox's pause toggle.
  quiet: {
    minHeight: 44,
    paddingInline: 16,
    borderColor: themeColors.line,
    backgroundColor: themeColors.panel,
    color: themeColors.ink,
    fontFamily: fonts.mono,
    fontSize: 13,
    fontWeight: 400,
  },
  // Square-ish icon button, e.g. the route's previous/next arrows.
  round: {
    width: 48,
    paddingInline: 0,
    borderColor: themeColors.line,
    backgroundColor: themeColors.panel,
    color: themeColors.ink,
    fontWeight: 400,
  },
});
