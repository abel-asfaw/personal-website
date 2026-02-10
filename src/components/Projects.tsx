import { useQuery } from '@tanstack/react-query';

import { client } from '../contentful';
import { TypeProjectsSectionSkeleton } from '../contentful/types';
import { OverlayCard } from './common/Card';
import { Section } from './common/Section';

export function Projects() {
  const { data } = useQuery({
    queryKey: ['projectsSection'],
    queryFn: () =>
      client.getEntries<TypeProjectsSectionSkeleton>({
        content_type: 'projectsSection',
      }),
  });

  const projectsSection = data?.items[0]?.fields;

  if (!projectsSection) {
    return null;
  }

  return (
    <Section id="projects" title={projectsSection.title} className="gap-4">
      {projectsSection.projects?.map(project => {
        if (!('fields' in project)) {
          return null;
        }

        const { title, projectLink, skills, description, image } =
          project.fields;

        const imageUrl =
          image && 'fields' in image ? image.fields.file?.url : undefined;

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
