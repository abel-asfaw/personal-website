import { useQuery } from '@tanstack/react-query';

import { client } from '../contentful/contentfulClient';
import { TypeProjects, TypeProjectsSkeleton } from '../contentful/types';
import { OverlayCard } from './common/Card';
import { Section } from './common/Section';

export function Projects() {
  const { data: projects } = useQuery<TypeProjects>({
    queryKey: ['projects'],
    queryFn: () =>
      client.getEntries<TypeProjectsSkeleton>({
        content_type: 'projects',
        locale: 'en-US',
      }),
  });

  return (
    <Section id="projects" title="Apps I've Built" className="gap-4">
      {projects?.items.map(project => {
        const { title, projectLink, skills, description, image } =
          project.fields;

        const imageUrl = 'fields' in image ? image.fields.file?.url : undefined;

        return (
          <OverlayCard
            key={projectLink}
            tags={skills}
            title={title}
            link={projectLink}
            imageUrl={imageUrl!}
            description={description}
          />
        );
      })}
    </Section>
  );
}
