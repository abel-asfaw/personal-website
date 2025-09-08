import { createClient } from 'contentful';

export const client = createClient({
  space: 'i1mgcel8x5jp',
  environment: 'master',
  accessToken: import.meta.env.VITE_CONTENTFUL_API_TOKEN,
});
