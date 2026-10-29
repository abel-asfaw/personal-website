import * as stylex from '@stylexjs/stylex';

import { dock } from './Dock.styles';
import { waypoints } from './waypoints';

interface DockProps {
  /** `href` of the section on screen, from `useActiveWaypoint`. */
  activeWaypoint: string | null;
}

/** Bottom waypoint nav for the phone layout. */
export function Dock({ activeWaypoint }: DockProps) {
  return (
    <nav aria-label="Waypoints" {...stylex.props(dock.root)}>
      {waypoints.map(({ href, short }, index) => {
        const isCta = index === waypoints.length - 1;
        const isCurrent = href === activeWaypoint;
        return (
          <a
            key={href}
            href={href}
            aria-current={isCurrent ? 'location' : undefined}
            {...stylex.props(
              dock.link,
              isCta && dock.cta,
              isCurrent && (isCta ? dock.ctaCurrent : dock.current),
            )}
          >
            {short}
          </a>
        );
      })}
    </nav>
  );
}
