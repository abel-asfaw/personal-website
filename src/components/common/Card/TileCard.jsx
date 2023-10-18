import classNames from 'classnames';

export default function TileCard({ icon: Icon, label, className }) {
    const classes = classNames(
        'flex h-full w-full flex-col items-center gap-2 rounded bg-zinc-900 p-3 xs:w-40',
        'cursor-default duration-500 will-change-transform hover:scale-[1.07] hover:bg-zinc-800',
        className
    );

    return (
        <div className={classes}>
            <Icon className="shrink-0 text-green-400" size={24} />
            <span>{label}</span>
        </div>
    );
}
