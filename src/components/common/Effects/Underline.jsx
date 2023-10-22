import classNames from 'classnames';

export default function Underline({ className }) {
    const transition = 'duration-300 ease-in';

    const classes = classNames(
        transition,
        'group-hover:ml-0 group-hover:w-full group-hover:border-zinc-200',
        '-mb-0.5 ml-auto w-0 rounded border-t border-zinc-950',
        className
    );

    return <div className={classes} />;
}
