import * as stylex from '@stylexjs/stylex';
import { memo } from 'react';

import { hero } from './Hero.styles';

/** The topographic lines behind the hero. Memoized: it never changes. */
export const HeroContours = memo(function HeroContours() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      {...stylex.props(hero.contours)}
    >
      <path d="M-20 120 C 180 60, 320 180, 520 110 S 860 40, 1220 130" />
      <path d="M-20 200 C 160 140, 340 270, 540 190 S 880 120, 1220 220" />
      <path d="M-20 300 C 200 240, 360 380, 560 290 S 900 220, 1220 320" />
      <path d="M-20 400 C 180 350, 380 480, 580 390 S 920 330, 1220 420" />
      <path d="M-20 500 C 220 450, 400 580, 600 490 S 940 440, 1220 520" />
      <ellipse cx="960" cy="420" rx="150" ry="90" />
      <ellipse cx="960" cy="420" rx="95" ry="56" />
      <ellipse cx="960" cy="420" rx="42" ry="24" />
    </svg>
  );
});
