import * as stylex from '@stylexjs/stylex';

import { About } from './components/About';
import { Experience } from './components/Experience';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { useContentfulData } from './contentful';
import { app } from './App.styles';

export default function App() {
  const {
    data: { aboutMe, experienceSection, projectsSection, skillsSection },
    isPending,
  } = useContentfulData();

  return (
    <div {...stylex.props(app.root)}>
      <Navbar />
      <main {...stylex.props(app.main)}>
        {isPending ? (
          <div {...stylex.props(app.loading)}>Loading...</div>
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
