import classNames from 'classnames';

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  navButton?: boolean;
  promptButton?: boolean;
  className?: string;
}

export default function LinkButton({
  children,
  navButton,
  promptButton,
  className,
  ...props
}: LinkButtonProps) {
  const transition = 'duration-300 ease-in';

  const classes = classNames(
    transition,
    navButton && 'p-1',
    promptButton && 'flex items-center gap-2 rounded py-2.5 px-4',
    className,
  );

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
