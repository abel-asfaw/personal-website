import {
    HiOutlineOfficeBuilding,
    HiCode,
    HiOutlineChip,
    HiOutlineUserCircle,
} from 'react-icons/hi';

export default function SectionHeader({ id, title, blurb }) {
    const icons = {
        experience: HiOutlineOfficeBuilding,
        projects: HiCode,
        skills: HiOutlineChip,
        contact: HiOutlineUserCircle,
    };

    const Icon = icons[id];

    return (
        <header className="flex flex-col gap-2 text-center">
            <Icon size={40} className="self-center text-neutral-400" />
            <h1 className="font-cubano text-3xl text-neutral-100">{title}</h1>
            <p className="leading-relaxed">{blurb}</p>
        </header>
    );
}
