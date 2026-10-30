import type { RefObject } from 'react';

import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';

import type { About } from '../../content/about';
import type { PointerState } from '../../hooks/usePointerTracking';

import { hero, heroCompass } from './Hero.styles';

interface HeroCompassProps {
  pointer: PointerState;
  compassRef: RefObject<HTMLDivElement | null>;
  photo: About['photo'];
  isTouch: boolean;
}

// Degrees the portrait leans toward the pointer at the panel's edge.
const MAX_TILT = 12;

const CARDINALS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

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

/**
 * The portrait in a compass whose needle points at the pointer. Hovering the
 * portrait (or tapping it, on touch screens) swaps the heading for a pin.
 */
export function HeroCompass({
  pointer,
  compassRef,
  photo,
  isTouch,
}: HeroCompassProps) {
  const [isHere, setIsHere] = useState(false);
  const { heading, tiltX, tiltY, isFingerDrag } = pointer;

  const bearing = ((Math.round(heading) % 360) + 360) % 360;
  const tilt = `rotateX(${(-tiltY * MAX_TILT).toFixed(2)}deg) rotateY(${(tiltX * MAX_TILT).toFixed(2)}deg) scale(${isHere ? 1.04 : 1})`;
  const portraitStyle = [
    heroCompass.portrait,
    isFingerDrag && heroCompass.touching,
    heroCompass.at(tilt),
  ];
  const image = photo ? (
    <img
      src={photo.url}
      alt={isTouch ? '' : photo.alt}
      width={300}
      height={300}
      {...stylex.props(heroCompass.photo)}
    />
  ) : null;

  return (
    <div {...stylex.props(hero.layer, heroCompass.root)}>
      <div ref={compassRef} {...stylex.props(heroCompass.dial)}>
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
        {photo && isTouch ? (
          <button
            type="button"
            aria-label={photo.alt}
            aria-pressed={isHere}
            onClick={() => setIsHere((here) => !here)}
            {...stylex.props(portraitStyle, heroCompass.portraitButton)}
          >
            {image}
          </button>
        ) : photo ? (
          <div
            onPointerEnter={() => setIsHere(true)}
            onPointerLeave={() => setIsHere(false)}
            {...stylex.props(portraitStyle)}
          >
            {image}
          </div>
        ) : null}
        <div
          aria-hidden="true"
          {...stylex.props(
            heroCompass.needle,
            heroCompass.at(`rotate(${heading}deg)`),
          )}
        >
          <svg viewBox="0 0 360 360" {...stylex.props(heroCompass.face)}>
            <path
              d="M180 -12 L189 12 L180 7 L171 12 Z"
              {...stylex.props(heroCompass.needleTip)}
            />
          </svg>
        </div>
      </div>
      <span aria-hidden="true" {...stylex.props(hero.chip)}>
        <span {...stylex.props(heroCompass.readoutLabel)}>
          {isHere ? 'You are here' : 'Heading'}
        </span>
        {isHere
          ? '· say hi below'
          : `${String(bearing).padStart(3, '0')}° ${CARDINALS[Math.round(bearing / 45) % 8]}`}
      </span>
    </div>
  );
}
