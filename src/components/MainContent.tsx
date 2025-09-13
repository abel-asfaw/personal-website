import { skills } from '../data';
import { About } from './About';
import { TileCard } from './common/Card';
import { RevealOnScroll } from './common/Effects';
import { Section } from './common/Section';
import { Experience } from './Experience';
import { Projects } from './Projects';

export function MainContent() {
  return (
    <main className="wrapper flex flex-col gap-20 sm:gap-32">
      <RevealOnScroll>
        <About id="about" />
      </RevealOnScroll>
      <RevealOnScroll key={'experience'}>
        <Experience />
      </RevealOnScroll>
      <RevealOnScroll key={'projects'}>
        <Projects />
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
