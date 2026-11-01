import * as stylex from '@stylexjs/stylex';

import {
  bp,
  easing,
  fonts,
  shadows,
  sizes,
  themeColors,
} from '../../styles/tokens.stylex';

// The map and the card sit side by side once the body fits both flex bases
// and the gap between them; below that, the card wraps under the map. The
// same bases as openTabs.desk and openTabs.card, so the map lines up with
// the project windows below it.
const MAP_BASIS = 620;
const CARD_BASIS = 360;
const BODY_GAP = 16;
const MAP_HEIGHT = 480;
const SIDE_BY_SIDE = `@container (min-width: ${MAP_BASIS + BODY_GAP + CARD_BASIS}px)`;

const pulse = stylex.keyframes({
  '0%': { transform: 'scale(0.6)', opacity: 0.6 },
  '100%': { transform: 'scale(2.6)', opacity: 0 },
});

const bob = stylex.keyframes({
  '50%': { transform: 'translateY(-4px)' },
});

const appear = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(12px)' },
  to: { opacity: 1, transform: 'none' },
});

export const routeSection = stylex.create({
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
  body: {
    containerType: 'inline-size',
    display: 'flex',
    flexWrap: 'wrap',
    gap: BODY_GAP,
  },
});

export const routeControls = stylex.create({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
  // Fits "Continue ▶", the longest label, so the pill keeps one width as
  // the label changes.
  play: {
    minWidth: {
      default: 128,
      [bp.wide]: 140,
    },
  },
});

const mono = {
  fontFamily: fonts.mono,
  color: themeColors.muted,
} as const;

