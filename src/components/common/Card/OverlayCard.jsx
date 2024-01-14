import { PillButton } from '../Button';
import { Underline } from '../Effects';
import { FiExternalLink } from 'react-icons/fi';

export default function OverlayCard({ link, image, title, description, tags }) {
    return (
        <div className="max-w-sm overflow-hidden rounded-lg border-2 border-zinc-900 bg-zinc-900 shadow-lg">
            <a
                href={link}
                className="relative flex h-1/2 overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="h-auto w-full" src={image} alt={title} />
                <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-zinc-900 opacity-0 transition duration-300 ease-in hover:opacity-80 sm:flex">
                    Learn more&nbsp;
                    <FiExternalLink size={18} />
                </div>
            </a>
            <div className="flex flex-col gap-3 px-6 py-4">
                <div className="text-lg font-medium">{title}</div>
                <p className="leading-relaxed text-neutral-300">
                    {description}
                </p>
                <span className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <PillButton
                            key={tag}
                            className="bg-indigo-600 font-roboto text-white"
                        >
                            {tag}
                        </PillButton>
                    ))}
                </span>
                <div className="flex justify-end sm:hidden">
                    <a
                        href={link}
                        className="group w-fit font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn more
                        <Underline />
                    </a>
                </div>
            </div>
        </div>
    );
}
