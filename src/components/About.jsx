import { LinkButton } from './common/Button';
import { SectionContent } from './common/Section';
import { FiExternalLink, FiMail } from 'react-icons/fi';

export default function About() {
    const blurb = (
        <p className="leading-relaxed">
            After graduating with a degree in Computer Science from UMBC, I
            joined the Redfin team. Using what I learned in school and my time
            there, I've been crafting software that really makes a difference
            for people. I love taking an idea and making it work, whether that's
            tweaking how users interact with it or making complicated stuff run
            smoothly.
        </p>
    );

    const buttons = [
        {
            href: '/resume.pdf',
            className: 'bg-green-600 text-white hover:bg-green-500',
            label: 'Resume',
            icon: FiExternalLink,
        },
        {
            href: 'mailto:contact@abelasfaw.com',
            className:
                'border-2 border-zinc-800 bg-zinc-900 text-neutral-400 hover:bg-zinc-800 hover:text-white',
            label: 'Reach Out',
            icon: FiMail,
        },
    ];

    return (
        <section id="about">
            <SectionContent className="flex-col justify-between md:flex-row lg:gap-20">
                <div className="flex flex-col items-center gap-4 text-center md:w-1/2 md:items-start md:text-left lg:flex-grow">
                    <h1 className="font-cubano text-3xl font-medium text-neutral-100 sm:text-4xl">
                        Hi, I'm Abel.{' '}
                        <span className="animate-wave bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                            I love building things.
                        </span>
                    </h1>
                    {blurb}
                    <div className="flex gap-4 text-center font-cubano">
                        {buttons.map((button) => (
                            <LinkButton
                                key={button.label}
                                className={`${button.className} text-lg`}
                                href={button.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                promptButton
                            >
                                {button.label} <button.icon />
                            </LinkButton>
                        ))}
                    </div>
                </div>
                <div className="hidden w-2/3 max-w-xs md:flex lg:w-full">
                    <picture>
                        <img
                            width="100%"
                            height="100%"
                            src="/assets/images/me.png"
                            alt="Portrait of Abel"
                        />
                    </picture>
                </div>
            </SectionContent>
        </section>
    );
}
