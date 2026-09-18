import * as stylex from '@stylexjs/stylex';
import { underline } from './Underline.styles';

export default function Underline() {
  return <div {...stylex.props(underline.root)} />;
}
