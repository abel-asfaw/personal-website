import { LinkButton } from './common/Button';
import { SectionContent } from './common/Section';
import { FiExternalLink, FiMail } from 'react-icons/fi';

export default function About() {
    const blurb = `
        After graduating with a Bachelor's degree in Computer Science from
        the University of Maryland, Baltimore County (UMBC), I joined the
        Redfin engineering team. I was able to apply what I learned in
        school as well as learn new skills and new ways of thinking. Since
        then, I've been making software that really makes a difference for
        people. I love taking an idea and making it work, whether that’s
        creating passion projects or improving existing software.
    `;

    const buttons = [
        {
            href: '/resume.pdf',
            className: 'bg-green-600 text-white hover:bg-green-700',
            label: 'Resume',
            icon: FiExternalLink,
        },
        {
            href: 'mailto:contact@abelasfaw.com',
            className:
                'border-2 border-zinc-800 bg-transparent text-neutral-400 hover:bg-zinc-800 hover:text-white',
            label: 'Reach Out',
            icon: FiMail,
        },
    ];

    return (
        <SectionContent className="flex-col justify-between sm:flex-row lg:gap-20">
            <div className="flex flex-col items-center gap-4 text-center sm:w-1/2 sm:items-start sm:text-left lg:flex-grow">
                <h1 className="font-russisch text-3xl font-bold text-neutral-100 sm:text-4xl">
                    Hi, I'm Abel.{' '}
                    <span className="animate-wave bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                        I love building things.
                    </span>
                </h1>
                <p className="leading-relaxed">{blurb}</p>
                <div className="flex gap-4 text-center font-russisch font-bold">
                    {buttons.map((button) => (
                        <LinkButton
                            key={button.label}
                            href={button.href}
                            className={`${button.className}`}
                            promptButton
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {button.label} <button.icon className="shrink-0" />
                        </LinkButton>
                    ))}
                </div>
            </div>
            <div className="hidden w-2/3 max-w-xs sm:flex lg:w-full">
                <picture>
                    <img src="/assets/images/me.png" alt="Portrait of Abel" />
                </picture>
            </div>
        </SectionContent>
    );
}
