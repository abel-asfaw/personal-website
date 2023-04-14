import Button from './common/Button';
import { FiExternalLink } from 'react-icons/fi';

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
                        After graduating magna cum laude with a degree in
                        Computer Science from UMBC, I applied my skills and
                        knowledge to my work at Redfin. My background in
                        Computer Science and experience at Redfin has enabled me
                        to develop software that makes a difference in people's
                        lives. Whether it's optimizing user interfaces or
                        automating complex systems, I'm motivated by the
                        challenge of transforming ideas into functional
                        products&nbsp;🚀
                    </p>
                    <div className="flex gap-4 text-center font-cubano">
                        <Button
                            promptButton
                            href="/resume.pdf"
                            download="Abel-Asfaw-Resume"
                            className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-500"
                        >
                            Resume <FiExternalLink />
                        </Button>
                        <Button
                            promptButton
                            href="#contact"
                            className="bg-gray-800 text-gray-400 hover:bg-gray-700"
                        >
                            Reach Out
                        </Button>
                    </div>
                </div>
                <div className="w-2/3 max-w-xs lg:w-full">
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
