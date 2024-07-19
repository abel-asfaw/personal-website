import classNames from 'classnames';

export default function Link({
    children,
    size,
    variant,
    underline,
    className,
    ...props
}) {
    const transition = 'duration-300 ease-in';
    const sizeOptions = { sm: '', md: '', lg: '' };
    const variantOptions = { plain: '', outlined: '', solid: '' };
    const underlineOptions = { always: '', hover: '', none: '' };
    const classes = classNames(transition, className);

    return (
        <a className={classes} {...props}>
            {children}
        </a>
    );
}
