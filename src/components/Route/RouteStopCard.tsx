import * as stylex from '@stylexjs/stylex';
import { motion } from 'motion/react';
import { useId } from 'react';

import type { Stop } from '../../content/route';
import type { RouteTour } from '../../hooks/useRouteTour';

import { useScrollEdges } from '../../hooks/useScrollEdges';
import { SPRING_EASE } from '../../styles/motion';
import { TagList } from '../ui/TagList';
import { routeStopCard } from './Route.styles';

interface RouteStopCardProps {
  stops: Stop[];
  tour: RouteTour;
}

const ENTRANCE = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: SPRING_EASE },
};

export function RouteStopCard({ stops, tour }: RouteStopCardProps) {
  const { ref: scrollerRef, edges } = useScrollEdges();
  const companyId = useId();
  const canScroll = edges.above || edges.below;

  const stop = stops[tour.stop];
  if (!stop) {
    return null;
  }

  const status = tour.playing
    ? 'Touring… next stop in a moment'
    : stop.isCurrent
      ? `Arrived · ${stop.dates}`
      : tour.atEnd
        ? `Last stop · ${stop.dates}`
        : 'Paused · press play or tap a stop';

  return (
    <article {...stylex.props(routeStopCard.root)}>
      {/* Re-keyed on every move so the card replays its entrance, and each
          stop's text starts scrolled to the top. */}
      <motion.div
        key={tour.tick}
        initial={tour.tick === 0 ? false : ENTRANCE.initial}
        animate={ENTRANCE.animate}
        transition={ENTRANCE.transition}
        {...stylex.props(routeStopCard.body)}
      >
        <div {...stylex.props(routeStopCard.meta)}>
          <span>
            Stop {tour.stop + 1} of {stops.length}
          </span>
          <span {...stylex.props(routeStopCard.dates)}>{stop.dates}</span>
        </div>
        <div {...stylex.props(routeStopCard.titles)}>
          <h3 id={companyId} {...stylex.props(routeStopCard.company)}>
            {stop.company}
          </h3>
          <span {...stylex.props(routeStopCard.role)}>
            {stop.jobTitle} · {stop.length}
          </span>
        </div>
        <div {...stylex.props(routeStopCard.viewport)}>
          <section
            ref={scrollerRef}
            // While a long stop scrolls, it takes focus so a keyboard can
            // scroll it in Safari too, and is named as a region for it.
            aria-labelledby={canScroll ? companyId : undefined}
            // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={canScroll ? 0 : undefined}
            {...stylex.props(routeStopCard.scroller)}
          >
            <p {...stylex.props(routeStopCard.description)}>
              {stop.description}
            </p>
            <TagList tags={stop.skills} style={routeStopCard.tags} />
          </section>
          <span
            aria-hidden="true"
            {...stylex.props(
              routeStopCard.edge,
              routeStopCard.edgeAbove,
              edges.above && routeStopCard.edgeShown,
            )}
          />
          <span
            aria-hidden="true"
            {...stylex.props(
              routeStopCard.edge,
              routeStopCard.edgeBelow,
              edges.below && routeStopCard.edgeShown,
            )}
          />
        </div>
      </motion.div>
      <div {...stylex.props(routeStopCard.progress)}>
        <div aria-hidden="true" {...stylex.props(routeStopCard.bars)}>
          {stops.map((s, index) => (
            <span
              key={s.key}
              {...stylex.props(
                routeStopCard.bar,
                index <= tour.stop && routeStopCard.barReached,
              )}
            />
          ))}
        </div>
        <span aria-live="polite" {...stylex.props(routeStopCard.status)}>
          {status}
        </span>
      </div>
    </article>
  );
}
