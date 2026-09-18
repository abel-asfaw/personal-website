import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import { ElementType, PropsWithChildren } from 'react';
import { section } from './Section.styles';

interface SectionProps extends PropsWithChildren {
  id: string;
  title: string;
  style?: StyleXStyles;
  as?: ElementType;
}

export default function Section({
  id,
  title,
  style,
  children,
  as: Wrapper = 'div',
}: SectionProps) {
  return (
    <section id={id} {...stylex.props(section.root)}>
      <h2 {...stylex.props(section.title)}>{title}</h2>
      <Wrapper {...stylex.props(section.content, style)}>{children}</Wrapper>
    </section>
  );
}
