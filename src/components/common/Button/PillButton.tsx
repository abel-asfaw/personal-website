import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface PillButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  className?: string;
}

export default function PillButton({
  children,
  className,
  ...props
}: PillButtonProps) {
  const classes = classNames('rounded-full px-3 py-1.5 text-sm', className);

  return (
    <button {...props} role="button" className={classes}>
      {children}
    </button>
  );
}
