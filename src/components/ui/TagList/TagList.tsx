import type { StyleXStyles } from '@stylexjs/stylex';

import * as stylex from '@stylexjs/stylex';

import { tagList } from './TagList.styles';

interface TagListProps {
  tags: string[];
  style?: StyleXStyles;
}

/** A wrapping row of mono skill tags. */
export default function TagList({ tags, style }: TagListProps) {
  return (
    <ul {...stylex.props(tagList.root, style)}>
      {tags.map((name) => (
        <li key={name} {...stylex.props(tagList.tag)}>
          {name}
        </li>
      ))}
    </ul>
  );
}
