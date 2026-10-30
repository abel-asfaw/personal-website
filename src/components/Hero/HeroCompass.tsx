import type { RefObject } from 'react';

import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';

import type { About } from '../../content/about';
import type { PointerState } from '../../hooks/usePointerTracking';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { hero, heroCompass } from './Hero.styles';
import { HeroCompassFace } from './HeroCompassFace';

interface HeroCompassProps {
  pointer: PointerState;
  compassRef: RefObject<HTMLDivElement | null>;
  photo: About['photo'];
}

// Degrees the portrait leans toward the pointer at the panel's edge.
const MAX_TILT = 12;

const CARDINALS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

/**
 * The portrait in a compass whose needle points at the pointer. Hovering the
 * portrait swaps the heading for a pin; pressing it (the only way on touch
 * screens and keyboards) keeps the pin until it's pressed again.
 */
export function HeroCompass({ pointer, compassRef, photo }: HeroCompassProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  // The needle still turns, but the portrait doesn't lean after the pointer.
  const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const { heading, tiltX, tiltY, isFingerDrag } = pointer;

  const isHere = isHovered || isPinned;
  const bearing = ((Math.round(heading) % 360) + 360) % 360;
  const lean = isReducedMotion ? 0 : MAX_TILT;
  const tilt = `rotateX(${(-tiltY * lean).toFixed(2)}deg) rotateY(${(tiltX * lean).toFixed(2)}deg) scale(${isHere ? 1.04 : 1})`;

  return (
    <div {...stylex.props(hero.layer, heroCompass.root)}>
      <div ref={compassRef} {...stylex.props(heroCompass.dial)}>
        <HeroCompassFace />
        {photo ? (
          <button
            type="button"
            aria-label={photo.alt}
            aria-pressed={isPinned}
            onClick={() => setIsPinned((pinned) => !pinned)}
            // Mouse only: a tap's enter and leave would just flash it.
            onPointerEnter={(event) =>
              setIsHovered(event.pointerType === 'mouse')
            }
            onPointerLeave={() => setIsHovered(false)}
            {...stylex.props(
              heroCompass.portrait,
              isFingerDrag && heroCompass.touching,
              heroCompass.at(tilt),
            )}
          >
            <img
              src={photo.url}
              alt=""
              width={300}
              height={300}
              {...stylex.props(heroCompass.photo)}
            />
          </button>
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
      <span {...stylex.props(hero.chip)}>
        {/* Announces the pin; the heading changes every frame, so it's
            left out. */}
        <span
          aria-live="polite"
          {...stylex.props(
            heroCompass.readout,
            !isHere && heroCompass.readoutIdle,
          )}
        >
          {isHere ? (
            <>
              <span {...stylex.props(heroCompass.readoutLabel)}>
                You are here
              </span>
              · say hi below
            </>
          ) : null}
        </span>
        {isHere ? null : (
          <span aria-hidden="true" {...stylex.props(heroCompass.readout)}>
            <span {...stylex.props(heroCompass.readoutLabel)}>Heading</span>
            {String(bearing).padStart(3, '0')}°{' '}
            {CARDINALS[Math.round(bearing / 45) % 8]}
          </span>
        )}
      </span>
    </div>
  );
}
