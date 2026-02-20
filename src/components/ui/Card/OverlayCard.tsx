import { ReactNode, useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

import { LinkButton, PillButton } from '../Button';
import { motion } from 'motion/react';

interface CardLink {
  href: string;
  icon: ReactNode;
}

interface OverlayCardProps {
  link: string;
  imageUrl: string;
  title: string;
  description: string;
  tags?: string[];
  links?: CardLink[];
}

const animationDuration = {
  duration: 0.4,
};

export default function OverlayCard({
  link,
  imageUrl,
  title,
  description,
  tags,
  links,
}: OverlayCardProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="drop-shadow-md/25 max-w-sm overflow-hidden rounded-lg border-[.5px] border-zinc-800 bg-zinc-900">
      <a
        href={link}
        className="relative flex h-1/2 overflow-hidden"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-auto w-full"
          src={`${imageUrl}?w=800&q=80`}
          alt={title}
          width={800}
          height={500}
          loading="lazy"
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-zinc-900 opacity-0 transition duration-300 ease-in hover:opacity-80">
          <ExternalLink />
        </div>
      </a>
      <div className="flex flex-col gap-3 px-6 py-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="flex justify-between">
          <div className="flex gap-3">
            {links?.map(({ href, icon }) => (
              <LinkButton
                key={href}
                className="inline-flex text-left text-neutral-400 hover:text-white"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  href.includes('github')
                    ? 'GitHub repository'
                    : 'External link'
                }
              >
                {icon}
              </LinkButton>
            ))}
          </div>
          <button
            className="text-right hover:cursor-pointer"
            onClick={() => setShowMore(!showMore)}
            aria-label={showMore ? 'Show less' : 'Show more'}
          >
            <motion.div
              animate={{ rotate: showMore ? 180 : 0 }}
              transition={animationDuration}
            >
              <ChevronDown size={24} />
            </motion.div>
          </button>
        </div>
        <motion.div
          initial={false}
          animate={{ height: showMore ? 'auto' : '3.5rem' }}
          className={showMore ? '' : 'overflow-hidden'}
          transition={animationDuration}
        >
          <p className="leading-relaxed">{description}</p>
          {tags && (
            <ul className="flex list-none flex-wrap gap-2 pt-3">
              {tags.map(tag => (
                <li key={tag}>
                  <PillButton className="font-roboto hover:scale-107 duration-400 bg-indigo-600 text-white ease-in-out">
                    {tag}
                  </PillButton>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </div>
  );
}
