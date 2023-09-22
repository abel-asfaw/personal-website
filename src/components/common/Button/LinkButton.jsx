import classNames from 'classnames';

export default function LinkButton({
    children,
    navButton,
    promptButton,
    className,
    ...rest
}) {
    const transitionClasses = 'duration-300 ease-in';

    const classes = classNames(className, transitionClasses, {
        'group p-1': navButton,
        'flex items-center gap-2 rounded py-2 px-6 focus:outline-none':
            promptButton,
    });

    return (
        <a {...rest} className={classes}>
            {children}
            {navButton && (
                <div
                    className={`${transitionClasses} w-2/3 border-t border-zinc-700 group-hover:w-full group-hover:border-zinc-300`}
                />
            )}
        </a>
    );
}
