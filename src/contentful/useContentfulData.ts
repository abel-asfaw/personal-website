import { useQueries } from '@tanstack/react-query';

import { client } from './contentful.client';
import type {
  TypeAboutMeSkeleton,
  TypeExperienceSectionSkeleton,
  TypeProjectsSectionSkeleton,
  TypeSkillsSkeleton,
} from './contentful.types';

export function useContentfulData() {
  return useQueries({
    queries: [
      {
        queryKey: ['aboutMe'],
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
    combine: result => ({
      data: {
        aboutMe: result[0].data?.items[0]?.fields,
        experienceSection: result[1].data?.items[0]?.fields,
        projectsSection: result[2].data?.items[0]?.fields,
        skillsSection: result[3].data?.items[0]?.fields,
      },
      isPending: result.some(query => query.isPending),
    }),
  });
}

export type ContentfulData = ReturnType<typeof useContentfulData>['data'];
