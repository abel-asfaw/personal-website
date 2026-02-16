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
    intro?: EntryFieldTypes.Symbol;
    tagLine?: EntryFieldTypes.Text;
    bio: EntryFieldTypes.Text;
    photo: EntryFieldTypes.AssetLink;
  },
  'aboutMe'
>;

export type TypeSkillCardSkeleton = EntrySkeletonType<
  {
    label?: EntryFieldTypes.Symbol;
    iconClass?: EntryFieldTypes.Symbol;
  },
  'skillCard'
>;

export type TypeSkillsSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol;
    skillsCards: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<TypeSkillCardSkeleton>
    >;
  },
  'skillsSection'
>;
