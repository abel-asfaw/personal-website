import * as stylex from '@stylexjs/stylex';

import {
  bp,
  colors,
  easing,
  fonts,
  shadows,
  themeColors,
} from '../../styles/tokens.stylex';

const pulse = stylex.keyframes({
  '0%, 100%': { opacity: 0.55 },
  '50%': { opacity: 1 },
});

export const hero = stylex.create({
  root: {
    maxWidth: 1240,
    marginInline: 'auto',
    paddingTop: 24,
    paddingInline: 24,
  },
  panel: {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    // The compass follows the copy in reading order, but sits on top on
    // phones.
    flexDirection: {
      default: 'column-reverse',
      [bp.split]: 'row',
    },
    alignItems: {
      default: 'stretch',
      [bp.split]: 'center',
    },
    gap: {
      default: 28,
      [bp.split]: 56,
    },
    borderRadius: 28,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    backgroundColor: themeColors.panel,
    paddingBlock: 'clamp(40px, 7vw, 96px)',
    paddingInline: 'clamp(24px, 5vw, 64px)',
    // Sideways drags steer the map (see usePointerTracking).
    touchAction: 'pan-y pinch-zoom',
  },
  contours: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    fill: 'none',
    stroke: themeColors.contour,
    strokeWidth: 1.2,
  },
  contoursSplit: {
    display: {
      default: 'none',
      [bp.split]: 'block',
    },
  },
  contoursStacked: {
    display: {
      default: 'block',
      [bp.split]: 'none',
    },
  },
  // Content sits above the pointer layers.
  layer: {
    position: 'relative',
  },
  copy: {
    flexGrow: 1,
    flexBasis: 0,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: {
      default: 20,
      [bp.wide]: 28,
    },
  },
  chip: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    paddingBlock: 6,
    paddingInline: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    backgroundColor: themeColors.bg,
    fontFamily: fonts.mono,
    fontSize: 12,
    color: themeColors.muted,
    fontVariantNumeric: 'tabular-nums',
  },
  coords: {
    alignSelf: 'flex-start',
  },
  online: {
    width: 7,
    height: 7,
    flexShrink: 0,
    borderRadius: '50%',
    backgroundColor: colors.online,
  },
  heading: {
    maxWidth: 1000,
    fontSize: {
      default: 'clamp(44px, 8vw, 96px)',
      [bp.split]: 'clamp(56px, 6vw, 88px)',
    },
    lineHeight: 0.92,
    fontWeight: 700,
    letterSpacing: '-0.045em',
  },
  tagline: {
    display: 'block',
    color: themeColors.accentText,
  },
  footer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 24,
  },
  bio: {
    maxWidth: 500,
    fontSize: {
      default: 16,
      [bp.wide]: 20,
    },
    color: themeColors.muted,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
  },
  cta: {
    minHeight: 50,
  },
  // Loading placeholder in the shape of the heading.
  // One heading line, less its share of the group's two gaps.
  skeletonLine: {
    height: {
      default: 'calc(clamp(44px, 8vw, 96px) * 0.92 - 20px / 3)',
      [bp.split]: 'calc(clamp(56px, 6vw, 88px) * 0.92 - 20px / 3)',
    },
    borderRadius: 16,
  },
  skeletonDial: {
    borderRadius: '50%',
  },
  // A chip: the coords above the copy, or the heading under the dial.
  skeletonChip: {
    width: 130,
    height: 32,
    borderRadius: 999,
  },
  skeletonCoords: {
    width: 260,
  },
  skeletonText: {
    height: 18,
    borderRadius: 9,
  },
  skeletonButton: {
    width: 150,
    height: 50,
    borderRadius: 999,
  },
  skeleton: {
    backgroundColor: themeColors.lineSoft,
    animationName: {
      default: pulse,
      [bp.reducedMotion]: 'none',
    },
    animationDuration: '1.6s',
    animationIterationCount: 'infinite',
    animationTimingFunction: easing.inOut,
  },
  // Lines of one block of text, packed like the text itself.
  skeletonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  skeletonBio: {
    flexGrow: 1,
    maxWidth: 500,
  },
  skeletonShort: {
    width: '55%',
  },
  skeletonLong: {
    width: '85%',
  },
  skeletonShorter: {
    width: '35%',
  },
  // The bio's third line, where the stacked copy wraps it.
  skeletonStacked: {
    display: {
      default: 'block',
      [bp.split]: 'none',
    },
  },
});

