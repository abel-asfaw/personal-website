import type {
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

export interface TypeProjectsFields {
  title: EntryFieldTypes.Symbol;
  projectLink: EntryFieldTypes.Symbol;
  skills?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  description: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
}

export type TypeProjectsSkeleton = EntrySkeletonType<
  TypeProjectsFields,
  'projects'
>;
export type TypeProjects = EntryCollection<
  TypeProjectsSkeleton,
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
