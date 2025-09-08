import { projects, skills } from '../data';
import About from './About';
import { OverlayCard, TileCard } from './common/Card';
import { RevealOnScroll } from './common/Effects';
import { Section } from './common/Section';
import { Experience } from './Experience';

export default function MainContent() {
  return (
    <main className="flex flex-col gap-20 sm:gap-32">
      <RevealOnScroll>
        <About id="about" />
      </RevealOnScroll>
      <RevealOnScroll key={'experience'}>
        <Experience />
      </RevealOnScroll>
      <RevealOnScroll key={'projects'}>
        <Section id={'projects'} title={"Apps I've Built"} className={'gap-4'}>
          {projects.map(project => (
            <OverlayCard
              key={project.link}
              tags={project.skills}
              {...project}
            />
          ))}
        </Section>
      </RevealOnScroll>
      <RevealOnScroll key={'skills'}>
        <Section id={'skills'} title={'What I Can Do'} className={'gap-4'}>
          {Object.entries(skills).map(([label, icon]) => (
            <TileCard
              key={label}
              icon={icon}
              label={label}
              className="font-roboto"
            />
          ))}
        </Section>
      </RevealOnScroll>
    </main>
  );
}
