import { experience } from '../data/experience';
import Accordion from './common/Accordion';
import SectionHeader from './common/SectionHeader';

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
            <div className="mx-5 flex flex-wrap items-center justify-center gap-4 md:mx-20 xl:mx-40">
                <Accordion items={experience} />
            </div>
        </div>
    );
}
