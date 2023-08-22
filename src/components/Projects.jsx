import { projects } from '../data/projects';
import Section from './common/Section';

export default function Projects() {
    const id = 'projects',
        title = "Apps I've Built",
        blurb = (
            <p>
                Dive into a selection of projects that highlight my creativity
                and problem-solving skills. These projects show my commitment to
                learning, growing, and making an impact in my field, even
                outside of a professional context.
            </p>
        );

    return (
        <Section id={id} title={title} blurb={blurb}>
            <div className="-mt-4 flex flex-wrap text-center lg:px-40">
                {projects.map((project) => (
                    <a
                        href={project.link}
                        key={project.image}
                        className="w-100 p-4 sm:w-1/2"
                        target="_blank"
                    >
                        <div className="relative flex h-full">
                            <img
                                alt="gallery"
                                className="absolute inset-0 h-full w-full object-cover object-center"
                                src={project.image}
                            />
                            <div className="z-9 relative w-full border-4 border-zinc-800 bg-zinc-900 px-8 py-10 opacity-70 duration-200 ease-in hover:opacity-100">
                                <h1 className="mb-1 text-lg font-medium text-white">
                                    {project.title}
                                </h1>
                                <h2 className="mb-3 text-sm font-medium tracking-widest text-green-400">
                                    {project.subtitle}
                                </h2>
                                <p className="leading-relaxed text-white">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
}
