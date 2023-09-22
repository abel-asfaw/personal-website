import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/NavBar';

export default function App() {
    return (
        <main className="flex flex-col gap-12 font-inter text-neutral-200">
            <Navbar />
            <MainContent />
            <Footer />
        </main>
    );
}
