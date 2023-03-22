import classNames from 'classnames';

export default function Icon({ children, className, href }) {
    const classes = classNames(
        className,
        'flex p-1 text-lg duration-200 ease-in hover:text-white'
    );
    return (
        <div>
            <a href={href} className={classes}>
                {children}
            </a>
        </div>
    );
}
