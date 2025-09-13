import classNames from 'classnames';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
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
      <h1 className="font-russisch text-center text-3xl font-bold text-neutral-100">
        {title}
      </h1>
      <div className={classes}>{children}</div>
    </section>
  );
}
