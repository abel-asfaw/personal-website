import type {
  Entry,
  EntryCollection,
  EntryFieldTypes,
  EntrySkeletonType,
} from 'contentful';

export interface TypeExperienceFields {
  company: EntryFieldTypes.Symbol;
  jobTitle: EntryFieldTypes.Symbol;
  skills: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  description: EntryFieldTypes.Text;
  startDate: EntryFieldTypes.Date;
  endDate?: EntryFieldTypes.Date;
  isCurrent: EntryFieldTypes.Boolean;
}

export type TypeExperienceSkeleton = EntrySkeletonType<
  TypeExperienceFields,
  'experience'
>;
export type TypeExperience = EntryCollection<
  TypeExperienceSkeleton,
  undefined, // ChainModifiers
  'en-US' // Locale
>;

export interface TypeProjectFields {
  title: EntryFieldTypes.Symbol;
  projectLink: EntryFieldTypes.Symbol;
  githubLink?: EntryFieldTypes.Symbol;
  skills?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  description: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
}

export type TypeProjectSkeleton = EntrySkeletonType<
  TypeProjectFields,
  'project'
>;

export type TypeProjects = EntryCollection<
  TypeProjectSkeleton,
  undefined, // ChainModifiers
  'en-US' // Locale
>;

export interface TypeProjectsSectionFields {
  title: EntryFieldTypes.Symbol;
  projects?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeProjectSkeleton>
  >;
}

export type TypeProjectsSectionSkeleton = EntrySkeletonType<
  TypeProjectsSectionFields,
  'projectsSection'
>;

export type TypeProjectsSection = Entry<
  TypeProjectsSectionSkeleton,
  undefined, // ChainModifiers
  'en-US' // Locale
>;

export interface TypeAboutMeFields {
  intro?: EntryFieldTypes.Symbol;
  tagLine?: EntryFieldTypes.Text;
  bio: EntryFieldTypes.Text;
}

export type TypeAboutMeSkeleton = EntrySkeletonType<
  TypeAboutMeFields,
  'aboutMe'
>;
export type TypeAboutMe = EntryCollection<
  TypeAboutMeSkeleton,
  undefined, // ChainModifiers
  'en-US' // Locale
>;

export interface TypeSkillCardFields {
  label?: EntryFieldTypes.Symbol;
  iconClass?: EntryFieldTypes.Symbol;
}

export type TypeSkillCardSkeleton = EntrySkeletonType<
  TypeSkillCardFields,
  'skillCard'
>;

export interface TypeSkillsFields {
  title: EntryFieldTypes.Symbol;
  skillsCards: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeSkillCardSkeleton>
  >;
}

export type TypeSkillsSkeleton = EntrySkeletonType<
  TypeSkillsFields,
  'skillsSection'
>;

export type TypeSkills = Entry<
  TypeSkillsSkeleton,
  undefined, // ChainModifiers
  'en-US' // Locale
>;
