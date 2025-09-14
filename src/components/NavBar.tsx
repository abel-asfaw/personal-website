import { LinkButton } from './common/Button';
import { Underline } from './common/Effects';

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
    <header
      className={
        'full-bleed drop-shadow-md/30 sticky top-0 z-10 bg-gray-900/25 py-4 shadow-sm backdrop-blur'
      }
    >
      <nav className="font-russisch flex flex-wrap justify-center gap-6 font-bold sm:gap-20">
        {navItems.map(item => (
          <LinkButton
            key={item.label}
            href={item.href}
            className="group"
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
