import classNames from 'classnames';

export default function PillButton({ children, className, ...rest }) {
    const classes = classNames(
        className,
        'rounded-full px-3 py-1.5 text-sm font-medium'
    );

    return (
        <button {...rest} role="button" className={classes}>
            {children}
        </button>
    );
}
