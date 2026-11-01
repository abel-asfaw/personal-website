import * as stylex from '@stylexjs/stylex';

import { bp, easing, fonts, themeColors } from '../../styles/tokens.stylex';

// Each track holds its list twice over, so sliding by half loops seamlessly
// (the 6px is half the gap between the two halves).
const scroll = stylex.keyframes({
  to: { transform: 'translateX(calc(-50% - 6px))' },
});

const appear = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(12px)' },
  to: { opacity: 1, transform: 'none' },
});

const column = {
  maxWidth: 1240,
  width: '100%',
  marginInline: 'auto',
  paddingInline: 24,
} as const;

export const toolbox = stylex.create({
  root: {
    scrollMarginTop: 96,
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
  },
  header: {
    ...column,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 12,
  },
  detail: {
    ...column,
  },
});

export const skillMarquee = stylex.create({
  root: {
    overflow: 'hidden',
    paddingBlock: 10,
    maskImage:
      'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
  },
  track: {
    display: 'flex',
    gap: 12,
    width: {
      default: 'max-content',
      [bp.reducedMotion]: 'auto',
    },
    flexWrap: {
      default: null,
      [bp.reducedMotion]: 'wrap',
    },
    paddingInline: {
      default: null,
      [bp.reducedMotion]: 24,
    },
    // Keyboard focus parks the row at its start, so the focused (first,
    // focusable) copy is on screen instead of sliding away.
    animationName: {
      default: scroll,
      [bp.reducedMotion]: 'none',
      [stylex.when.descendant(':focus-visible')]: 'none',
    },
    animationDuration: '48s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationPlayState: {
      default: null,
      [bp.fineHover]: {
        default: null,
        [stylex.when.ancestor(':hover')]: 'paused',
      },
    },
  },
  reverse: {
    animationDirection: 'reverse',
    animationDuration: '56s',
  },
  paused: {
    animationPlayState: 'paused',
  },
  // A paused row hands its position over to native sideways scrolling.
  scrollable: {
    overflowX: 'auto',
    overscrollBehaviorX: 'contain',
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  still: {
    animationName: 'none',
  },
  skill: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    paddingBlock: {
      default: 14,
      [bp.wide]: 18,
    },
    paddingInline: {
      default: 18,
      [bp.wide]: 26,
    },
    borderRadius: 18,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    backgroundColor: themeColors.panel,
    color: themeColors.ink,
    fontSize: {
      default: 18,
      [bp.wide]: 28,
    },
    fontWeight: 700,
    letterSpacing: '-0.02em',
    whiteSpace: 'nowrap',
    transform: {
      default: null,
      ':active': 'scale(0.96)',
      [bp.fineHover]: {
        default: null,
        ':hover': 'scale(1.08) rotate(-1.5deg)',
        ':active': 'scale(0.96)',
      },
    },
    boxShadow: null,
    transitionProperty: 'transform, background-color, color, border-color',
    transitionDuration: {
      default: '0.25s',
      [bp.reducedMotion]: '0s',
    },
    transitionTimingFunction: easing.spring,
  },
  // The second row's outlined accent look.
  skillAccent: {
    borderColor: themeColors.accent,
    backgroundColor: themeColors.bg,
    color: themeColors.accentText,
  },
  skillPicked: {
    borderColor: themeColors.accent,
    backgroundColor: themeColors.accent,
    color: themeColors.onAccent,
    transform: 'scale(1.08) rotate(-1.5deg)',
  },
  // Copies that only fill out the loop.
  duplicate: {
    display: {
      default: null,
      [bp.reducedMotion]: 'none',
    },
  },
  count: {
    paddingBlock: 2,
    paddingInline: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: themeColors.line,
    fontFamily: fonts.mono,
    fontSize: 12,
    fontWeight: 500,
  },
  countAccent: {
    borderColor: themeColors.accent,
  },
  countPicked: {
    borderColor: themeColors.onAccent,
  },
});

export const skillDetail = stylex.create({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    rowGap: 24,
    columnGap: 48,
    borderRadius: 28,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: themeColors.accent,
    backgroundColor: themeColors.panel,
    padding: 'clamp(24px, 3vw, 36px)',
    boxShadow: `0 24px 60px -36px ${themeColors.accent}`,
    animationName: {
      default: appear,
      [bp.reducedMotion]: 'none',
    },
    animationDuration: '0.5s',
    animationTimingFunction: easing.spring,
  },
  summary: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 280,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  eyebrow: {
    fontFamily: fonts.mono,
    fontSize: 14,
    color: themeColors.accentText,
  },
  name: {
    // Matches the project title on phones, below the hero and section
    // headings.
    fontSize: {
      default: 32,
      [bp.wide]: 'clamp(40px, 5.5vw, 72px)',
    },
    lineHeight: 0.95,
    fontWeight: 700,
    letterSpacing: '-0.045em',
    overflowWrap: 'anywhere',
  },
  where: {
    flexGrow: 2,
    flexShrink: 1,
    flexBasis: 420,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  whereLabel: {
    fontFamily: fonts.mono,
    fontSize: 14,
    color: themeColors.muted,
  },
  places: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
  },
  // Buttons don't wrap by default; a long project name on a phone would
  // push the pill past the card's edge.
  place: {
    maxWidth: '100%',
    paddingBlock: {
      default: 6,
      [bp.wide]: 8,
    },
    paddingInlineStart: 8,
    paddingInlineEnd: {
      default: 16,
      [bp.wide]: 18,
    },
    gap: 12,
    fontSize: {
      default: 16,
      [bp.wide]: 18,
    },
    whiteSpace: 'normal',
    textAlign: 'start',
  },
  placeText: {
    minWidth: 0,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    rowGap: 2,
    columnGap: 12,
  },
  placeBadge: {
    flexShrink: 0,
    width: {
      default: 32,
      [bp.wide]: 36,
    },
    height: {
      default: 32,
      [bp.wide]: 36,
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: themeColors.accent,
    color: themeColors.onAccent,
    fontFamily: fonts.mono,
    fontSize: 12,
    fontWeight: 500,
  },
  placeCta: {
    whiteSpace: 'nowrap',
    fontFamily: fonts.mono,
    fontSize: 12,
    fontWeight: 500,
    color: themeColors.accentText,
  },
  everywhere: {
    fontSize: {
      default: 16,
      [bp.wide]: 18,
    },
    fontWeight: 500,
  },
  clear: {
    flexShrink: 0,
    fontSize: {
      default: 16,
      [bp.wide]: 18,
    },
    backgroundColor: themeColors.bg,
  },
  empty: {
    minHeight: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBlock: 28,
    paddingInline: 32,
    borderRadius: 28,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: themeColors.line,
    textAlign: 'center',
    fontFamily: fonts.mono,
    fontSize: 14,
    color: themeColors.muted,
  },
});
