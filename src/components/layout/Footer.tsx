import * as stylex from '@stylexjs/stylex';
import { Github, Linkedin } from 'lucide-react';

import { LinkButton } from '../ui/Button';
import { footer } from './Footer.styles';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div {...stylex.props(footer.root)}>
        <div {...stylex.props(footer.links)}>
          <LinkButton
            key="GitHub"
            style={footer.link}
            href="https://github.com/abel-asfaw/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={28} />
          </LinkButton>
          <LinkButton
            key="LinkedIn"
            style={footer.link}
            href="https://linkedin.com/in/abelasfaw/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </LinkButton>
        </div>
        <p>© {currentYear} Abel Asfaw</p>
      </div>
    </footer>
  );
}
