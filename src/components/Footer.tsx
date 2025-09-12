import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { LinkButton } from './common/Button';

interface SocialLinks {
  href: string;
  title: string;
  icon: IconType;
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="flex flex-col items-center justify-center gap-4 p-6 text-neutral-400">
        <div className="mt-2 flex flex-wrap gap-6 xs:mt-0">
          <LinkButton
            key="GitHub"
            className="hover:text-white"
            href="https://github.com/abel-asfaw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} title="GitHub" />
          </LinkButton>
          <LinkButton
            key="LinkedIn"
            className="hover:text-white"
            href="https://linkedin.com/in/abelasfaw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} title="LinkedIn" />
          </LinkButton>
        </div>
        <p>© 2023 Abel Asfaw</p>
      </div>
    </footer>
  );
}
