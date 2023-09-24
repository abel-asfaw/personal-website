export default function TileLayout({ icon: Icon, label, className }) {
    return (
        <div className="flex h-full w-full items-center gap-3 rounded bg-zinc-900 py-4 px-3 xs:w-40">
            <Icon className="flex shrink-0 text-green-400" size={24} />
            <span className={className}>{label}</span>
        </div>
    );
}
