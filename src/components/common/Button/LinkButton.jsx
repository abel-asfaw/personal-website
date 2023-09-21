import classNames from 'classnames';

export default function LinkButton({
    children,
    navButton,
    promptButton,
    className,
    ...rest
}) {
    const transitionClasses = 'duration-200 ease-in';

    const classes = classNames(
        className,
        transitionClasses,
        navButton && 'group p-1',
        promptButton &&
            'flex items-center gap-2 rounded py-2 px-6 focus:outline-none'
    );

    return (
        <a {...rest} className={classes}>
            {children}
            {navButton && (
                <div
                    className={`${transitionClasses} w-2/3 border-t border-zinc-700 group-hover:border-zinc-300`}
                />
            )}
        </a>
    );
}
