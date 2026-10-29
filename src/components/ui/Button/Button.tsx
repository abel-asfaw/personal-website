import type { StyleXStyles } from '@stylexjs/stylex';

import * as stylex from '@stylexjs/stylex';
import { PropsWithChildren } from 'react';

import { button } from './Button.styles';

export type ButtonVariant =
  | 'solid'
  | 'outline'
  | 'ink'
  | 'quiet'
  | 'round'
  | 'text';

interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'style'>,
    PropsWithChildren {
  variant?: ButtonVariant;
  style?: StyleXStyles;
}

export default function Button({
  children,
  variant = 'outline',
  style,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      {...stylex.props(button.root, button[variant], style)}
    >
      {children}
    </button>
  );
}
