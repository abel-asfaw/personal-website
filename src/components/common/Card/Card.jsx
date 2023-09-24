export default function Card({ link, image, title, subTitle, description }) {
    return (
        <a
            href={link}
            className="relative h-96 w-96 overflow-hidden rounded-md"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                className="absolute h-full w-full rounded-md border-4 border-zinc-800 object-cover object-center"
                src={image}
            />
            <div className="relative flex h-full w-full flex-col justify-center bg-zinc-900 p-8 text-center opacity-70 transition duration-300 ease-in hover:opacity-100">
                <h1 className="mb-1 text-lg font-medium">{title}</h1>
                <h2 className="mb-3 text-sm font-medium font-roboto tracking-widest text-green-400">
                    {subTitle}
                </h2>
                <span className="leading-relaxed">{description}</span>
            </div>
        </a>
    );
}
