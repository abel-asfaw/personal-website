import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import { PropsWithChildren } from 'react';
import { linkButton } from './LinkButton.styles';

interface LinkButtonProps
  extends
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'style'>,
    PropsWithChildren {
  navButton?: boolean;
  promptButton?: boolean;
  style?: StyleXStyles;
}

export default function LinkButton({
  children,
  navButton,
  promptButton,
  style,
  ...props
}: LinkButtonProps) {
  return (
    <a
      {...props}
      {...stylex.props(
        linkButton.root,
        navButton && linkButton.nav,
        promptButton && linkButton.prompt,
        style,
      )}
    >
      {children}
    </a>
  );
}
