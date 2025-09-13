import { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import { LinkButton, PillButton } from '../Button';

interface OverlayCardProps {
  link: string;
  imageUrl: string;
  title: string;
  description: string;
  tags: string[] | undefined;
}

export default function OverlayCard({
  link,
  imageUrl,
  title,
  description,
  tags,
}: OverlayCardProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-sm overflow-hidden rounded-lg border-[.5px] border-zinc-800 bg-zinc-900 shadow-lg">
      <a
        href={link}
        className="relative flex h-1/2 overflow-hidden"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="h-auto w-full" src={imageUrl} alt={title} />
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
          <button className="text-right" onClick={() => setShowMore(!showMore)}>
            {showMore ? <FaAngleUp size={24} /> : <FaAngleDown size={24} />}
          </button>
        </div>
        <p className="classes leading-relaxed">
          {showMore ? description : description.substring(0, 100) + '...'}
        </p>
        {showMore && tags && (
          <span className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <PillButton
                key={tag}
                className="font-roboto bg-indigo-600 text-white"
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
