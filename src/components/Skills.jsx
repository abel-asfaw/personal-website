import { skills } from '../data/skills';
import Section from './common/Section';

export default function Skills() {
    const id = 'skills',
        title = 'What I Can Do',
        blurb =
            'Get an overview of my technical skills, which have been \
            honed through years of experience and continuous \
            learning. This comprehensive list showcases my expertise \
            and qualifications, reflecting my commitment to being a \
            proficient and skilled professional in my field.';

    return (
        <Section id={id} title={title} blurb={blurb}>
            <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
                {Object.entries(skills).map(([skill, icon]) => (
                    <div key={skill} className="w-full p-2 xs:w-1/2">
                        <div className="flex h-full items-center gap-3 rounded bg-gray-800 px-3 py-4 sm:gap-4 sm:px-4">
                            <span className="[&>*]:h-6 [&>*]:w-6 [&>*]:text-green-400">
                                {icon}
                            </span>
                            <span className="font-mono font-medium text-white">
                                {skill}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
