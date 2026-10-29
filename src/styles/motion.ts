// Cubic-bezier easings for Motion, which takes them as number tuples.

type Bezier = [number, number, number, number];

/** The map marker's glide between stops. */
export const ROUTE_EASE: Bezier = [0.65, 0, 0.35, 1];

/** Quick settle for cards; mirrors `easing.spring` in tokens.stylex.ts. */
export const SPRING_EASE: Bezier = [0.2, 0.8, 0.2, 1];
