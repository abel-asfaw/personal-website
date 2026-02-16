import { createClient } from 'contentful';

const baseClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_API_TOKEN,
});

export const client = baseClient.withoutUnresolvableLinks;
