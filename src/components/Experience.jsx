import { experience } from '../data/experience';
import SectionContent from './common/SectionContent';
import SectionHeader from './common/SectionHeader';
import Accordion from './common/Accordion';

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
        <div className="flex flex-col gap-6">
            <SectionHeader id={id} title={title} blurb={blurb} />
            <SectionContent className="flex-wrap justify-center gap-4">
                <Accordion items={experience} />
            </SectionContent>
        </div>
    );
}
