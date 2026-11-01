import * as stylex from '@stylexjs/stylex';

import { bp, easing, fonts, themeColors } from '../../styles/tokens.stylex';

export const header = stylex.create({
  root: {
    position: 'sticky',
    top: 0,
    zIndex: 20,
    backgroundColor: themeColors.headerBg,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: themeColors.lineSoft,
  },
  bar: {
    maxWidth: 1240,
    marginInline: 'auto',
    paddingBlock: 10,
    paddingInline: {
      default: 16,
      [bp.wide]: 24,
    },
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    rowGap: 8,
    columnGap: {
      default: 12,
      [bp.wide]: 20,
    },
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    minHeight: 44,
    // On phones the pin alone is 22px wide; the padding makes a 44px tap
    // target and the negative margin keeps the pin on the page gutter.
    paddingInline: {
      default: 11,
      [bp.wide]: 0,
    },
    marginInline: {
      default: -11,
      [bp.wide]: 0,
    },
    fontSize: 18,
    fontWeight: 700,
    color: themeColors.ink,
  },
  // Phones keep just the pin, so the waypoints fit beside it.
  name: {
    display: {
      default: 'none',
      [bp.wide]: 'inline',
    },
  },
  // Phones put the waypoints beside the pin and push the toggle to the far
  // end; the wide layout groups them on the right.
  nav: {
    marginInlineStart: {
      default: 0,
      [bp.wide]: 'auto',
    },
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    columnGap: {
      default: 8,
      [bp.wide]: 20,
    },
    fontFamily: fonts.mono,
    // Smaller on phones so the pin, links and toggle fit one row at 320px.
    fontSize: {
      default: 12,
      [bp.wide]: 14,
    },
  },
  toggle: {
    display: 'flex',
    marginInlineStart: {
      default: 'auto',
      [bp.wide]: 0,
    },
  },
  link: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minHeight: 44,
    color: themeColors.muted,
    opacity: {
      default: 1,
      ':active': 0.6,
    },
    transitionProperty: 'color, opacity',
    transitionDuration: '0.2s',
  },
  underline: {
    position: 'absolute',
    insetInline: 0,
    bottom: 10,
    height: 1,
    backgroundColor: 'currentColor',
    transformOrigin: 'left',
    transform: {
      default: 'scaleX(0)',
      [bp.fineHover]: {
        default: 'scaleX(0)',
        [stylex.when.ancestor(':hover')]: 'scaleX(1)',
      },
    },
    transitionProperty: 'transform',
    transitionDuration: {
      default: '0.25s',
      [bp.reducedMotion]: '0s',
    },
    transitionTimingFunction: easing.out,
  },
  // The section on screen. Restates the hover condition, which would
  // otherwise keep winning over a plain `transform`.
  linkCurrent: {
    color: themeColors.ink,
  },
  underlineCurrent: {
    transform: {
      default: 'scaleX(1)',
      [bp.fineHover]: {
        default: 'scaleX(1)',
        [stylex.when.ancestor(':hover')]: 'scaleX(1)',
      },
    },
  },
});
