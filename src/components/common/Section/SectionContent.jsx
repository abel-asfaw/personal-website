import classNames from 'classnames';

export default function SectionContent({ className, children, ...rest }) {
    const classes = classNames(
        'mx-5 flex items-center md:mx-20 xl:mx-40 2xl:mx-80',
        className
    );
    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
}
