import { About } from './About';
import { RevealOnScroll } from './common/Effects';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Skills } from './Skills';

export function MainContent() {
  return (
    <main className="wrapper flex flex-col gap-20 sm:gap-32">
      <About id="about" />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}
