import * as stylex from '@stylexjs/stylex';

import { LinkButton } from '../ui/Button';
import { sayHi } from './SayHi.styles';

const EMAIL = 'contact@abelasfaw.com';

const LINKS = [
  { href: 'https://github.com/abel-asfaw/', label: 'GitHub ↗', external: true },
  {
    href: 'https://linkedin.com/in/abelasfaw/',
    label: 'LinkedIn ↗',
    external: true,
  },
  { href: '#top', label: 'Back to start ↑', external: false },
];

export function SayHi() {
  const year = new Date().getFullYear();

  return (
    <footer id="say-hi" {...stylex.props(sayHi.root)}>
      <span {...stylex.props(sayHi.eyebrow)}>End of the route — for now</span>
      <LinkButton
        href={`mailto:${EMAIL}`}
        variant="text"
        style={[sayHi.mail, stylex.defaultMarker()]}
      >
        <span {...stylex.props(sayHi.say)}>Say hi</span>
        <span aria-hidden="true" {...stylex.props(sayHi.arrow)}>
          →
        </span>
      </LinkButton>
      <div {...stylex.props(sayHi.meta)}>
        <span>
          {EMAIL} · © {year} Abel Asfaw
        </span>
        <div {...stylex.props(sayHi.links)}>
          {LINKS.map(({ href, label, external }) => (
            <LinkButton
              key={href}
              href={href}
              {...(external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              variant="text"
              style={[sayHi.link, stylex.defaultMarker()]}
            >
              {label}
              <span aria-hidden="true" {...stylex.props(sayHi.underline)} />
            </LinkButton>
          ))}
        </div>
      </div>
    </footer>
  );
}
