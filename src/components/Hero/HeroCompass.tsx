import type { RefObject } from 'react';

import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';

import type { About } from '../../content/about';
import type { PointerState } from '../../hooks/usePointerTracking';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Button } from '../ui/Button';
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
  const pin = (
    <>
      <span {...stylex.props(heroCompass.readoutLabel)}>You are here</span>
      <span>· say hi below</span>
    </>
  );
  const tilt = `rotateX(${(-tiltY * lean).toFixed(2)}deg) rotateY(${(tiltX * lean).toFixed(2)}deg) scale(${isHere ? 1.04 : 1})`;

  return (
    <div {...stylex.props(heroCompass.root)}>
      <div ref={compassRef} {...stylex.props(heroCompass.dial)}>
        <HeroCompassFace />
        {photo ? (
          <Button
            variant="text"
            aria-label={
              photo.alt
                ? `Pin “You are here” on ${photo.alt}`
                : 'Pin “You are here”'
            }
            aria-pressed={isPinned}
            onClick={() => {
              setIsPinned((pinned) => !pinned);
              // Unpinning under the mouse would otherwise leave the hover on.
              setIsHovered(false);
            }}
            // Mouse only: a tap's enter and leave would just flash it.
            onPointerEnter={(event) =>
              setIsHovered(event.pointerType === 'mouse')
            }
            onPointerLeave={() => setIsHovered(false)}
            style={heroCompass.portrait}
          >
            {/* Leans inside the button, so a press can still scale it. */}
            <span
              {...stylex.props(
                heroCompass.frame,
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
            </span>
          </Button>
        ) : null}
        <div
          aria-hidden="true"
          {...stylex.props(
            heroCompass.needle,
            isFingerDrag && heroCompass.touching,
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
        {/* Announces only the pin: a hover is the mouse's own feedback, and
            the heading changes every frame. */}
        <span
          aria-live="polite"
          {...stylex.props(
            heroCompass.readout,
            !isPinned && heroCompass.readoutIdle,
          )}
        >
          {isPinned ? pin : null}
        </span>
        {isPinned ? null : (
          <span aria-hidden="true" {...stylex.props(heroCompass.readout)}>
            {isHovered ? (
              pin
            ) : (
              <>
                <span {...stylex.props(heroCompass.readoutLabel)}>Heading</span>
                <span>
                  {String(bearing).padStart(3, '0')}°{' '}
                  <span {...stylex.props(heroCompass.cardinal)}>
                    {CARDINALS[Math.round(bearing / 45) % 8]}
                  </span>
                </span>
              </>
            )}
          </span>
        )}
      </span>
    </div>
  );
}
