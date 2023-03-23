import classNames from 'classnames';

export default function NavButton({ children, className, ...rest }) {
    const classes = classNames(
        className,
        'flex p-1 text-lg duration-200 ease-in hover:text-white'
    );

    return (
        <>
            <a {...rest} className={classes}>
                {children}
            </a>
        </>
    );
}
