import { LinkButton } from './common/Button';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

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
            icon: FaLinkedinIn,
        },
    ];

    return (
        <footer className="mt-10 border-t border-zinc-900">
            <div className="container mx-auto flex w-full flex-col items-center justify-center p-6 text-neutral-400 xs:flex-row xs:justify-between">
                © 2023 Abel Asfaw
                <div className="mt-2 flex flex-wrap gap-6 xs:mt-0">
                    {socialLinks.map(({ href, icon: Icon, title }) => (
                        <LinkButton
                            className="hover:text-white"
                            key={title}
                            href={href}
                            target="_blank"
                        >
                            <Icon size={24} title={title} />
                        </LinkButton>
                    ))}
                </div>
            </div>
        </footer>
    );
}
