export default function TileLayout({ label, icon }) {
    return (
        <div className="flex h-full w-full items-center gap-4 rounded bg-zinc-900 p-4 xs:w-40">
            <span className="[&>*]:h-6 [&>*]:w-6 [&>*]:text-green-400">
                {icon}
            </span>
            <span className="font-medium text-white">{label}</span>
        </div>
    );
}
