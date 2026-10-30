import type { ContentfulData } from '../contentful';

export interface About {
  intro: string;
  tagLine: string;
  bio: string;
  photo?: { url: string; alt: string };
}

export function toAbout(aboutMe: ContentfulData['aboutMe']): About | null {
  if (!aboutMe) {
    return null;
  }
  const photoUrl = aboutMe.photo?.fields.file?.url;
  return {
    intro: aboutMe.intro,
    tagLine: aboutMe.tagLine,
    bio: aboutMe.bio,
    // Sized for the 360px dial at 2x.
    photo: photoUrl
      ? {
          url: `${photoUrl}?w=600&fm=webp&q=80`,
          alt: aboutMe.photo?.fields.description || 'Abel Asfaw',
        }
      : undefined,
  };
}
