import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'plain' | 'outlined' | 'solid';
  underline?: 'always' | 'hover' | 'none';
  className?: string;
}

export default function Link({
  children,
  size,
  variant,
  underline,
  className,
  ...props
}: LinkProps) {
  const transition = 'duration-300 ease-in';
  const sizeOptions = { sm: '', md: '', lg: '' };
  const variantOptions = { plain: '', outlined: '', solid: '' };
  const underlineOptions = { always: '', hover: '', none: '' };
  const classes = classNames(transition, className);

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
