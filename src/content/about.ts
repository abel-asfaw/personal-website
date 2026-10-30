import type { ContentfulData } from '../contentful';

import { toImageUrl } from './image';

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
          url: toImageUrl(photoUrl, 600),
          alt: aboutMe.photo?.fields.description || 'Abel Asfaw',
        }
      : undefined,
  };
}
