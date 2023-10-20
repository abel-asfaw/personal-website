import { LinkButton } from './common/Button';
import { SectionContent } from './common/Section';
import { FiExternalLink, FiMail } from 'react-icons/fi';

export default function About() {
    const blurb = `
        I'm a software engineer at Lockheed Martin working remotely from
        Seattle. Recently, I've been developing my Photography Portfolio web
        app. I love taking an idea and bringing it to life, whether through
        passion projects or by adding new features to existing software.
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
        <SectionContent className="flex-col justify-center gap-6 text-center">
            <div className="h-auto w-72 sm:w-80">
                <img src="/assets/images/me.png" alt="Portrait of Abel" />
            </div>
            <h1 className="-mb-1 font-russisch  text-3xl font-bold text-neutral-100 sm:text-4xl">
                Hi, I'm Abel.{' '}
                <span className="animate-wave bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                    I love building things.
                </span>
            </h1>
            <p className="leading-relaxed sm:w-5/6">{blurb}</p>
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
        </SectionContent>
    );
}
