import { projects } from '../data/projects';
import Section from './common/Section';
import ProjectCard from '../components/common/ProjectCard';

export default function Projects() {
    const id = 'projects',
        title = "Apps I've Built",
        blurb = (
            <p>
                Check out some projects that showcase my creativity and knack
                for problem-solving.
            </p>
        );

    return (
        <Section id={id} title={title} blurb={blurb}>
            <div className="-mt-4 flex flex-wrap text-center lg:px-40">
                {projects.map((project) => (
                    <ProjectCard key={project.link} {...project} />
                ))}
            </div>
        </Section>
    );
}
