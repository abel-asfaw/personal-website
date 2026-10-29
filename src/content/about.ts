import type { ContentfulData } from '../contentful';

export interface About {
  intro: string;
  tagLine: string;
  bio: string;
}

export function toAbout(aboutMe: ContentfulData['aboutMe']): About | null {
  if (!aboutMe) {
    return null;
  }
  return { intro: aboutMe.intro, tagLine: aboutMe.tagLine, bio: aboutMe.bio };
}
