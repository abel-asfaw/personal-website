import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/NavBar';

export default function App() {
    return (
        <div className="font-inter flex flex-col gap-12 text-neutral-200">
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    );
}
