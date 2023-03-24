import { HiCode } from 'react-icons/hi';
import { projects } from '../../data/portfolioData';

export default function Projects() {
    return (
        <section id="projects">
            <div className="container mx-auto px-5 py-10 text-center lg:px-40">
                <div className="mb-10 flex w-full flex-col">
                    <HiCode className="mx-auto mb-4 inline-block h-10 w-10" />
                    <h1 className="mb-4 font-cubano text-3xl text-white sm:text-4xl">
                        Apps I've Built
                    </h1>
                    <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                        Dive into a selection of projects that highlight my
                        creativity, technical expertise, and problem-solving
                        abilities. These projects demonstrate my passion for
                        innovation and my dedication to developing solutions
                        that make a difference.
                    </p>
                </div>
                <div className="-m-2 flex flex-wrap">
                    {projects.map(project => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="w-100 p-4 sm:w-1/2"
                            target="_blank"
                        >
                            <div className="relative flex">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 h-full w-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="z-9 relative w-full border-4 border-gray-800 bg-gray-900 px-8 py-10 opacity-0 duration-100 ease-in hover:opacity-100">
                                    <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-green-400">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font mb-3 text-lg font-medium text-white">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
