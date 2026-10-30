import type { PropsWithChildren } from 'react';

import * as stylex from '@stylexjs/stylex';

import type { About } from '../../content/about';

import { usePointerTracking } from '../../hooks/usePointerTracking';
import { hero } from './Hero.styles';
import { HeroCompass } from './HeroCompass';
import { HeroContours } from './HeroContours';
import { HeroPointer } from './HeroPointer';

interface HeroPanelProps extends PropsWithChildren {
  photo: About['photo'];
  isTouch: boolean;
}

/**
 * The hero's panel and everything that follows the pointer across it. The
 * pointer state lives here so each frame re-renders only the pointer layers;
 * `children` (the copy) are created by the parent and left alone.
 */
export function HeroPanel({ photo, isTouch, children }: HeroPanelProps) {
  const { panelRef, compassRef, pointer, handlers } = usePointerTracking();

  const coords = pointer.active
    ? `${((1 - pointer.ratioY) * 90).toFixed(2)}° N · ${(pointer.ratioX * 180).toFixed(2)}° E`
    : `${isTouch ? 'Drag sideways' : 'Move around'} — the map follows you`;

  return (
    <div ref={panelRef} {...handlers} {...stylex.props(hero.panel)}>
      <HeroContours />
      <HeroPointer pointer={pointer} />
      <HeroCompass
        pointer={pointer}
        compassRef={compassRef}
        photo={photo}
        isTouch={isTouch}
      />
      <div {...stylex.props(hero.layer, hero.copy)}>
        <span aria-hidden="true" {...stylex.props(hero.chip, hero.coords)}>
          <span {...stylex.props(hero.online)} />
          {coords}
        </span>
        {children}
      </div>
    </div>
  );
}
