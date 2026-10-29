import type { RefObject } from 'react';

import * as stylex from '@stylexjs/stylex';

import type { PointerState } from '../../hooks/usePointerTracking';

import { heroPointer } from './Hero.styles';

interface HeroPointerProps {
  pointer: PointerState;
  compassRef: RefObject<HTMLDivElement | null>;
}

const POINTS = [
  { label: 'N', x: 44, y: 12 },
  { label: 'S', x: 44, y: 83 },
  { label: 'E', x: 80, y: 47 },
  { label: 'W', x: 8, y: 47 },
];

/** Glow, crosshairs and compass that follow the pointer across the hero. */
export function HeroPointer({ pointer, compassRef }: HeroPointerProps) {
  const { active, x, y, heading } = pointer;
  const tracking = [heroPointer.tracking, active && heroPointer.visible];

  return (
    <>
      <div
        aria-hidden="true"
        {...stylex.props(
          heroPointer.glow,
          tracking,
          heroPointer.at(`translate(${x}px, ${y}px)`),
        )}
      />
      <div
        aria-hidden="true"
        {...stylex.props(
          heroPointer.hair,
          heroPointer.hairVertical,
          tracking,
          heroPointer.at(`translateX(${x}px)`),
        )}
      />
      <div
        aria-hidden="true"
        {...stylex.props(
          heroPointer.hair,
          heroPointer.hairHorizontal,
          tracking,
          heroPointer.at(`translateY(${y}px)`),
        )}
      />
      <div
        ref={compassRef}
        aria-hidden="true"
        {...stylex.props(heroPointer.compass)}
      >
        <svg
          width="88"
          height="88"
          viewBox="0 0 88 88"
          {...stylex.props(heroPointer.dial)}
        >
          <circle cx="44" cy="44" r="42" {...stylex.props(heroPointer.ring)} />
          <circle
            cx="44"
            cy="44"
            r="32"
            {...stylex.props(heroPointer.ringInner)}
          />
          {POINTS.map((point) => (
            <text
              key={point.label}
              x={point.x}
              y={point.y}
              textAnchor="middle"
              {...stylex.props(heroPointer.point)}
            >
              {point.label}
            </text>
          ))}
        </svg>
        <div
          {...stylex.props(
            heroPointer.needle,
            heroPointer.at(`rotate(${heading}deg)`),
          )}
        >
          <svg width="88" height="88" viewBox="0 0 88 88">
            <path
              d="M44 18 L49 44 L44 40 L39 44 Z"
              {...stylex.props(heroPointer.needleNorth)}
            />
            <path
              d="M44 70 L49 44 L44 48 L39 44 Z"
              {...stylex.props(heroPointer.needleSouth)}
            />
            <circle
              cx="44"
              cy="44"
              r="3"
              {...stylex.props(heroPointer.needleHub)}
            />
          </svg>
        </div>
      </div>
    </>
  );
}
