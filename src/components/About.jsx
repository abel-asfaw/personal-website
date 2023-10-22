import { LinkButton } from './common/Button';
import { FiChevronsDown, FiMail } from 'react-icons/fi';

export default function About({ id }) {
    const blurb = `
        I'm a software engineer at Lockheed Martin working remotely from
        Seattle. Recently, I've been developing my Photography Portfolio web
        app. I love taking an idea and bringing it to life, whether through
        passion projects or by adding new features to existing software.
    `;

    return (
        <section
            id={id}
            className="flex flex-col items-center justify-center gap-6 text-center"
        >
            <div className="relative h-auto w-64 after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-px after:h-20 after:bg-gradient-to-t after:from-zinc-950 after:to-transparent after:content-[''] sm:w-72">
                <img src="/assets/images/me.png" alt="Portrait of Abel" />
            </div>
            <h1 className="-mb-1 font-russisch  text-3xl font-bold text-neutral-100 sm:text-4xl">
                Hi, I'm Abel.{' '}
                <span className="animate-wave bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                    I love building things.
                </span>
            </h1>
            <p className="leading-relaxed sm:w-5/6">{blurb}</p>
            <div className="flex gap-4 text-center font-russisch font-bold transition-all">
                <LinkButton
                    href="#projects"
                    className="bg-green-600 text-white hover:bg-green-700"
                    promptButton
                >
                    See my work
                    <FiChevronsDown className="shrink-0 animate-bouncy will-change-transform" />
                </LinkButton>
                <LinkButton
                    href="mailto:contact@abelasfaw.com"
                    className="border-2 border-zinc-800 bg-transparent text-neutral-400 hover:bg-zinc-800 hover:text-white"
                    promptButton
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Reach out
                    <FiMail className="shrink-0" />
                </LinkButton>
            </div>
        </section>
    );
}
