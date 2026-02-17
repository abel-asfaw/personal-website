import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

export type TypeExperienceSkeleton = EntrySkeletonType<
  {
    company: EntryFieldTypes.Symbol;
    jobTitle: EntryFieldTypes.Symbol;
    skills: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    description: EntryFieldTypes.Text;
    startDate: EntryFieldTypes.Date;
    endDate?: EntryFieldTypes.Date;
    isCurrent: EntryFieldTypes.Boolean;
  },
  'experience'
>;

export type TypeExperienceSectionSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol;
    experiences: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<TypeExperienceSkeleton>
    >;
  },
  'experienceSection'
>;

export type TypeProjectSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol;
    projectLink: EntryFieldTypes.Symbol;
    githubLink?: EntryFieldTypes.Symbol;
    skills?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
  },
  'project'
>;

export type TypeProjectsSectionSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol;
    projects: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<TypeProjectSkeleton>
    >;
  },
  'projectsSection'
>;

export type TypeAboutMeSkeleton = EntrySkeletonType<
  {
    intro: EntryFieldTypes.Symbol;
    tagLine: EntryFieldTypes.Text;
    bio: EntryFieldTypes.Text;
    photo: EntryFieldTypes.AssetLink;
  },
  'aboutMe'
>;

export type TypeSkillSkeleton = EntrySkeletonType<
  {
    label: EntryFieldTypes.Symbol;
    iconClass: EntryFieldTypes.Symbol;
  },
  'skill'
>;

export type TypeSkillsSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol;
    skills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSkillSkeleton>>;
  },
  'skillsSection'
>;