export const heroPointer = stylex.create({
  glow: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 460,
    height: 460,
    marginTop: -230,
    marginLeft: -230,
    borderRadius: '50%',
    backgroundImage: `radial-gradient(circle, ${themeColors.glow}, transparent 65%)`,
    pointerEvents: 'none',
  },
  hair: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: themeColors.xhair,
    pointerEvents: 'none',
  },
  hairVertical: {
    bottom: 0,
    width: 1,
  },
  hairHorizontal: {
    right: 0,
    height: 1,
  },
  // Shared by the glow and both hairs.
  tracking: {
    opacity: 0,
    transitionProperty: 'transform, opacity',
    transitionDuration: {
      default: '0.18s, 0.4s',
      [bp.reducedMotion]: '0s',
    },
    transitionTimingFunction: 'ease-out',
  },
  // No trailing glide under a finger: it's restarted every frame, which
  // Safari draws as doubled, jittery lines, and the finger is already there.
  touching: {
    transitionProperty: 'opacity',
    transitionDuration: {
      default: '0.4s',
      [bp.reducedMotion]: '0s',
    },
  },
  visible: {
    opacity: 1,
  },
  at: (transform: string) => ({ transform }),
});

export const heroCompass = stylex.create({
  root: {
    position: 'relative',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: {
      default: 14,
      [bp.split]: 22,
    },
  },
  dial: {
    position: 'relative',
    width: {
      default: 200,
      [bp.split]: 'clamp(280px, 28vw, 360px)',
    },
    aspectRatio: 1,
  },
  face: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    overflow: 'visible',
    fill: 'none',
  },
  ring: {
    stroke: themeColors.line,
    strokeWidth: 1.5,
  },
  ringInner: {
    stroke: themeColors.contour,
    strokeWidth: 1,
    strokeDasharray: '4 4',
  },
  tick: {
    stroke: themeColors.contour,
    strokeWidth: 2,
  },
  // In dial units, so the phone's smaller dial still reads at about 10px.
  point: {
    fontFamily: fonts.mono,
    fontSize: {
      default: 18,
      [bp.split]: 13,
    },
    fill: themeColors.muted,
  },
  // The tap target; its frame draws the portrait.
  portrait: {
    position: 'absolute',
    inset: '15%',
    borderRadius: '50%',
    perspective: 900,
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    transform: {
      default: null,
      ':active': 'scale(0.96)',
    },
    transitionProperty: 'transform',
    transitionDuration: {
      default: '0.2s',
      [bp.reducedMotion]: '0s',
    },
    transitionTimingFunction: easing.out,
  },
  frame: {
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    paddingBlock: {
      default: 6,
      [bp.split]: 8,
    },
    paddingInline: {
      default: 6,
      [bp.split]: 8,
    },
    borderRadius: '50%',
    backgroundColor: themeColors.lineSoft,
    boxShadow: shadows.portrait,
    transitionProperty: 'transform',
    transitionDuration: {
      default: '0.3s',
      [bp.reducedMotion]: '0s',
    },
    transitionTimingFunction: easing.out,
  },
  // No trailing glide under a finger, as with the crosshairs: on the portrait
  // and the needle alike.
  touching: {
    transitionDuration: '0s',
  },
  photo: {
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  needle: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    transitionProperty: 'transform',
    transitionDuration: {
      default: '0.3s',
      [bp.reducedMotion]: '0s',
    },
    transitionTimingFunction: easing.spring,
  },
  needleTip: {
    fill: themeColors.accent,
  },
  readout: {
    display: 'inline-flex',
    gap: 8,
  },
  // The live region stays in place while empty, but out of the chip's flow.
  readoutIdle: {
    position: 'absolute',
  },
  readoutLabel: {
    color: themeColors.accentText,
  },
  // Room for two letters, so the chip holds still between N and NE.
  cardinal: {
    display: 'inline-block',
    width: '2ch',
  },
  at: (transform: string) => ({ transform }),
});
