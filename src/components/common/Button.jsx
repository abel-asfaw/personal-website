import classNames from 'classnames';

export default function Button({
    children,
    navButton,
    promptButton,
    pillButton,
    className,
    ...rest
}) {
    const classes = classNames(className, {
        'duration-200 ease-in hover:text-white': navButton || promptButton,
        'group p-1 text-lg': navButton,
        'flex items-center gap-2 rounded border-0 py-2 px-6 text-lg focus:outline-none':
            promptButton,
        'rounded-full px-3 py-1.5 text-sm': pillButton,
    });

    return (
        <a {...rest} className={classes}>
            {children}
            {navButton && (
                <div
                    className={`${classes} w-2/3 border-t border-gray-700 group-hover:border-gray-300`}
                />
            )}
        </a>
    );
}
