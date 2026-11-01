import * as stylex from '@stylexjs/stylex';

import type { RouteTour } from '../../hooks/useRouteTour';

import { Button } from '../ui/Button';
import { routeControls } from './Route.styles';

interface RouteControlsProps {
  tour: RouteTour;
}

export function RouteControls({ tour }: RouteControlsProps) {
  const { playing, atStart, atEnd } = tour;
  const [label, glyph] = playing
    ? ['Pause', '❚❚']
    : atEnd
      ? ['Replay', '▶']
      : ['Continue', '▶'];

  return (
    <div {...stylex.props(routeControls.root)}>
      <Button
        variant="round"
        onClick={tour.prev}
        disabled={atStart}
        aria-label="Previous stop"
      >
        ←
      </Button>
      <Button
        variant="ink"
        onClick={playing ? tour.pause : tour.play}
        style={routeControls.play}
      >
        {label} <span aria-hidden="true">{glyph}</span>
      </Button>
      <Button
        variant="round"
        onClick={tour.next}
        disabled={atEnd}
        aria-label="Next stop"
      >
        →
      </Button>
    </div>
  );
}
