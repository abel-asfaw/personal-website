import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import { PropsWithChildren } from 'react';
import { tileCard } from './TileCard.styles';

interface TileCardProps extends PropsWithChildren {
  style?: StyleXStyles;
}

export default function TileCard({ style, children }: TileCardProps) {
  return <div {...stylex.props(tileCard.root, style)}>{children}</div>;
}
