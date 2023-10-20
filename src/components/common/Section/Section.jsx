import classNames from 'classnames';

export default function Section({ id, title, className, children }) {
    const classes = classNames(
        'flex flex-wrap justify-center items-center',
        className
    );

    return (
        <section id={id} className="flex flex-col gap-6">
            <h1 className="text-center font-russisch text-3xl font-bold text-neutral-100">
                {title}
            </h1>
            <div className={classes}>{children}</div>
        </section>
    );
}
