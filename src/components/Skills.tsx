import * as stylex from '@stylexjs/stylex';

import type { ContentfulData } from '../contentful';
import { TileCard } from './ui/Card';
import { Section } from './ui/Section';
import { skills } from './Skills.styles';

interface SkillsProps {
  skillsSection: ContentfulData['skillsSection'];
}

export function Skills({ skillsSection }: SkillsProps) {
  if (!skillsSection) {
    return null;
  }

  return (
    <Section
      id="skills"
      title={skillsSection.title}
      style={skills.list}
      as="ul"
    >
      {skillsSection.skills.map(skill => {
        if (!skill) {
          return null;
        }

        const { label, iconClass } = skill.fields;

        return (
          <li key={label}>
            <TileCard style={skills.tile}>
              {/* The devicon class comes from the CMS, so it stays on a bare
                  <i>; color and font-size are inherited from the wrapper. */}
              <span {...stylex.props(skills.icon)}>
                <i className={iconClass} />
              </span>
              <span>{label}</span>
            </TileCard>
          </li>
        );
      })}
    </Section>
  );
}
