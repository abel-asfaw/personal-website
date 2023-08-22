import { experience } from '../data/experience';
import Accordion from './common/Accordion';
import Section from './common/Section';

export default function Skills() {
    const id = 'experience',
        title = "Where I've Worked",
        blurb = (
            <p>
                Dive into my career path to see the positions I've held and the
                impact I've made.
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
