import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
    return (
        <main className="font-anuphan text-gray-300">
            <Navbar />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Footer />
        </main>
    );
}
