import { ChevronsDown, Mail } from 'react-feather';

import { useQuery } from '@tanstack/react-query';

import { client } from '../contentful';
import { TypeAboutMe } from '../contentful/types';
import { LinkButton } from './common/Button';

interface AboutProps {
  id: string;
}

export function About({ id }: AboutProps) {
  const { data: aboutMe } = useQuery<TypeAboutMe>({
    queryKey: ['about-me'],
    queryFn: () =>
      client.getEntries({
        content_type: 'aboutMe',
        locale: 'en-US',
      }),
  });

  const aboutMeFields = aboutMe?.items[0].fields;

  return (
    <section
      id={id}
      className="flex flex-col items-center justify-center gap-6 text-center"
    >
      <div className="relative h-auto w-64 after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-px after:h-20 after:bg-gradient-to-t after:to-transparent after:content-[''] sm:w-72 sm:after:from-[#09080F]">
        <img src="/assets/images/me.png" alt="Portrait of Abel" />
      </div>
      <h1 className="font-russisch -mb-1 text-3xl font-bold text-neutral-100 sm:text-4xl">
        {aboutMeFields?.intro}{' '}
        <span className="animate-wave bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          {aboutMeFields?.tagLine}
        </span>
      </h1>
      <p className="w-full leading-relaxed sm:w-10/12">{aboutMeFields?.bio}</p>
      <div className="font-russisch flex gap-4 text-center font-bold transition-all">
        <LinkButton
          href="#projects"
          className="drop-shadow-md/25 bg-green-600 text-white hover:bg-green-700"
          promptButton
        >
          See my work
          <ChevronsDown
            className="animate-bouncy shrink-0 will-change-transform"
            size={16}
          />
        </LinkButton>
        <LinkButton
          href="mailto:contact@abelasfaw.com"
          className="drop-shadow-md/25 border-[.5px] border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:text-white"
          promptButton
          target="_blank"
          rel="noopener noreferrer"
        >
          Reach out
          <Mail className="shrink-0" size={16} />
        </LinkButton>
      </div>
    </section>
  );
}
