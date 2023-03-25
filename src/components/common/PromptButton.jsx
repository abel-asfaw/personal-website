import classNames from 'classnames';

export default function CallToActionButton({ children, className, ...rest }) {
    const classes = classNames(
        className,
        'flex rounded border-0 py-2 px-6 text-lg duration-200 ease-in hover:text-white focus:outline-none'
    );

    return (
        <>
            <a {...rest} className={classes}>
                {children}
            </a>
        </>
    );
}
