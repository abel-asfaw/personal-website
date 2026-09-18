import * as stylex from '@stylexjs/stylex';

import { LinkButton } from '../ui/Button';
import { Underline } from '../ui/Effects';
import { navBar } from './NavBar.styles';

interface NavItem {
  label: string;
  href: string;
}

export function Navbar() {
  const navItems: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ];

  return (
    <header {...stylex.props(navBar.root)}>
      <nav {...stylex.props(navBar.nav)}>
        {navItems.map(item => (
          <LinkButton
            key={item.label}
            href={item.href}
            // The marker lets <Underline /> react to this link being hovered.
            style={[navBar.link, stylex.defaultMarker()]}
            navButton
          >
            {item.label}
            <Underline />
          </LinkButton>
        ))}
      </nav>
    </header>
  );
}
