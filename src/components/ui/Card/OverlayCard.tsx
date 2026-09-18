import * as stylex from '@stylexjs/stylex';
import { ReactNode, useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

import { LinkButton, PillButton } from '../Button';
import { motion } from 'motion/react';
import { overlayCard } from './OverlayCard.styles';

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
    <div {...stylex.props(overlayCard.root)}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        {...stylex.props(overlayCard.imageLink)}
      >
        <img
          src={`${imageUrl}?w=800&q=80`}
          alt={title}
          width={800}
          height={500}
          loading="lazy"
          {...stylex.props(overlayCard.image)}
        />
        <div {...stylex.props(overlayCard.overlay)}>
          <ExternalLink />
        </div>
      </a>
      <div {...stylex.props(overlayCard.body)}>
        <h3 {...stylex.props(overlayCard.title)}>{title}</h3>
        <div {...stylex.props(overlayCard.actions)}>
          <div {...stylex.props(overlayCard.links)}>
            {links?.map(({ href, icon }) => (
              <LinkButton
                key={href}
                style={overlayCard.link}
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
            onClick={() => setShowMore(!showMore)}
            aria-label={showMore ? 'Show less' : 'Show more'}
            {...stylex.props(overlayCard.toggle)}
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
          transition={animationDuration}
          {...stylex.props(!showMore && overlayCard.collapsed)}
        >
          <p {...stylex.props(overlayCard.description)}>{description}</p>
          {tags && (
            <ul {...stylex.props(overlayCard.tags)}>
              {tags.map(tag => (
                <li key={tag}>
                  <PillButton>{tag}</PillButton>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </div>
  );
}
