import About from './components/About';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
