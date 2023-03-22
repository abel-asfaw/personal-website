import About from './components/content/About';
import Navbar from './components/layout/NavBar';
import Projects from './components/content/Projects';
import Skills from './components/content/Skills';
import Contact from './components/content/Contact';
import Footer from './components/layout/Footer';

export default function App() {
    return (
        <main className="bg-gray-900 text-gray-400">
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
