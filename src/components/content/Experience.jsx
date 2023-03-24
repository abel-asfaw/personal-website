import { MdWorkHistory } from 'react-icons/md';
import { experience } from '../../data/portfolioData';
import Accordion from '../layout/Accordion';

export default function Skills() {
    return (
        <section id="experience">
            <div className="container mx-auto px-5 py-10">
                <div className="mb-10 text-center">
                    <MdWorkHistory className="mb-4 inline-block h-10 w-10" />
                    <h1 className="mb-4 font-cubano text-3xl text-white sm:text-4xl">
                        Experience
                    </h1>
                    <p className="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
                        Explore my professional journey and discover the
                        positions I've held, companies I've worked with, and the
                        value I've brought to various teams. My work experience
                        showcases my adaptability and commitment to delivering
                        impactful results.
                    </p>
                </div>
                <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
                    <Accordion items={experience} />
                </div>
            </div>
        </section>
    );
}
