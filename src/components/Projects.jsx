import { projects } from '../data/projects';
import SectionHeader from './common/SectionHeader';
import Card from './common/Card';

export default function Projects() {
    const id = 'projects',
        title = "Apps I've Built",
        blurb = (
            <p>
                Check out some projects that showcase my creativity and
                problem-solving skills.
            </p>
        );

    return (
        <div className="flex flex-col gap-6">
            <SectionHeader id={id} title={title} blurb={blurb} />
            <div className="mx-5 flex flex-wrap items-center justify-center gap-10 md:mx-20 xl:mx-40">
                {projects.map((project) => (
                    <Card key={project.link} {...project} />
                ))}
            </div>
        </div>
    );
}
