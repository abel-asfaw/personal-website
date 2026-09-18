import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import { PropsWithChildren } from 'react';
import { pillButton } from './PillButton.styles';

interface PillButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      'className' | 'style'
    >,
    PropsWithChildren {
  style?: StyleXStyles;
}

export default function PillButton({
  children,
  style,
  ...props
}: PillButtonProps) {
  return (
    <button {...props} role="button" {...stylex.props(pillButton.root, style)}>
      {children}
    </button>
  );
}
