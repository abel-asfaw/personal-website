import * as stylex from '@stylexjs/stylex';
import { memo } from 'react';

import { hero } from './Hero.styles';

// For the side-by-side layout, in a 1216×696 box.
const SPLIT_LINES = [
  'M0 96 C 260 40, 470 170, 760 92 S 1080 30, 1216 120',
  'M0 214 C 230 160, 520 270, 800 196 S 1100 150, 1216 236',
  'M0 330 C 300 268, 540 380, 830 300 S 1110 262, 1216 350',
  'M0 448 C 250 400, 560 500, 840 420 S 1120 380, 1216 470',
  'M0 566 C 320 510, 600 620, 880 540 S 1130 500, 1216 590',
  'M0 662 C 280 630, 620 700, 900 650 S 1140 620, 1216 680',
];

// For the stacked layout, in a 358×740 box.
const STACKED_LINES = [
  'M0 60 C 90 30, 180 110, 260 70 S 340 40, 358 64',
  'M0 190 C 80 150, 200 230, 280 180 S 340 160, 358 186',
  'M0 320 C 100 280, 210 360, 290 300 S 345 290, 358 316',
  'M0 450 C 90 410, 220 490, 300 430 S 350 420, 358 446',
  'M0 580 C 110 540, 230 620, 310 560 S 350 550, 358 574',
  'M0 700 C 100 670, 240 740, 358 700',
];

/**
 * The topographic lines behind the hero, stretched to fill the panel; the
 * strokes keep their weight. Memoized: it never changes.
 */
export const HeroContours = memo(function HeroContours() {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 1216 696"
        preserveAspectRatio="none"
        {...stylex.props(hero.contours, hero.contoursSplit)}
      >
        {SPLIT_LINES.map((d) => (
          <path key={d} d={d} vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 358 740"
        preserveAspectRatio="none"
        {...stylex.props(hero.contours, hero.contoursStacked)}
      >
        {STACKED_LINES.map((d) => (
          <path key={d} d={d} vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
    </>
  );
});
