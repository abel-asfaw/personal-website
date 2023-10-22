import classNames from 'classnames';

export default function LinkButton({
    children,
    navButton,
    promptButton,
    className,
    ...rest
}) {
    const transition = 'duration-300 ease-in';

    const computedClasses = classNames(
        className,
        transition,
        navButton && 'p-1',
        promptButton && 'flex items-center gap-2 rounded py-2 px-4'
    );

    return (
        <a {...rest} className={computedClasses}>
            {children}
        </a>
    );
}
