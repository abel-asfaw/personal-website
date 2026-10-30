import * as stylex from '@stylexjs/stylex';
import { memo } from 'react';

import { heroCompass } from './Hero.styles';

// The dial is drawn in a 360-unit square and scaled to its box.
const POINTS = [
  { label: 'N', x: 180, y: 24 },
  { label: 'S', x: 180, y: 344 },
  { label: 'E', x: 342, y: 184 },
  { label: 'W', x: 18, y: 184 },
];

// Every 15°, leaving gaps at the four letters; longer every 45°.
const TICKS = Array.from({ length: 24 }, (_, i) => i).flatMap((i) =>
  i % 6 === 0 ? [] : [{ angle: i * 15, length: i % 3 === 0 ? 12 : 6 }],
);

/** The compass's rings, ticks and letters. Memoized: it never changes. */
export const HeroCompassFace = memo(function HeroCompassFace() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 360 360"
      {...stylex.props(heroCompass.face)}
    >
      <circle
        cx="180"
        cy="180"
        r="179"
        vectorEffect="non-scaling-stroke"
        {...stylex.props(heroCompass.ring)}
      />
      <circle
        cx="180"
        cy="180"
        r="150"
        vectorEffect="non-scaling-stroke"
        {...stylex.props(heroCompass.ringInner)}
      />
      {TICKS.map((tick) => (
        <line
          key={tick.angle}
          x1="180"
          y1="0"
          x2="180"
          y2={tick.length}
          transform={`rotate(${tick.angle} 180 180)`}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(heroCompass.tick)}
        />
      ))}
      {POINTS.map((point) => (
        <text
          key={point.label}
          x={point.x}
          y={point.y}
          textAnchor="middle"
          {...stylex.props(heroCompass.point)}
        >
          {point.label}
        </text>
      ))}
    </svg>
  );
});
