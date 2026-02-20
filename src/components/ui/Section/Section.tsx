import classNames from 'classnames';
import { ElementType, PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  id: string;
  title: string;
  className?: string;
  as?: ElementType;
}

export default function Section({
  id,
  title,
  className,
  children,
  as: Wrapper = 'div',
}: SectionProps) {
  const classes = classNames(
    'flex flex-wrap justify-center items-center',
    className,
  );

  return (
    <section id={id} className="flex flex-col gap-6">
      <h2 className="text-center text-3xl font-semibold text-neutral-100">
        {title}
      </h2>
      <Wrapper className={classes}>{children}</Wrapper>
    </section>
  );
}
