/** A Contentful image resized to `width` and served as WebP. */
export function toImageUrl(url: string, width: number) {
  return `${url}?w=${width}&fm=webp&q=80`;
}
