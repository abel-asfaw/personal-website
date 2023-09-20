import {
    HiOutlineOfficeBuilding,
    HiCode,
    HiOutlineChip,
    HiOutlineUserCircle,
} from 'react-icons/hi';

export default function SectionHeader({ id, title, blurb }) {
    const icons = {
        experience: <HiOutlineOfficeBuilding />,
        projects: <HiCode />,
        skills: <HiOutlineChip />,
        contact: <HiOutlineUserCircle />,
    };

    return (
        <section
            id={id}
            className="mx-5 flex flex-col gap-2 text-center md:mx-20 xl:mx-40 2xl:mx-80"
        >
            <div className="flex justify-center text-zinc-400 [&>*]:h-10 [&>*]:w-10">
                {icons[id]}
            </div>
            <h1 className="font-cubano text-3xl">{title}</h1>
            <span className="leading-relaxed">{blurb}</span>
        </section>
    );
}
