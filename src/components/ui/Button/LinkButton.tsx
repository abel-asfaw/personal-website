import type { StyleXStyles } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';

import * as stylex from '@stylexjs/stylex';

import type { ButtonVariant } from './Button';

import { button } from './Button.styles';

interface LinkButtonProps
  extends
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'style'>,
    PropsWithChildren {
  variant?: ButtonVariant;
  style?: StyleXStyles;
}

export default function LinkButton({
  children,
  variant = 'outline',
  style,
  ...props
}: LinkButtonProps) {
  return (
    <a {...props} {...stylex.props(button.root, button[variant], style)}>
      {children}
    </a>
  );
}
