import * as stylex from '@stylexjs/stylex';
import { ChevronsDown, Mail } from 'lucide-react';

import type { ContentfulData } from '../contentful';
import { LinkButton } from './ui/Button';
import { about } from './About.styles';

interface AboutProps {
  aboutMe: ContentfulData['aboutMe'];
}

export function About({ aboutMe }: AboutProps) {
  if (!aboutMe) {
    return null;
  }

  const rawImageUrl = aboutMe.photo?.fields.file?.url;
  const imageUrl = rawImageUrl ? `${rawImageUrl}?fm=webp` : undefined;

  return (
    <section id="about" {...stylex.props(about.root)}>
      <div {...stylex.props(about.portrait)}>
        <img
          src={imageUrl}
          alt="Portrait of Abel"
          width={800}
          height={800}
          fetchPriority="high"
        />
      </div>
      <h1 {...stylex.props(about.heading)}>
        {aboutMe.intro}{' '}
        <span {...stylex.props(about.tagline)}>{aboutMe.tagLine}</span>
      </h1>
      <p {...stylex.props(about.bio)}>{aboutMe.bio}</p>
      <div {...stylex.props(about.ctaRow)}>
        <LinkButton href="#projects" style={about.primaryCta} promptButton>
          See my work
          <ChevronsDown size={16} {...stylex.props(about.chevron)} />
        </LinkButton>
        <LinkButton
          href="mailto:contact@abelasfaw.com"
          style={about.secondaryCta}
          promptButton
          target="_blank"
          rel="noopener noreferrer"
        >
          Reach out
          <Mail size={16} {...stylex.props(about.mailIcon)} />
        </LinkButton>
      </div>
    </section>
  );
}
