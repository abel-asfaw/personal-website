import { skills } from '../data/skills';
import Section from './common/Section';

export default function Skills() {
    const id = 'skills',
        title = 'What I Can Do',
        blurb = (
            <p>
                Take a look at my tech skills, fine-tuned through years of
                never-ending learning.
            </p>
        );

    return (
        <Section id={id} title={title} blurb={blurb}>
            <div className="-mx-2 -mt-2 flex flex-wrap sm:mx-auto lg:w-4/5">
                {Object.entries(skills).map(([skill, icon]) => (
                    <div key={skill} className="w-full p-2 xs:w-1/2">
                        <div className="flex h-full items-center gap-4 rounded bg-zinc-900 p-4">
                            <span className="[&>*]:h-6 [&>*]:w-6 [&>*]:text-green-400">
                                {icon}
                            </span>
                            <span className="font-medium text-white">
                                {skill}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
