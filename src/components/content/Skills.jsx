import { HiCpuChip } from 'react-icons/hi2';
import { skills } from '../../data/portfolioData';

export default function Skills() {
    return (
        <section id="skills">
            <div className="container mx-auto px-5 py-10">
                <div className="mb-10 text-center">
                    <HiCpuChip className="mb-4 inline-block h-10 w-10" />
                    <h1 className="mb-4 font-cubano text-3xl text-white sm:text-4xl">
                        Skills &amp; Technologies
                    </h1>
                    <p className="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
                        Get an overview of my technical skills, which have been
                        honed through years of experience and continuous
                        learning. This comprehensive list showcases my expertise
                        and qualifications, reflecting my commitment to being a
                        proficient and skilled professional in my field.
                    </p>
                </div>
                <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
                    {Object.entries(skills).map(([skill, icon]) => (
                        <div key={skill} className="w-full p-2 xs:w-1/2">
                            <div className="flex h-full gap-4 rounded bg-gray-800 p-4">
                                {icon}
                                <span className="font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
