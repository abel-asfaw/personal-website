import classNames from 'classnames';

export default function NavButton({ children, className, href }) {
    const classes = classNames(
        className,
        'flex p-1 text-lg duration-200 ease-in hover:text-white'
    );

    return (
        <>
            <a href={href} className={classes}>
                {children}
            </a>
        </>
    );
}
