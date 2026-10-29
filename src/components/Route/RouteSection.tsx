import * as stylex from '@stylexjs/stylex';

import type { Stop } from '../../content/route';
import type { RouteTour } from '../../hooks/useRouteTour';

import { SectionHeading } from '../ui/SectionHeading';
import { routeSection } from './Route.styles';
import { RouteControls } from './RouteControls';
import { RouteMap } from './RouteMap';
import { RouteStopCard } from './RouteStopCard';

interface RouteSectionProps {
  title: string;
  stops: Stop[];
  tour: RouteTour;
  litSkill: string | null;
  onClearSkill: () => void;
}

export function RouteSection({
  title,
  stops,
  tour,
  litSkill,
  onClearSkill,
}: RouteSectionProps) {
  if (stops.length === 0) {
    return null;
  }

  return (
    <section
      id="route"
      aria-labelledby="route-heading"
      {...stylex.props(routeSection.root)}
    >
      <div {...stylex.props(routeSection.header)}>
        <SectionHeading
          id="route-heading"
          eyebrow={`Waypoint 01 · ${title}`}
          title="The journey so far"
        />
        <RouteControls tour={tour} />
      </div>
      <div {...stylex.props(routeSection.body)}>
        <RouteMap
          stops={stops}
          tour={tour}
          litSkill={litSkill}
          onClearSkill={onClearSkill}
        />
        <RouteStopCard stops={stops} tour={tour} />
      </div>
    </section>
  );
}
