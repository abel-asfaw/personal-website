import classNames from 'classnames';

export default function LinkButton({
    children,
    navButton,
    promptButton,
    className,
    ...rest
}) {
    const transitionClasses = 'duration-200 ease-in hover:text-white text-lg';
    const classes = classNames(
        className,
        transitionClasses,
        navButton && 'group p-1 text-gray-400',
        promptButton &&
            'flex items-center gap-2 rounded py-2 px-6 focus:outline-none'
    );

    return (
        <a {...rest} className={classes}>
            {children}
            {navButton && (
                <div
                    role="presentation"
                    className={`${transitionClasses} w-2/3 border-t border-gray-700 group-hover:border-gray-300`}
                />
            )}
        </a>
    );
}
