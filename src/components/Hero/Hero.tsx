import * as stylex from '@stylexjs/stylex';

import type { About } from '../../content/about';

import { LinkButton } from '../ui/Button';
import { hero } from './Hero.styles';
import { HeroContours } from './HeroContours';
import { HeroPanel } from './HeroPanel';

interface HeroProps {
  about: About | null;
  isTouch: boolean;
  /** Starts the route tour; the "Take the tour" button also scrolls there. */
  onStartTour: () => void;
}

export function Hero({ about, isTouch, onStartTour }: HeroProps) {
  if (!about) {
    return null;
  }

  return (
    <section aria-labelledby="hero-heading" {...stylex.props(hero.root)}>
      <HeroPanel photo={about.photo} isTouch={isTouch}>
        <h1 id="hero-heading" {...stylex.props(hero.heading)}>
          {about.intro}{' '}
          <span {...stylex.props(hero.tagline)}>{about.tagLine}</span>
        </h1>
        <div {...stylex.props(hero.footer)}>
          <p {...stylex.props(hero.bio)}>{about.bio}</p>
          <div {...stylex.props(hero.actions)}>
            <LinkButton
              href="#route"
              variant="solid"
              onClick={onStartTour}
              style={hero.cta}
            >
              Take the tour ↓
            </LinkButton>
            <LinkButton href="#say-hi" style={hero.cta}>
              Reach out
            </LinkButton>
          </div>
        </div>
      </HeroPanel>
    </section>
  );
}

/** Placeholder in the hero's shape while Contentful loads. */
export function HeroSkeleton() {
  return (
    <section aria-busy="true" aria-label="Loading" {...stylex.props(hero.root)}>
      <div {...stylex.props(hero.panel)}>
        <HeroContours />
        <div {...stylex.props(hero.skeleton, hero.skeletonDial)} />
        <div {...stylex.props(hero.copy)}>
          <div
            {...stylex.props(
              hero.skeleton,
              hero.skeletonLine,
              hero.skeletonShort,
            )}
          />
          <div
            {...stylex.props(
              hero.skeleton,
              hero.skeletonLine,
              hero.skeletonLong,
            )}
          />
        </div>
      </div>
    </section>
  );
}
