import * as stylex from '@stylexjs/stylex';
import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';

import type { Stop } from '../../content/route';
import type { RouteTour } from '../../hooks/useRouteTour';

import { routeMinWidth } from '../../content/route';
import { ROUTE_EASE } from '../../styles/motion';
import { Button } from '../ui/Button';
import { routeMap } from './Route.styles';

interface RouteMapProps {
  stops: Stop[];
  tour: RouteTour;
  litSkill: string | null;
  onClearSkill: () => void;
}

const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const ROWS = ['1', '2', '3', '4'];

// Room between neighbouring stops (44px across) before the map scrolls.
const STOP_GAP = 64;

const MARKER_TRANSITION = { duration: 0.9, ease: ROUTE_EASE };

const points = (stops: Stop[]) =>
  stops.map(({ x, y }) => `${x},${y}`).join(' ');

export function RouteMap({
  stops,
  tour,
  litSkill,
  onClearSkill,
}: RouteMapProps) {
  const current = stops[tour.stop];
  // MotionConfig's reducedMotion only covers transforms, not left/top.
  const reduceMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  // The stop last centered, so only a real move scrolls smoothly (StrictMode's
  // repeated effect run re-centers the same stop and stays instant).
  const centeredStop = useRef<number | null>(null);
  const currentX = stops[tour.stop]?.x;

  // Keeps the current stop in view when the map scrolls sideways: on load
  // (the latest stop, at the far end), as the tour or a jump moves on, and
  // when a resize or rotation changes how much of the map fits.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || currentX === undefined) {
      return undefined;
    }

    const center = (isSmooth: boolean) => {
      if (scroller.scrollWidth <= scroller.clientWidth) {
        return;
      }
      scroller.scrollTo({
        left:
          (scroller.scrollWidth * currentX) / 100 - scroller.clientWidth / 2,
        behavior: isSmooth ? 'smooth' : 'auto',
      });
    };

    const isMove =
      centeredStop.current !== null && centeredStop.current !== tour.stop;
    center(isMove && !reduceMotion);
    centeredStop.current = tour.stop;

    // The observer also fires once on observe; only a real width change
    // re-centers, so it doesn't cut the smooth scroll above short.
    let width = scroller.clientWidth;
    const observer = new ResizeObserver(() => {
      if (scroller.clientWidth !== width) {
        width = scroller.clientWidth;
        center(false);
      }
    });
    observer.observe(scroller);
    return () => observer.disconnect();
    // Keyed on the stop and its position rather than the `stops` array, so a
    // refetch doesn't snap back a map the visitor scrolled themselves.
  }, [currentX, tour.stop, reduceMotion]);

  // The lit badge only makes sense when some stop actually lights up.
  const hasLitStops =
    litSkill !== null && stops.some((stop) => stop.skills.includes(litSkill));

  return (
    <div {...stylex.props(routeMap.root)}>
      <div ref={scrollerRef} {...stylex.props(routeMap.scroller)}>
        <div
          {...stylex.props(
            routeMap.land,
            routeMap.landWidth(routeMinWidth(stops.length, STOP_GAP)),
          )}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            {...stylex.props(routeMap.terrain)}
          >
            <g {...stylex.props(routeMap.contours)}>
              <path
                d="M-5 20 C 20 10, 35 30, 55 18 S 90 8, 105 22"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M-5 32 C 18 22, 38 44, 58 30 S 88 20, 105 36"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M-5 50 C 22 40, 40 62, 60 48 S 86 40, 105 54"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M-5 66 C 20 58, 42 78, 62 64 S 88 58, 105 72"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M-5 82 C 24 74, 44 94, 64 80 S 90 76, 105 88"
                vectorEffect="non-scaling-stroke"
              />
              <ellipse
                cx="80"
                cy="74"
                rx="9"
                ry="7"
                vectorEffect="non-scaling-stroke"
              />
              <ellipse
                cx="80"
                cy="74"
                rx="5"
                ry="3.6"
                vectorEffect="non-scaling-stroke"
              />
              <ellipse
                cx="22"
                cy="30"
                rx="7"
                ry="6"
                vectorEffect="non-scaling-stroke"
              />
            </g>
            <polyline
              points={points(stops)}
              vectorEffect="non-scaling-stroke"
              {...stylex.props(routeMap.ahead)}
            />
            <polyline
              points={points(stops.slice(0, tour.stop + 1))}
              vectorEffect="non-scaling-stroke"
              {...stylex.props(routeMap.travelled)}
            />
          </svg>

          <div
            aria-hidden="true"
            {...stylex.props(routeMap.ticks, routeMap.ticksColumns)}
          >
            {COLUMNS.map((column) => (
              <span key={column} {...stylex.props(routeMap.tick)}>
                {column}
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            {...stylex.props(routeMap.ticks, routeMap.ticksRows)}
          >
            {ROWS.map((row) => (
              <span key={row} {...stylex.props(routeMap.tick)}>
                {row}
              </span>
            ))}
          </div>

          {stops.map((stop, index) => {
            const isReached = index <= tour.stop;
            const isCurrent = index === tour.stop;
            const isLit = litSkill !== null && stop.skills.includes(litSkill);
            const at = routeMap.at(`${stop.x}%`, `${stop.y}%`);

            return (
              <div key={stop.key}>
                <Button
                  variant="text"
                  onClick={() => tour.goTo(index)}
                  aria-label={`Stop ${index + 1}: ${stop.company}, ${stop.dates}`}
                  aria-current={isCurrent ? 'step' : undefined}
                  style={[
                    routeMap.stop,
                    isReached && routeMap.stopReached,
                    isCurrent && routeMap.stopCurrent,
                    isLit && routeMap.stopLit,
                    at,
                  ]}
                >
                  {stop.n}
                </Button>
                <span
                  aria-hidden="true"
                  {...stylex.props(
                    routeMap.label,
                    isReached && routeMap.labelReached,
                    at,
                  )}
                >
                  {stop.company} · {stop.year}
                </span>
              </div>
            );
          })}

          {current ? (
            <motion.div
              aria-hidden="true"
              initial={false}
              animate={{ left: `${current.x}%`, top: `${current.y}%` }}
              transition={reduceMotion ? { duration: 0 } : MARKER_TRANSITION}
              {...stylex.props(routeMap.marker)}
            >
              <span {...stylex.props(routeMap.markerPulse)} />
              <div {...stylex.props(routeMap.markerPin)}>
                {current.isCurrent ? (
                  <span {...stylex.props(routeMap.here)}>you are here</span>
                ) : null}
                <span {...stylex.props(routeMap.pin)} />
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>

      <div {...stylex.props(routeMap.key)}>
        <span {...stylex.props(routeMap.keyTitle)}>Key</span>
        <span {...stylex.props(routeMap.keyItem)}>
          <span {...stylex.props(routeMap.keyTravelled)} />
          travelled
        </span>
        <span {...stylex.props(routeMap.keyItem)}>
          <span {...stylex.props(routeMap.keyAhead)} />
          ahead
        </span>
        <span {...stylex.props(routeMap.keyItem)}>
          <span {...stylex.props(routeMap.keyStop)} />
          stop
        </span>
      </div>

      {hasLitStops ? (
        <div {...stylex.props(routeMap.lit)}>
          <span>Lit: where I used {litSkill}</span>
          <Button
            variant="round"
            onClick={onClearSkill}
            aria-label="Stop highlighting stops"
            style={routeMap.litClear}
          >
            ✕
          </Button>
        </div>
      ) : null}
    </div>
  );
}
