import { About } from './components/About';
import { Experience } from './components/Experience';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { useContentfulData } from './contentful';

export default function App() {
  const {
    data: { aboutMe, experienceSection, projectsSection, skillsSection },
    isPending,
  } = useContentfulData();

  return (
    <div className="font-dmsans grid min-h-screen grid-rows-[auto_1fr_auto] gap-12 text-neutral-200 sm:gap-16">
      <Navbar />
      <main className="wrapper gap-20 sm:gap-32">
        {isPending ? (
          <div className="place-self-center">Loading...</div>
        ) : (
          <>
            <About aboutMe={aboutMe} />
            <Experience experienceSection={experienceSection} />
            <Projects projectsSection={projectsSection} />
            <Skills skillsSection={skillsSection} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
