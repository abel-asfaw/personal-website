import * as stylex from '@stylexjs/stylex';
import { useEffect, useId, useRef, useState } from 'react';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Button } from '../ui/Button';
import { ChevronUpIcon } from '../ui/Icons';
import { dock } from './Dock.styles';
import { WAYPOINTS } from './waypoints';

interface DockProps {
  /** `href` of the section on screen, from `useActiveWaypoint`. */
  activeWaypoint: string | null;
}

/**
 * Waypoint nav for the phone layout: a corner chip naming the section on
 * screen, which opens into the full list.
 */
export function Dock({ activeWaypoint }: DockProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const currentIndex = WAYPOINTS.findIndex(
    ({ href }) => href === activeWaypoint,
  );
  const current = WAYPOINTS[currentIndex];

  // The dock is hidden in the wide layout, so the list closes there rather
  // than coming back on the way down.
  const isWide = useMediaQuery('(min-width: 701px)');
  if (isWide && isOpen) {
    setIsOpen(false);
  }

  // Closes on a tap or focus anywhere else, or on Escape, which hands focus
  // back to the chip so it isn't lost with the list.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onOutside = ({ target }: Event) => {
      if (!(target instanceof Node && rootRef.current?.contains(target))) {
        setIsOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onOutside);
    document.addEventListener('focusin', onOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onOutside);
      document.removeEventListener('focusin', onOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <nav ref={rootRef} aria-label="Waypoints" {...stylex.props(dock.root)}>
      <Button
        ref={toggleRef}
        variant="text"
        aria-label={
          current
            ? `${current.label}, ${currentIndex + 1} of ${WAYPOINTS.length}`
            : undefined
        }
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        onClick={() => setIsOpen((open) => !open)}
        style={[dock.frosted, dock.chip]}
      >
        <span
          aria-hidden="true"
          {...stylex.props(dock.dot, current && dock.dotLit)}
        />
        {current ? current.label : 'Waypoints'}
        {current ? (
          <span {...stylex.props(dock.position)}>
            {currentIndex + 1}/{WAYPOINTS.length}
          </span>
        ) : null}
        <span {...stylex.props(dock.chevron, isOpen && dock.chevronOpen)}>
          <ChevronUpIcon />
        </span>
      </Button>
      {isOpen ? (
        <ul id={menuId} {...stylex.props(dock.frosted, dock.menu)}>
          {WAYPOINTS.map(({ href, label }, index) => {
            const isCurrent = index === currentIndex;
            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={isCurrent ? 'location' : undefined}
                  onClick={() => setIsOpen(false)}
                  {...stylex.props(dock.link, isCurrent && dock.current)}
                >
                  <span aria-hidden="true" {...stylex.props(dock.number)}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </nav>
  );
}
