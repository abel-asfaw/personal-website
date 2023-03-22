export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex flex-col items-center px-5 py-10 md:flex-row">
                <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
                    <h1 className="title-font mb-4 font-cubano text-3xl font-medium text-white sm:text-4xl">
                        Hi, I'm Abel. I love building things.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis ex beatae architecto delectus assumenda,
                        necessitatibus fuga ratione! Illo ab architecto
                        explicabo nisi, ad non, voluptatum natus dolorem aliquid
                        aperiam suscipit!
                    </p>
                    <div className="flex justify-center font-cubano lg:whitespace-nowrap">
                        <a
                            href="#contact"
                            className="inline-flex rounded border-0 bg-green-600 py-2 px-6 text-lg text-white duration-200 ease-in hover:bg-green-500 focus:outline-none"
                        >
                            Hire Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex rounded border-0 bg-gray-800 py-2 px-6 text-lg text-gray-400 duration-200 ease-in hover:bg-gray-700 hover:text-white focus:outline-none"
                        >
                            See My Projects
                        </a>
                    </div>
                </div>
                <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
                    <picture>
                        <img
                            width="100%"
                            height="100%"
                            src="/images/me.png"
                            alt="Portrait of Abel"
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
}
