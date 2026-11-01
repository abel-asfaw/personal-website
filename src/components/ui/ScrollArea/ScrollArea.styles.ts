import * as stylex from '@stylexjs/stylex';

import { bp, colors, themeColors } from '../../../styles/tokens.stylex';

export const scrollArea = stylex.create({
  // Takes the height left in its flex column, and holds the scroller and the
  // edges drawn over it. On phones it starts from nothing, so a long
  // description scrolls in the card's set height rather than growing it;
  // wider, it starts from its content. It never shrinks past a few lines.
  root: {
    position: 'relative',
    flexGrow: 1,
    flexBasis: {
      default: 0,
      [bp.wide]: 'auto',
    },
    minHeight: 96,
    display: 'flex',
    flexDirection: 'column',
  },
  // Scrolls on its own, so what's pinned around it stays in view. Past either
  // end, the wheel carries on scrolling the page.
  scroller: {
    flexGrow: 1,
    minHeight: 0,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  // Over an edge with more content past it: the content fades into the panel,
  // under a soft shadow along the cut.
  edge: {
    position: 'absolute',
    insetInline: 0,
    height: 40,
    pointerEvents: 'none',
    opacity: 0,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 12px, 100% 100%',
    transitionProperty: 'opacity',
    transitionDuration: {
      default: '0.2s',
      [bp.reducedMotion]: '0s',
    },
  },
  edgeAbove: {
    top: 0,
    backgroundPosition: 'top',
    backgroundImage: `radial-gradient(farthest-side at 50% 0, ${colors.scrollShadow}, transparent), linear-gradient(${themeColors.panel}, transparent)`,
  },
  edgeBelow: {
    bottom: 0,
    backgroundPosition: 'bottom',
    backgroundImage: `radial-gradient(farthest-side at 50% 100%, ${colors.scrollShadow}, transparent), linear-gradient(transparent, ${themeColors.panel})`,
  },
  edgeShown: {
    opacity: 1,
  },
});
