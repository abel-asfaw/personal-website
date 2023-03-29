import Button from './common/Button';

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex flex-col items-center px-5 py-10 md:flex-row md:p-10">
                <div className="mb-10 flex flex-col items-center gap-4 text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
                    <h1 className="font-cubano text-3xl font-medium text-white sm:text-4xl">
                        Hi, I'm Abel. I love building things.
                    </h1>
                    <p className="leading-relaxed">
                        My background in Computer Science and work experience at
                        Redfin has enabled me to develop software that makes a
                        real difference in people's lives. Whether it's
                        optimizing user interfaces or automating complex
                        systems, I'm motivated by the challenge of transforming
                        ideas into functional products 🚀
                    </p>
                    <div className="flex gap-4 text-center font-cubano">
                        <Button
                            promptButton
                            href="#contact"
                            className="bg-green-600 text-white hover:bg-green-500"
                        >
                            Hire Me
                        </Button>
                        <Button
                            promptButton
                            href="#projects"
                            className="bg-gray-800 text-gray-400 hover:bg-gray-700"
                        >
                            See My Projects
                        </Button>
                    </div>
                </div>
                <div className="w-2/3 lg:w-full lg:max-w-sm">
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
