export default function SectionHeader({ title, blurb }) {
    return (
        <header className="flex flex-col gap-2 text-center">
            <h1 className="font-cubano text-3xl text-neutral-100">
                {title}
            </h1>
            <p className="leading-relaxed">{blurb}</p>
        </header>
    );
}
