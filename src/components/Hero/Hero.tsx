import * as stylex from '@stylexjs/stylex';

import type { About } from '../../content/about';

import { useIsTouch } from '../../hooks/useIsTouch';
import { usePointerTracking } from '../../hooks/usePointerTracking';
import { LinkButton } from '../ui/Button';
import { hero } from './Hero.styles';
import { HeroPointer } from './HeroPointer';

interface HeroProps {
  about: About | null;
}

export function Hero({ about }: HeroProps) {
  const isTouch = useIsTouch();
  const { panelRef, compassRef, pointer, handlers } = usePointerTracking();

  if (!about) {
    return null;
  }

  const coords = pointer.active
    ? `${((1 - pointer.ratioY) * 90).toFixed(2)}° N · ${(pointer.ratioX * 180).toFixed(2)}° E`
    : `${isTouch ? 'Drag across' : 'Move around'} — the map follows you`;

  return (
    <section aria-labelledby="hero-heading" {...stylex.props(hero.root)}>
      <div ref={panelRef} {...handlers} {...stylex.props(hero.panel)}>
        <Contours />
        <HeroPointer pointer={pointer} compassRef={compassRef} />

        <span aria-hidden="true" {...stylex.props(hero.layer, hero.coords)}>
          <span {...stylex.props(hero.online)} />
          {coords}
        </span>
        <h1 id="hero-heading" {...stylex.props(hero.layer, hero.heading)}>
          {about.intro}{' '}
          <span {...stylex.props(hero.tagline)}>{about.tagLine}</span>
        </h1>
        <div {...stylex.props(hero.layer, hero.footer)}>
          <p {...stylex.props(hero.bio)}>{about.bio}</p>
          <div {...stylex.props(hero.actions)}>
            <LinkButton href="#route" variant="solid" style={hero.cta}>
              Take the tour ↓
            </LinkButton>
            <LinkButton href="#say-hi" style={hero.cta}>
              Reach out
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contours() {
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
}

/** Placeholder in the hero's shape while Contentful loads. */
export function HeroSkeleton() {
  return (
    <section aria-busy="true" aria-label="Loading" {...stylex.props(hero.root)}>
      <div {...stylex.props(hero.panel)}>
        <Contours />
        <div {...stylex.props(hero.skeletonLine, hero.skeletonShort)} />
        <div {...stylex.props(hero.skeletonLine, hero.skeletonLong)} />
      </div>
    </section>
  );
}
