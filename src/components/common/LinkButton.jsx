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
        'duration-200 ease-in hover:text-white',
        {
            'group p-1 text-lg': navButton,
            'flex items-center gap-2 rounded py-2 px-6 text-lg focus:outline-none':
                promptButton,
        }
    );

    return (
        <a {...rest} className={classes}>
            {children}
            {navButton && (
                <div
                    role="presentation"
                    aria-label="Underline effect on hover"
                    className={`${classes} w-2/3 border-t border-gray-700 group-hover:border-gray-300`}
                />
            )}
        </a>
    );
}
