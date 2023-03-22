import classNames from 'classnames';

export default function CallToActionButton({ children, className, href }) {
    const classes = classNames(
        className,
        'inline-flex rounded border-0 py-2 px-6 text-lg duration-200 ease-in hover:text-white focus:outline-none'
    );

    return (
        <>
            <a href={href} className={classes}>
                {children}
            </a>
        </>
    );
}
