import { skills } from '../data/skills';
import Section from './common/Section';
import SkillTile from './common/SkillTile';

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
                    <SkillTile key={skill} skill={skill} icon={icon} />
                ))}
            </div>
        </Section>
    );
}
