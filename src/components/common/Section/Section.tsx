import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  id: string;
  title: string;
  className?: string;
}

export default function Section({
  id,
  title,
  className,
  children,
}: SectionProps) {
  const classes = classNames(
    'flex flex-wrap justify-center items-center',
    className,
  );

  return (
    <section id={id} className="flex flex-col gap-6">
      <h1 className="text-center text-3xl font-semibold text-neutral-100">
        {title}
      </h1>
      <div className={classes}>{children}</div>
    </section>
  );
}
