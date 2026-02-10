import classNames from 'classnames';

import { useQuery } from '@tanstack/react-query';

import { client } from '../contentful';
import { TypeSkillsSkeleton } from '../contentful/types';
import { TileCard } from './common/Card';
import { Section } from './common/Section';

export function Skills() {
  const { data } = useQuery({
    queryKey: ['skillsSection'],
    queryFn: () =>
      client.getEntries<TypeSkillsSkeleton>({
        content_type: 'skillsSection',
      }),
  });

  const skillsSection = data?.items[0].fields;

  if (!skillsSection) {
    return null;
  }

  return (
    <Section id="skills" title={skillsSection.title} className="gap-4">
      {skillsSection.skillsCards.map(skill => {
        if (!('fields' in skill)) {
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
