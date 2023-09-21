export default function TileLayout({ icon: Icon, label }) {
    return (
        <div className="flex h-full w-full items-center gap-4 rounded bg-zinc-900 p-4 xs:w-40">
            <Icon className="text-green-400" size={24} />
            <span className="font-medium">{label}</span>
        </div>
    );
}
