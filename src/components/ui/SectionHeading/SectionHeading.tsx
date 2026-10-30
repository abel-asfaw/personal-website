import * as stylex from '@stylexjs/stylex';

import { sectionHeading } from './SectionHeading.styles';

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
}

/** Waypoint eyebrow over a section title; `id` labels the section. */
export default function SectionHeading({
  id,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div {...stylex.props(sectionHeading.root)}>
      <span {...stylex.props(sectionHeading.eyebrow)}>{eyebrow}</span>
      <h2 id={id} {...stylex.props(sectionHeading.title)}>
        {title}
      </h2>
    </div>
  );
}
