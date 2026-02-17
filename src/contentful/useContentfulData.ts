import { useQueries } from '@tanstack/react-query';

import { client } from './contentful.client';
import type {
  TypeAboutMeSkeleton,
  TypeExperienceSectionSkeleton,
  TypeProjectsSectionSkeleton,
  TypeSkillsSkeleton,
} from './contentful.types';

export function useContentfulData() {
  const [aboutMe, experienceSection, projectsSection, skillsSection] =
    useQueries({
      queries: [
        {
          queryKey: ['about-me'],
          queryFn: () =>
            client.getEntries<TypeAboutMeSkeleton>({
              content_type: 'aboutMe',
            }),
        },
        {
          queryKey: ['experienceSection'],
          queryFn: () =>
            client.getEntries<TypeExperienceSectionSkeleton>({
              content_type: 'experienceSection',
            }),
        },
        {
          queryKey: ['projectsSection'],
          queryFn: () =>
            client.getEntries<TypeProjectsSectionSkeleton>({
              content_type: 'projectsSection',
            }),
        },
        {
          queryKey: ['skillsSection'],
          queryFn: () =>
            client.getEntries<TypeSkillsSkeleton>({
              content_type: 'skillsSection',
            }),
        },
      ],
    });

  return {
    aboutMe: aboutMe.data?.items[0]?.fields,
    experienceSection: experienceSection.data?.items[0]?.fields,
    projectsSection: projectsSection.data?.items[0]?.fields,
    skillsSection: skillsSection.data?.items[0]?.fields,
  };
}

export type ContentfulData = ReturnType<typeof useContentfulData>;
