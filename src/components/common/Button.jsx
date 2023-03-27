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
        'rounded-full px-3 py-1.5 text-sm': pillButton,
        'rounded border-0 py-2 px-6 text-lg focus:outline-none': promptButton,
        'p-1 text-lg': navButton,
    });

    return (
        <a {...rest} className={classes}>
            {children}
        </a>
    );
}
