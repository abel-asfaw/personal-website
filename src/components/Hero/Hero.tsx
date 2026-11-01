import * as stylex from '@stylexjs/stylex';

import type { About } from '../../content/about';

import { LinkButton } from '../ui/Button';
import { hero, heroCompass } from './Hero.styles';
import { HeroContours } from './HeroContours';
import { HeroPanel } from './HeroPanel';

const EMAIL = 'contact@abelasfaw.com';

interface HeroProps {
  about: About | null;
  isTouch: boolean;
  /** Starts the route tour; the "Tour" button also scrolls there. */
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
              Tour ↓
            </LinkButton>
            <LinkButton
              href={`mailto:${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              style={hero.cta}
            >
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
        <div {...stylex.props(hero.layer, hero.copy)}>
          <div
            {...stylex.props(
              hero.skeleton,
              hero.skeletonChip,
              hero.skeletonCoords,
            )}
          />
          <div {...stylex.props(hero.skeletonGroup)}>
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
            <div
              {...stylex.props(
                hero.skeleton,
                hero.skeletonLine,
                hero.skeletonShorter,
              )}
            />
          </div>
          <div {...stylex.props(hero.footer)}>
            <div {...stylex.props(hero.skeletonGroup, hero.skeletonBio)}>
              <div {...stylex.props(hero.skeleton, hero.skeletonText)} />
              <div {...stylex.props(hero.skeleton, hero.skeletonText)} />
              <div
                {...stylex.props(
                  hero.skeleton,
                  hero.skeletonText,
                  hero.skeletonShort,
                  hero.skeletonStacked,
                )}
              />
            </div>
            <div {...stylex.props(hero.actions)}>
              <div {...stylex.props(hero.skeleton, hero.skeletonButton)} />
              <div {...stylex.props(hero.skeleton, hero.skeletonButton)} />
            </div>
          </div>
        </div>
        <div {...stylex.props(heroCompass.root)}>
          <div
            {...stylex.props(
              heroCompass.dial,
              hero.skeleton,
              hero.skeletonDial,
            )}
          />
          <div {...stylex.props(hero.skeleton, hero.skeletonChip)} />
        </div>
      </div>
    </section>
  );
}
