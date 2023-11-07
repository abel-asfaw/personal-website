import { LinkButton } from './common/Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    const socialLinks = [
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
        <footer className="full-bleed border-t border-zinc-900">
            <div className="flex flex-col items-center justify-center gap-4 p-6 text-neutral-400">
                <p>© 2023 Abel Asfaw</p>
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
            </div>
        </footer>
    );
}
