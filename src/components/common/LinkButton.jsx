import classNames from 'classnames';

export default function LinkButton({
    children,
    navButton,
    promptButton,
    className,
    ...rest
}) {
    const classes = classNames(
        className,
        'duration-200 ease-in hover:text-white text-lg',
        navButton && 'group p-1',
        promptButton &&
            'flex items-center gap-2 rounded py-2 px-6 focus:outline-none'
    );

    return (
        <a {...rest} className={classes}>
            {children}
            {navButton && (
                <div
                    role="presentation"
                    aria-label="Underline effect on hover"
                    className={`${classes} w-2/3 border-t border-gray-700 p-0 group-hover:border-gray-300`}
                />
            )}
        </a>
    );
}
