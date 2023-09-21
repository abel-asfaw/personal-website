import classNames from 'classnames';

export default function SectionContent({ className, children, ...rest }) {
    const classes = classNames(
        'mx-5 flex flex-wrap justify-center items-center md:mx-20 xl:mx-40 2xl:mx-80 mb-16',
        className
    );

    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
}
