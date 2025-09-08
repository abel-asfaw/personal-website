import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { LinkButton } from './common/Button';

interface SocialLinks {
  href: string;
  title: string;
  icon: IconType;
}

export function Footer() {
  const socialLinks: SocialLinks[] = [
    {
      href: 'https://github.com/abel-asfaw/',
      title: 'GitHub',
      icon: FaGithub,
    },
    {
      href: 'https://linkedin.com/in/abelasfaw/',
      title: 'LinkedIn',
      icon: FaLinkedin,
    },
  ];

  return (
    <footer className="border-t border-zinc-800">
      <div className="flex flex-col items-center justify-center gap-4 p-6 text-neutral-400">
        <div className="mt-2 flex flex-wrap gap-6 xs:mt-0">
          {socialLinks.map(({ href, title, icon: Icon }) => (
            <LinkButton
              key={title}
              className="hover:text-white"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={30} title={title} />
            </LinkButton>
          ))}
        </div>
        <p>© 2023 Abel Asfaw</p>
      </div>
    </footer>
  );
}
