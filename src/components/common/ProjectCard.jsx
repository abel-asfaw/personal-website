export default function ProjectCard({
    link,
    image,
    title,
    stack,
    description,
}) {
    return (
        <a
            href={link}
            className="w-100 p-4 sm:w-1/2"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="relative flex h-full overflow-hidden rounded-md">
                <img
                    alt="gallery"
                    className="absolute inset-0 h-full w-full rounded-md object-cover object-center"
                    src={image}
                />
                <div className="z-9 relative w-full rounded-md border-4 border-zinc-800 bg-zinc-900 px-8 py-10 opacity-70 duration-200 ease-in hover:opacity-100">
                    <h1 className="mb-1 text-lg font-medium">{title}</h1>
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-green-400">
                        {stack}
                    </h2>
                    <span className="leading-relaxed">{description}</span>
                </div>
            </div>
        </a>
    );
}
