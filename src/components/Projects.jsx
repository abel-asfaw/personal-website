import { projects } from '../data/projects';
import SectionHeader from './common/SectionHeader';
import SectionContent from './common/SectionContent';
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
            <SectionContent className="flex-wrap justify-center gap-10">
                {projects.map((project) => (
                    <Card key={project.link} {...project} />
                ))}
            </SectionContent>
        </div>
    );
}
