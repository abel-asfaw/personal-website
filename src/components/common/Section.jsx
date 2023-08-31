import {
    HiOutlineOfficeBuilding,
    HiCode,
    HiOutlineChip,
    HiOutlineUserCircle,
} from 'react-icons/hi';

export default function Section({ id, title, blurb, children }) {
    const icons = {
        experience: <HiOutlineOfficeBuilding />,
        projects: <HiCode />,
        skills: <HiOutlineChip />,
        contact: <HiOutlineUserCircle />,
    };

    return (
        <section id={id}>
            <div className="container mx-auto px-5 py-10">
                <div className="mb-10 flex w-full flex-col gap-4 text-center">
                    <span className="text-zinc-400 [&>*]:mx-auto [&>*]:inline-block [&>*]:h-10 [&>*]:w-10">
                        {icons[id]}
                    </span>
                    <h1 className="font-cubano text-3xl sm:text-4xl">
                        {title}
                    </h1>
                    <span className="mx-auto leading-relaxed lg:w-3/4 xl:w-2/3">
                        {blurb}
                    </span>
                </div>
                {children}
            </div>
        </section>
    );
}
