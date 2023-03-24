import About from './components/content/About';
import Navbar from './components/layout/NavBar';
import Projects from './components/content/Projects';
import Experience from './components/content/Experience';
import Skills from './components/content/Skills';
import Contact from './components/content/Contact';
import Footer from './components/layout/Footer';

export default function App() {
    return (
        <main className="bg-gray-950 text-gray-400">
            <Navbar />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </main>
    );
}
