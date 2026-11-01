import type { StyleXStyles } from '@stylexjs/stylex';
import type { PropsWithChildren, Ref } from 'react';

import * as stylex from '@stylexjs/stylex';

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
  ref?: Ref<HTMLButtonElement>;
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
