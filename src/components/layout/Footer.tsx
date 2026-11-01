import * as stylex from '@stylexjs/stylex';

import { LinkButton } from '../ui/Button';
import { footer } from './Footer.styles';

const LINKS = [
  { href: 'https://github.com/abel-asfaw/', label: 'GitHub ↗', external: true },
  {
    href: 'https://linkedin.com/in/abelasfaw/',
    label: 'LinkedIn ↗',
    external: true,
  },
  { href: '#top', label: 'Back to start ↑', external: false },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer {...stylex.props(footer.root)}>
      <span {...stylex.props(footer.eyebrow)}>End of the route — for now</span>
      <div {...stylex.props(footer.meta)}>
        <span>© {year} Abel Asfaw</span>
        <div {...stylex.props(footer.links)}>
          {LINKS.map(({ href, label, external }) => (
            <LinkButton
              key={href}
              href={href}
              {...(external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              variant="text"
              style={[footer.link, stylex.defaultMarker()]}
            >
              {label}
              <span aria-hidden="true" {...stylex.props(footer.underline)} />
            </LinkButton>
          ))}
        </div>
      </div>
    </footer>
  );
}
