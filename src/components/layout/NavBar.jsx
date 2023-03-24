import { HiArrowLongRight } from 'react-icons/hi2';
import NavButton from '../common/NavButton';

export default function Navbar() {
    return (
        <header className="top-0 z-10 bg-gray-800 p-3 drop-shadow-xl sm:sticky sm:p-5">
            <div className="container mx-auto flex flex-col items-center justify-between font-cubano sm:flex-row">
                <nav className="p-1 text-2xl text-white">
                    <a href="#about">Abel Asfaw</a>
                </nav>
                <nav className="flex gap-2 sm:mr-auto sm:ml-4 sm:border-l sm:border-gray-700 sm:p-0 sm:pl-4">
                    <NavButton href="#experience">Experience</NavButton>
                    <NavButton href="#projects">Projects</NavButton>
                    <NavButton href="#skills">Skills</NavButton>
                </nav>
            </div>
        </header>
    );
}
