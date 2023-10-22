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
     * - render: A function that returns JSX elements.
     */
    const sections = [
        {
            id: 'experience',
            title: "Where I've Worked",
            className: 'gap-4',
            render: () => <Accordion items={experience} />,
        },
        {
            id: 'projects',
            title: "Apps I've Built",
            className: 'gap-8',
            render: () =>
                projects.map((project) => (
                    <OverlayCard key={project.link} {...project} />
                )),
        },
        {
            id: 'skills',
            title: 'What I Can Do',
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
        <main className="flex flex-col gap-20 sm:gap-24">
            <RevealOnScroll>
                <About id="about" />
            </RevealOnScroll>
            {sections.map(({ id, title, className, render }) => (
                <RevealOnScroll key={id}>
                    <Section id={id} title={title} className={className}>
                        {render()}
                    </Section>
                </RevealOnScroll>
            ))}
        </main>
    );
}
