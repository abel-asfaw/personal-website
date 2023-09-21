import { skills } from '../data/skills';
import { SectionHeader, SectionContent } from './common/Section';
import { TileLayout } from './common/Tile';

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
            <SectionContent className="flex-wrap justify-center gap-4">
                {Object.entries(skills).map(([label, icon]) => (
                    <TileLayout key={label} icon={icon} label={label} />
                ))}
            </SectionContent>
        </div>
    );
}
