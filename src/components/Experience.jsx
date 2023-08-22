import { experience } from '../data/experience';
import Accordion from './common/Accordion';
import Section from './common/Section';

export default function Skills() {
    const id = 'experience',
        title = "Where I've Worked",
        blurb = (
            <p>
                Explore my professional journey and discover the positions I've
                held, companies I've worked with, and the value I've brought to
                various teams. My work experience showcases my adaptability and
                commitment to delivering impactful results.
            </p>
        );

    return (
        <Section id={id} title={title} blurb={blurb}>
            <div className="mx-auto flex flex-wrap lg:w-4/5">
                <Accordion items={experience} />
            </div>
        </Section>
    );
}
