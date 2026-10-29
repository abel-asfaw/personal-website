import * as stylex from '@stylexjs/stylex';

import {
  bp,
  colors,
  easing,
  fonts,
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
    flexDirection: 'column',
    gap: 28,
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
  // Content sits above the pointer layers.
  layer: {
    position: 'relative',
  },
  coords: {
    alignSelf: 'flex-start',
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
  online: {
    width: 7,
    height: 7,
    flexShrink: 0,
    borderRadius: '50%',
    backgroundColor: colors.online,
  },
  heading: {
    maxWidth: 1000,
    fontSize: 'clamp(48px, 8vw, 120px)',
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
    fontSize: 20,
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
  skeletonLine: {
    height: 'clamp(44px, 7vw, 110px)',
    borderRadius: 16,
    backgroundColor: themeColors.lineSoft,
    animationName: {
      default: pulse,
      [bp.reducedMotion]: 'none',
    },
    animationDuration: '1.6s',
    animationIterationCount: 'infinite',
    animationTimingFunction: easing.inOut,
  },
  skeletonShort: {
    width: '55%',
  },
  skeletonLong: {
    width: '85%',
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
  compass: {
    display: {
      default: 'none',
      [bp.wide]: 'block',
    },
    position: 'absolute',
    right: 'clamp(24px, 4vw, 56px)',
    top: 'clamp(24px, 4vw, 48px)',
    width: 88,
    height: 88,
  },
  dial: {
    fill: 'none',
  },
  ring: {
    stroke: themeColors.line,
    strokeWidth: 1.5,
  },
  ringInner: {
    stroke: themeColors.lineSoft,
    strokeWidth: 1,
  },
  point: {
    fontFamily: fonts.mono,
    fontSize: 9,
    fill: themeColors.muted,
  },
  needle: {
    position: 'absolute',
    inset: 0,
    transitionProperty: 'transform',
    transitionDuration: {
      default: '0.3s',
      [bp.reducedMotion]: '0s',
    },
    transitionTimingFunction: easing.spring,
  },
  needleNorth: {
    fill: themeColors.accent,
  },
  needleSouth: {
    fill: themeColors.routeSoft,
  },
  needleHub: {
    fill: themeColors.ink,
  },
});
