import { Icon } from '../Icon';

export default function TileLayout({ label, icon }) {
    return (
        <div className="flex h-full w-full items-center gap-4 rounded bg-zinc-900 p-4 xs:w-40">
            <Icon icon={icon} className="text-green-400" size={24} />
            <span className="font-medium text-white">{label}</span>
        </div>
    );
}
