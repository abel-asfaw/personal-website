import classNames from 'classnames';

export default function LinkButton({
    children,
    navButton,
    promptButton,
    className,
    ...rest
}) {
    const transition = 'duration-300 ease-in';

    const classes = classNames(
        transition,
        navButton && 'p-1',
        promptButton && 'flex items-center gap-2 rounded py-2.5 px-4',
        className
    );

    return (
        <a className={classes} {...rest}>
            {children}
        </a>
    );
}
