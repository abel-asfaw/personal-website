import classNames from 'classnames';

import { useQuery } from '@tanstack/react-query';

import { client } from '../contentful';
import { TypeSkillsSkeleton } from '../contentful/types';
import { TileCard } from './common/Card';
import { Section } from './common/Section';

export function Skills() {
  const { data: skills } = useQuery({
    queryKey: ['skills'],
    queryFn: () =>
      client.withoutUnresolvableLinks.getEntries<TypeSkillsSkeleton>({
        content_type: 'skills',
        locale: 'en-US',
      }),
  });

  return (
    <Section id="skills" title="What I Can Do" className="gap-4">
      {skills?.items?.[0].fields.skillsCards.map(skill => {
        if (!skill) {
          return;
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
