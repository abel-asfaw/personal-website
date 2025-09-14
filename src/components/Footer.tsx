import { GitHub, Linkedin } from 'react-feather';

import { LinkButton } from './common/Button';

export function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center gap-4 p-6 text-neutral-400">
        <div className="xs:mt-0 mt-2 flex flex-wrap gap-6">
          <LinkButton
            key="GitHub"
            className="hover:text-white"
            href="https://github.com/abel-asfaw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub size={28} />
          </LinkButton>
          <LinkButton
            key="LinkedIn"
            className="hover:text-white"
            href="https://linkedin.com/in/abelasfaw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={28} />
          </LinkButton>
        </div>
        <p>© 2025 Abel Asfaw</p>
      </div>
    </footer>
  );
}
