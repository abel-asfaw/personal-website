import { About } from './components/About';
import { Experience } from './components/Experience';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <div className="font-dmsans flex flex-col gap-12 text-neutral-200 sm:gap-16">
      <Navbar />
      <main className="wrapper flex flex-col gap-20 sm:gap-32">
        <About id="about" />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
