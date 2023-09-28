import classNames from 'classnames';

export default function SectionContent({ className, children, ...rest }) {
    const classes = classNames(
        'flex flex-wrap justify-center items-center',
        className
    );

    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
}