export const routeMap = stylex.create({
  root: {
    position: 'relative',
    flexGrow: 999,
    flexShrink: 1,
    flexBasis: MAP_BASIS,
    minWidth: 0,
    height: {
      default: 400,
      [bp.wide]: MAP_HEIGHT,
    },
    overflow: 'hidden',
    borderRadius: 28,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    backgroundColor: themeColors.map,
  },
  // Scrolls the land sideways when the screen is too narrow for the stops;
  // the key and lit badge stay put on the root above it.
  scroller: {
    position: 'absolute',
    inset: 0,
    overflowX: 'auto',
    overflowY: 'hidden',
    overscrollBehaviorX: 'contain',
    scrollbarWidth: 'none',
  },
  // Everything that scrolls: terrain, route, stops and the marker.
  land: {
    position: 'relative',
    height: '100%',
    backgroundImage: `linear-gradient(${themeColors.grid} 1px, transparent 1px), linear-gradient(90deg, ${themeColors.grid} 1px, transparent 1px)`,
    backgroundSize: '12.5% 25%',
  },
  landWidth: (minWidth: number) => ({ minWidth }),
  terrain: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    fill: 'none',
  },
  contours: {
    stroke: themeColors.contour,
    strokeWidth: 1,
  },
  ahead: {
    stroke: themeColors.routeSoft,
    strokeWidth: 3,
    strokeDasharray: '2 9',
    strokeLinecap: 'round',
  },
  travelled: {
    stroke: themeColors.accent,
    strokeWidth: 3.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  // Grid letters and numbers; desktop only.
  ticks: {
    display: {
      default: 'none',
      [bp.wide]: 'flex',
    },
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: 10,
    ...mono,
  },
  ticksColumns: {
    insetInline: 0,
    top: 6,
  },
  ticksRows: {
    insetBlock: 0,
    left: 8,
    flexDirection: 'column',
  },
  tick: {
    flexGrow: 1,
    flexBasis: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  at: (left: string, top: string) => ({ left, top }),
  stop: {
    position: 'absolute',
    zIndex: 2,
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: themeColors.routeSoft,
    backgroundColor: themeColors.panel,
    color: themeColors.ink,
    fontFamily: fonts.mono,
    fontSize: 14,
    fontWeight: 500,
    boxShadow: shadows.stop,
    transform: {
      default: 'translate(-50%, -50%)',
      ':active': 'translate(-50%, -50%) scale(0.92)',
      [bp.fineHover]: {
        default: 'translate(-50%, -50%)',
        ':hover': 'translate(-50%, -50%) scale(1.15)',
        ':active': 'translate(-50%, -50%) scale(0.92)',
      },
    },
    transitionProperty:
      'transform, background-color, border-color, color, box-shadow',
    transitionDuration: {
      default: '0.2s, 0.4s, 0.4s, 0.4s, 0.4s',
      [bp.reducedMotion]: '0s',
    },
  },
  stopReached: {
    borderColor: themeColors.accent,
  },
  stopCurrent: {
    backgroundColor: themeColors.accent,
    color: themeColors.onAccent,
  },
  // A stop where the toolbox's selected skill was used.
  stopLit: {
    boxShadow: `0 0 0 6px ${themeColors.litRing}, 0 0 0 12px ${themeColors.litHalo}`,
  },
  label: {
    display: {
      default: 'none',
      [bp.wide]: 'block',
    },
    position: 'absolute',
    zIndex: 1,
    transform: 'translate(-50%, 30px)',
    paddingBlock: 3,
    paddingInline: 9,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.lineSoft,
    backgroundColor: themeColors.panel,
    fontFamily: fonts.mono,
    fontSize: 12,
    whiteSpace: 'nowrap',
    color: themeColors.muted,
    transitionProperty: 'color',
    transitionDuration: '0.4s',
  },
  labelReached: {
    color: themeColors.ink,
  },
  marker: {
    position: 'absolute',
    zIndex: 3,
    width: 0,
    height: 0,
    pointerEvents: 'none',
  },
  markerPulse: {
    position: 'absolute',
    left: -22,
    top: -22,
    width: 44,
    height: 44,
    borderRadius: '50%',
    backgroundColor: themeColors.accent,
    animationName: {
      default: pulse,
      [bp.reducedMotion]: 'none',
    },
    animationDuration: '1.8s',
    animationTimingFunction: 'ease-out',
    animationIterationCount: 'infinite',
    opacity: {
      default: null,
      [bp.reducedMotion]: 0,
    },
  },
  markerPin: {
    position: 'absolute',
    left: -50,
    top: -78,
    width: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    animationName: {
      default: bob,
      [bp.reducedMotion]: 'none',
    },
    animationDuration: '2.4s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },
  here: {
    paddingBlock: 2,
    paddingInline: 8,
    borderRadius: 999,
    backgroundColor: themeColors.accent,
    color: themeColors.onAccent,
    fontFamily: fonts.mono,
    fontSize: 12,
    whiteSpace: 'nowrap',
  },
  pin: {
    width: 18,
    height: 18,
    borderRadius: '50% 50% 50% 0',
    transform: 'rotate(-45deg)',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: themeColors.pinRing,
    backgroundColor: themeColors.accent,
  },
  key: {
    position: 'absolute',
    left: 16,
    bottom: 14,
    maxWidth: 'calc(100% - 32px)',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    rowGap: 6,
    columnGap: 14,
    paddingBlock: 8,
    paddingInline: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.lineSoft,
    backgroundColor: themeColors.panel,
    fontSize: 12,
    ...mono,
  },
  keyTitle: {
    display: {
      default: 'none',
      [bp.wide]: 'inline',
    },
    color: themeColors.ink,
  },
  keyItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  keyTravelled: {
    width: 18,
    height: 3,
    borderRadius: 2,
    backgroundColor: themeColors.accent,
  },
  keyAhead: {
    width: 18,
    borderTopWidth: 3,
    borderTopStyle: 'dotted',
    borderTopColor: themeColors.routeSoft,
  },
  keyStop: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: themeColors.accent,
  },
  lit: {
    position: 'absolute',
    right: 12,
    top: 26,
    zIndex: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    paddingBlock: 4,
    paddingInlineStart: 14,
    paddingInlineEnd: 4,
    borderRadius: 999,
    backgroundColor: themeColors.accent,
    color: themeColors.onAccent,
    fontFamily: fonts.mono,
    fontSize: 12,
    boxShadow: shadows.float,
    animationName: {
      default: appear,
      [bp.reducedMotion]: 'none',
    },
    animationDuration: '0.6s',
    animationTimingFunction: easing.spring,
  },
  litClear: {
    width: 36,
    height: 36,
    minHeight: 36,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    color: themeColors.onAccent,
  },
});

export const routeStopCard = stylex.create({
  root: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: CARD_BASIS,
    minWidth: 0,
    // On phones it stands at least the phone card height, scrolling a long
    // stop and growing past it only when the rest of the card needs the
    // room; wrapped under the map on wider screens, it fits it. Beside the
    // map, it stretches to the map's height and is capped there, so it
    // scrolls rather than growing the row.
    minHeight: {
      default: sizes.phoneCard,
      [bp.wide]: 'auto',
    },
    maxHeight: {
      default: null,
      [SIDE_BY_SIDE]: MAP_HEIGHT,
    },
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
  body: {
    flexGrow: 1,
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 12,
    fontFamily: fonts.mono,
    fontSize: 12,
    color: themeColors.muted,
  },
  dates: {
    color: themeColors.accentText,
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  company: {
    fontSize: {
      default: 30,
      [bp.wide]: 34,
    },
    lineHeight: 1.05,
    fontWeight: 700,
    letterSpacing: '-0.03em',
  },
  role: {
    fontFamily: fonts.mono,
    fontSize: 14,
  },
  description: {
    fontSize: 16,
    color: themeColors.muted,
  },
  tags: {
    marginTop: 'auto',
  },
  progress: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  bars: {
    display: 'flex',
    gap: 4,
  },
  bar: {
    flexGrow: 1,
    flexBasis: 0,
    height: 4,
    borderRadius: 4,
    backgroundColor: themeColors.line,
    transitionProperty: 'background-color',
    transitionDuration: {
      default: '0.6s',
      [bp.reducedMotion]: '0s',
    },
  },
  barReached: {
    backgroundColor: themeColors.accent,
  },
  status: {
    fontFamily: fonts.mono,
    fontSize: 12,
    color: themeColors.muted,
  },
});
