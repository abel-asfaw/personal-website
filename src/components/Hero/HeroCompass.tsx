import type { RefObject } from 'react';

import * as stylex from '@stylexjs/stylex';
import { useRef, useState } from 'react';

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

// The rebound after a press: from the pressed scale (heroCompass.portrait's
// :active), an overshoot that settles back to rest. Each step eases on its
// own, so the peaks land in full.
const BOUNCE: Keyframe[] = [
  { transform: 'scale(0.96)', easing: 'ease-out' },
  { transform: 'scale(1.08)', offset: 0.4, easing: 'ease-in-out' },
  { transform: 'scale(0.98)', offset: 0.7, easing: 'ease-in-out' },
  { transform: 'scale(1)' },
];

/**
 * The portrait in a compass whose needle points at the pointer. Pressing the
 * portrait bounces it.
 */
export function HeroCompass({ pointer, compassRef, photo }: HeroCompassProps) {
  const [isHovered, setIsHovered] = useState(false);
  const portraitRef = useRef<HTMLButtonElement>(null);
  // The needle still turns, but the portrait doesn't lean after the pointer.
  const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const { heading, tiltX, tiltY, isFingerDrag } = pointer;

  const bearing = ((Math.round(heading) % 360) + 360) % 360;
  const lean = isReducedMotion ? 0 : MAX_TILT;
  const tilt = `rotateX(${(-tiltY * lean).toFixed(2)}deg) rotateY(${(tiltX * lean).toFixed(2)}deg) scale(${isHovered ? 1.04 : 1})`;

  return (
    <div {...stylex.props(heroCompass.root)}>
      <div ref={compassRef} {...stylex.props(heroCompass.dial)}>
        <HeroCompassFace />
        {photo ? (
          <Button
            ref={portraitRef}
            variant="text"
            aria-label={photo.alt || 'Portrait'}
            onClick={() => {
              if (!isReducedMotion) {
                // Restarts on every press, mid-bounce included.
                portraitRef.current?.animate(BOUNCE, 450);
              }
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
        {/* Hidden: the heading changes every frame. */}
        <span aria-hidden="true" {...stylex.props(heroCompass.readout)}>
          <span {...stylex.props(heroCompass.readoutLabel)}>Heading</span>
          <span>
            {String(bearing).padStart(3, '0')}°{' '}
            <span {...stylex.props(heroCompass.cardinal)}>
              {CARDINALS[Math.round(bearing / 45) % 8]}
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}
