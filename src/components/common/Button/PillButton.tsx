import classNames from 'classnames';

interface PillButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export default function PillButton({
    children,
    className,
    ...props
}: PillButtonProps) {
    const transition = 'duration-300 ease-in';

    const classes = classNames(
        transition,
        'rounded-full px-3 py-1.5 text-sm',
        className,
    );

    return (
        <button {...props} role="button" className={classes}>
            {children}
        </button>
    );
}
