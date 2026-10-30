/** A Contentful image resized to `width` and served as WebP. */
export function toImageUrl(url: string, width: number) {
  // Contentful's URLs leave out the protocol, so the base supplies https.
  // Any query they already carry is kept.
  const image = new URL(url, 'https://images.ctfassets.net');
  image.searchParams.set('w', String(width));
  image.searchParams.set('fm', 'webp');
  image.searchParams.set('q', '80');
  return image.toString();
}
