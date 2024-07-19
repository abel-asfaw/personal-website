import { useState } from 'react';
import { LinkButton, PillButton } from '../Button';
import { FaGithub, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

interface OverlayCardProps {
    link: string;
    image: string;
    title: string;
    description: string;
    tags: string[];
}

export default function OverlayCard({
    link,
    image,
    title,
    description,
    tags,
}: OverlayCardProps) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="max-w-sm overflow-hidden rounded-lg border-[1px] border-zinc-850 bg-zinc-900 shadow-lg">
            <a
                href={link}
                className="relative flex h-1/2 overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="h-auto w-full" src={image} alt={title} />
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-zinc-900 opacity-0 transition duration-300 ease-in hover:opacity-80">
                    Learn more&nbsp;
                    <FiExternalLink size={18} />
                </div>
            </a>
            <div className="flex flex-col gap-3 px-6 py-4">
                <div className="text-lg font-medium">{title}</div>
                <div className="flex justify-between">
                    <LinkButton
                        key={link}
                        className="inline-flex text-left text-neutral-400 hover:text-white"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={24} />
                    </LinkButton>
                    <button
                        className="text-right"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? (
                            <FaAngleUp size={24} />
                        ) : (
                            <FaAngleDown size={24} />
                        )}
                    </button>
                </div>
                <p className="classes leading-relaxed">
                    {showMore
                        ? description
                        : description.substring(0, 100) + '...'}
                </p>
                {showMore && (
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
                )}
            </div>
        </div>
    );
}
