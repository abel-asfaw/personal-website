import { experience, projects, skills } from '../data';
import About from './About';
import { Accordion } from './common/Accordion';
import { Card } from './common/Card';
import { SectionHeader, SectionContent } from './common/Section';
import { TileLayout } from './common/Tile';

export default function MainContent() {
    /**
     * This component renders multiple sections by mapping through the 'sections' array.
     *
     * - id: A unique identifier for the section.
     * - title: The title displayed at the top of the section.
     * - blurb: A short description for the section.
     * - render: A function that returns JSX elements.
     */
    const sections = [
        {
            id: 'experience',
            title: "Where I've Worked",
            blurb: "Dive into my career path to see the positions I've held and the impact I've made.",
            className: 'gap-4',
            render: () => <Accordion items={experience} />,
        },
        {
            id: 'projects',
            title: "Apps I've Built",
            blurb: 'Check out some projects that showcase my creativity and problem-solving skills.',
            className: 'gap-8',
            render: () =>
                projects.map((project) => (
                    <Card key={project.link} {...project} />
                )),
        },
        {
            id: 'skills',
            title: 'What I Can Do',
            blurb: 'Take a look at my tech skills, fine-tuned through years of never-ending learning.',
            className: 'gap-4',
            render: () =>
                Object.entries(skills).map(([label, icon]) => (
                    <TileLayout key={label} icon={icon} label={label} />
                )),
        },
    ];

    return (
        <main className="flex flex-col gap-16">
            <section id="about">
                <About />
            </section>
            {sections.map(({ id, title, blurb, className, render }) => (
                <section id={id} key={id} className="flex flex-col gap-6">
                    <SectionHeader id={id} title={title} blurb={blurb} />
                    <SectionContent className={className}>
                        {render()}
                    </SectionContent>
                </section>
            ))}
        </main>
    );
}
