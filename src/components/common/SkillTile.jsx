export default function SkillTile({ skill, icon }) {
    return (
        <div className="w-full p-2 xs:w-1/2 md:w-1/4">
            <div className="flex h-full items-center gap-4 rounded bg-zinc-900 p-4">
                <span className="[&>*]:h-6 [&>*]:w-6 [&>*]:text-green-400">
                    {icon}
                </span>
                <span className="font-medium text-white">{skill}</span>
            </div>
        </div>
    );
}
