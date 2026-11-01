import * as stylex from '@stylexjs/stylex';

import {
  bp,
  colors,
  easing,
  fonts,
  shadows,
  themeColors,
} from '../../styles/tokens.stylex';

const appear = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(12px)' },
  to: { opacity: 1, transform: 'none' },
});

export const openTabs = stylex.create({
  root: {
    // Fills main's flex column up to maxWidth; the auto margins alone would
    // shrink it to its content.
    width: '100%',
    maxWidth: 1240,
    marginInline: 'auto',
    paddingInline: 24,
    scrollMarginTop: 96,
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
  },
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 16,
  },
  tabs: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
  },
  tabPicked: {
    borderColor: themeColors.accent,
    backgroundColor: themeColors.accent,
    color: themeColors.onAccent,
  },
  body: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
  },
  // The dotted desk the windows sit on. Phones get the front window alone,
  // in flow; wider screens fan the others out behind it. It and the card
  // share their bases with the route's map and card (MAP_BASIS and
  // CARD_BASIS in Route.styles.ts), so the two sections line up.
  desk: {
    position: 'relative',
    flexGrow: 999,
    flexShrink: 1,
    flexBasis: 620,
    minWidth: 0,
    // Grows with the details card when the description runs long.
    minHeight: {
      default: null,
      [bp.wide]: 560,
    },
    padding: {
      default: 16,
      [bp.wide]: 0,
    },
    overflow: 'hidden',
    borderRadius: 28,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    backgroundColor: themeColors.map,
    backgroundImage: `radial-gradient(${themeColors.contour} 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
  },
  hint: {
    display: {
      default: 'none',
      [bp.wide]: 'block',
    },
    position: 'absolute',
    left: 20,
    bottom: 16,
    fontFamily: fonts.mono,
    fontSize: 11,
    color: themeColors.muted,
  },
  card: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 360,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    borderRadius: 28,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    backgroundColor: themeColors.panel,
    padding: {
      default: 24,
      [bp.wide]: 32,
    },
  },
  details: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    animationName: {
      default: appear,
      [bp.reducedMotion]: 'none',
    },
    animationDuration: '0.5s',
    animationTimingFunction: easing.spring,
  },
  meta: {
    fontFamily: fonts.mono,
    fontSize: 12,
    color: themeColors.muted,
  },
  title: {
    fontSize: 36,
    lineHeight: 1.05,
    fontWeight: 700,
    letterSpacing: '-0.03em',
  },
  description: {
    fontSize: 16,
    color: themeColors.muted,
  },
  links: {
    marginTop: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
  },
  link: {
    minHeight: 46,
    paddingInline: 20,
  },
});

// Motion's reducedMotion doesn't reach CSS transitions, so this one
// switches itself off.
const FAN = {
  transitionProperty: 'left, top, transform, filter, box-shadow',
  transitionDuration: {
    default: '0.45s',
    [bp.reducedMotion]: '0s',
  },
  transitionTimingFunction: easing.spring,
} as const;

export const projectWindow = stylex.create({
  root: {
    position: {
      default: 'relative',
      [bp.wide]: 'absolute',
    },
    width: {
      default: '100%',
      [bp.wide]: '72%',
    },
    height: {
      default: null,
      [bp.wide]: '66%',
    },
    display: 'flex',
    flexDirection: 'column',
    // Undo the button's centered pill layout.
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    gap: 0,
    minHeight: 0,
    whiteSpace: 'normal',
    overflow: 'hidden',
    padding: 0,
    borderRadius: 14,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    backgroundColor: colors.screen,
    textAlign: 'left',
    ...FAN,
  },
  front: {
    zIndex: 3,
    left: {
      default: null,
      [bp.wide]: '12%',
    },
    top: {
      default: null,
      [bp.wide]: '15%',
    },
    transform: {
      default: null,
      [bp.wide]: 'rotate(1deg)',
    },
    borderColor: themeColors.accent,
    boxShadow: shadows.window,
  },
  // The two windows fanned out behind the front one, desktop only.
  behind: {
    display: {
      default: 'none',
      [bp.wide]: 'flex',
    },
    cursor: 'pointer',
    boxShadow: shadows.lift,
    filter: 'saturate(0.6) brightness(0.92)',
  },
  behindLeft: {
    zIndex: 2,
    left: '3%',
    top: '5%',
    transform: 'rotate(-5deg)',
  },
  behindRight: {
    zIndex: 1,
    left: '22%',
    top: '24%',
    transform: 'rotate(5deg)',
  },
  // Stands in for the next project while there's only one.
  ghost: {
    display: {
      default: 'none',
      [bp.wide]: 'flex',
    },
    position: 'absolute',
    left: '3%',
    top: '5%',
    width: '72%',
    height: '66%',
    padding: 16,
    borderRadius: 14,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: themeColors.routeSoft,
    transform: 'rotate(-5deg)',
    fontFamily: fonts.mono,
    fontSize: 11,
    color: themeColors.muted,
  },
  bar: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    paddingBlock: 10,
    paddingInline: 14,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: themeColors.lineSoft,
    backgroundColor: themeColors.panel,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: '50%',
    backgroundColor: themeColors.line,
  },
  address: {
    marginLeft: 10,
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingBlock: 3,
    paddingInline: 10,
    borderRadius: 999,
    backgroundColor: themeColors.bg,
    fontFamily: fonts.mono,
    fontSize: 11,
    color: themeColors.muted,
  },
  screen: {
    flexGrow: 1,
    minHeight: 0,
    width: '100%',
    height: {
      default: 'auto',
      [bp.wide]: '100%',
    },
    aspectRatio: {
      default: '16 / 10',
      [bp.wide]: 'auto',
    },
    objectFit: 'cover',
    objectPosition: 'top',
  },
});
