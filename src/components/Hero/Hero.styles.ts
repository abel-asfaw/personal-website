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
    // The compass comes first: on top on phones, on the right when split.
    flexDirection: {
      default: 'column',
      [bp.split]: 'row-reverse',
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
  skeletonLine: {
    height: 'clamp(44px, 6vw, 88px)',
    borderRadius: 16,
  },
  skeletonDial: {
    alignSelf: 'center',
    flexShrink: 0,
    width: {
      default: 200,
      [bp.split]: 'clamp(280px, 28vw, 360px)',
    },
    aspectRatio: 1,
    borderRadius: '50%',
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
    perspective: 900,
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
  portrait: {
    position: 'absolute',
    inset: '15%',
    padding: {
      default: 6,
      [bp.split]: 8,
    },
    borderWidth: 0,
    borderRadius: '50%',
    backgroundColor: themeColors.lineSoft,
    boxShadow: '0 24px 48px -24px rgba(18, 32, 26, 0.45)',
    transitionProperty: 'transform',
    transitionDuration: {
      default: '0.3s',
      [bp.reducedMotion]: '0s',
    },
    transitionTimingFunction: 'ease-out',
  },
  // A tap target on touch screens, where there's no hover to reveal it.
  portraitButton: {
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
  },
  // No trailing glide under a finger, as with the crosshairs.
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
  readoutLabel: {
    color: themeColors.accentText,
  },
  at: (transform: string) => ({ transform }),
});
