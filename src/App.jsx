import About from './components/About';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/NavBar';

export default function App() {
    return (
        <main className="font-inter text-neutral-200">
            <Navbar />
            <About />
            <MainContent />
            <Footer />
        </main>
    );
}
