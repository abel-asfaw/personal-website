import classNames from 'classnames';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
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
