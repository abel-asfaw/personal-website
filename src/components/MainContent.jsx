import { experience, projects, skills } from '../data';
import About from './About';
import { Accordion } from './common/Accordion';
import { OverlayCard, TileCard } from './common/Card';
import { RevealOnScroll } from './common/Effects';
import { Section } from './common/Section';

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
                    <OverlayCard key={project.link} {...project} />
                )),
        },
        {
            id: 'skills',
            title: 'What I Can Do',
            blurb: 'Take a look at my tech skills, fine-tuned through years of never-ending learning.',
            className: 'gap-4',
            render: () =>
                Object.entries(skills).map(([label, icon]) => (
                    <TileCard
                        key={label}
                        icon={icon}
                        label={label}
                        className="font-roboto"
                    />
                )),
        },
    ];

    return (
        <main className="mx-5 flex flex-col gap-20 md:mx-20 xl:mx-40 2xl:mx-80">
            <section id="about">
                <RevealOnScroll>
                    <About />
                </RevealOnScroll>
            </section>
            {sections.map(({ id, title, blurb, className, render }) => (
                <RevealOnScroll key={id}>
                    <Section
                        id={id}
                        title={title}
                        blurb={blurb}
                        className={className}
                    >
                        {render()}
                    </Section>
                </RevealOnScroll>
            ))}
        </main>
    );
}
