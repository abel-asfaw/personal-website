import { About } from './components/About';
import { Experience } from './components/Experience';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { useContentfulData } from './contentful';

export default function App() {
  const { aboutMe, experienceSection, projectsSection, skillsSection } =
    useContentfulData();

  return (
    <div className="font-dmsans flex flex-col gap-12 text-neutral-200 sm:gap-16">
      <Navbar />
      <main className="wrapper flex flex-col gap-20 sm:gap-32">
        <About aboutMe={aboutMe} />
        <Experience experienceSection={experienceSection} />
        <Projects projectsSection={projectsSection} />
        <Skills skillsSection={skillsSection} />
      </main>
      <Footer />
    </div>
  );
}
