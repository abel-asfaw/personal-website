import classNames from 'classnames';

import { useQuery } from '@tanstack/react-query';

import { client } from '../contentful/contentfulClient';
import { TypeSkills } from '../contentful/types';
import { TileCard } from './common/Card';
import { Section } from './common/Section';

export function Skills() {
  const { data: skills } = useQuery<TypeSkills>({
    queryKey: ['skills'],
    queryFn: () =>
      client.getEntries({
        content_type: 'skills',
        locale: 'en-US',
        order: ['sys.createdAt'],
      }),
  });

  return (
    <Section id="skills" title="What I Can Do" className="gap-4">
      {skills?.items.map(skill => {
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
