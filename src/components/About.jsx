import { FiExternalLink, FiMail } from 'react-icons/fi';
import LinkButton from './common/LinkButton';

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex flex-col items-center gap-10 px-5 py-10 md:flex-row md:p-10 lg:gap-20">
                <div className="flex flex-col items-center gap-4 text-center md:w-1/2 md:items-start md:text-left lg:flex-grow">
                    <h1 className="font-cubano text-3xl font-medium text-white sm:text-4xl">
                        Hi, I'm Abel.{' '}
                        <span className="animate-wave bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                            I love building things.
                        </span>
                    </h1>
                    <p className="leading-relaxed">
                        After graduating with a degree in Computer Science from
                        UMBC, I joined the Redfin team. Using what I learned in
                        school and my time there, I've been crafting software
                        that really makes a difference for people. I love taking
                        an idea and making it work, whether that's tweaking how
                        users interact with it or making complicated stuff run
                        smoothly.
                    </p>
                    <div className="flex gap-4 text-center font-cubano">
                        <LinkButton
                            promptButton
                            href="/resume.pdf"
                            target="_blank"
                            className="bg-green-600 text-white hover:bg-green-500"
                        >
                            Resume <FiExternalLink />
                        </LinkButton>
                        <LinkButton
                            promptButton
                            href="mailto:contact@abelasfaw.com"
                            className="bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                        >
                            Reach Out <FiMail />
                        </LinkButton>
                    </div>
                </div>
                <div className="hidden md:block w-2/3 max-w-xs lg:w-full">
                    <picture>
                        <img
                            width="100%"
                            height="100%"
                            src="/assets/images/me.png"
                            alt="Portrait of Abel"
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
}
