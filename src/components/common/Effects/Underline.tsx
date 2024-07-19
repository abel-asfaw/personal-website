import classNames from 'classnames';

interface UnderlineProps {
    className?: string;
}

export default function Underline({ className }: UnderlineProps) {
    const transition = 'duration-300 ease-in';

    const classes = classNames(
        transition,
        'group-hover:ml-0 group-hover:w-full group-hover:border-zinc-200',
        '-mb-0.5 ml-auto w-0 rounded border-t border-zinc-950',
        className,
    );

    return <div className={classes} />;
}
