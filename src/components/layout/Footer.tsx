import { Github, Linkedin } from 'lucide-react';

import { LinkButton } from '../ui/Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

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
            aria-label="GitHub"
          >
            <Github size={28} />
          </LinkButton>
          <LinkButton
            key="LinkedIn"
            className="hover:text-white"
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
