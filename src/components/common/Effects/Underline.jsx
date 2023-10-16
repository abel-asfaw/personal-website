import classNames from 'classnames';

export default function Underline({ className }) {
    const transition = 'duration-300 ease-in';
    const baseClasses = '-mb-0.5 ml-auto w-0 rounded border-t border-zinc-950';
    const hoverClasses =
        'group-hover:ml-0 group-hover:w-full group-hover:border-zinc-200';

    return (
        <div
            className={classNames(
                transition,
                baseClasses,
                hoverClasses,
                className
            )}
        />
    );
}
