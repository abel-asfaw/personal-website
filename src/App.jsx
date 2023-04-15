import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
    return (
        <main className="font-anuphan text-gray-400">
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
