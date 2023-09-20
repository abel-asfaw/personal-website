import { skills } from '../data/skills';
import SectionHeader from './common/SectionHeader';
import TileLayout from './common/TileLayout';

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
        <div className="flex flex-col gap-6">
            <SectionHeader id={id} title={title} blurb={blurb} />
            <div className="mx-5 flex flex-wrap items-center justify-center gap-4 md:mx-20 xl:mx-40">
                {Object.entries(skills).map(([label, icon]) => (
                    <TileLayout key={label} icon={icon} label={label} />
                ))}
            </div>
        </div>
    );
}
