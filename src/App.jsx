import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <main className="bg-gray-900 text-gray-400">
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </main>
    );
}
