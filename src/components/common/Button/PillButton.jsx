import classNames from 'classnames';

export default function PillButton({ children, className, ...rest }) {
    const transition = 'duration-300 ease-in';

    const classes = classNames(
        transition,
        'rounded-full px-3 py-1.5 text-sm',
        className,
    );

    return (
        <button {...rest} role="button" className={classes}>
            {children}
        </button>
    );
}
