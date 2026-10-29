import * as stylex from '@stylexjs/stylex';

import type { Theme } from '../../hooks/useTheme';

import { PinIcon } from '../ui/Icons';
import { header } from './Header.styles';
import { ThemeToggle } from './ThemeToggle';
import { WAYPOINTS } from './waypoints';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
  /** `href` of the section on screen, from `useActiveWaypoint`. */
  activeWaypoint: string | null;
}

export function Header({ theme, onToggleTheme, activeWaypoint }: HeaderProps) {
  return (
    <header {...stylex.props(header.root)}>
      <div {...stylex.props(header.bar)}>
        <a href="#top" {...stylex.props(header.brand)}>
          <PinIcon />
          Abel Asfaw
        </a>
        <nav aria-label="Primary" {...stylex.props(header.nav)}>
          {WAYPOINTS.map(({ href, label }) => {
            const isCurrent = href === activeWaypoint;
            return (
              <a
                key={href}
                href={href}
                aria-current={isCurrent ? 'location' : undefined}
                // The marker lets the underline react to this link's hover.
                {...stylex.props(
                  header.link,
                  isCurrent && header.linkCurrent,
                  stylex.defaultMarker(),
                )}
              >
                {label}
                <span
                  aria-hidden="true"
                  {...stylex.props(
                    header.underline,
                    isCurrent && header.underlineCurrent,
                  )}
                />
              </a>
            );
          })}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>
      </div>
    </header>
  );
}
