import classNames from 'classnames';

import type { ContentfulData } from '../contentful';
import { TileCard } from './ui/Card';
import { Section } from './ui/Section';

interface SkillsProps {
  skillsSection: ContentfulData['skillsSection'];
}

export function Skills({ skillsSection }: SkillsProps) {
  if (!skillsSection) {
    return null;
  }

  return (
    <Section id="skills" title={skillsSection.title} className="gap-4">
      {skillsSection.skills.map(skill => {
        if (!skill) {
          return null;
        }

        const { label, iconClass } = skill.fields;

        return (
          <TileCard key={label} className="font-roboto">
            <i
              className={classNames('text-green-400', iconClass)}
              style={{
                fontSize: 24,
              }}
            />
            <span>{label}</span>
          </TileCard>
        );
      })}
    </Section>
  );
}
