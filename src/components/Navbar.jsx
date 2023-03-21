import { HiArrowLongRight } from 'react-icons/hi2';

export default function Navbar() {
    return (
        <header className="top-0 z-10 bg-gray-800 drop-shadow-xl sm:sticky">
            <div className="container mx-auto flex flex-col flex-wrap items-center justify-between p-5 font-cubano sm:flex-row">
                <nav className="mb-4 text-white sm:mb-0">
                    <a
                        href="#about"
                        className="ml-0 text-xl duration-200 ease-in sm:ml-3"
                    >
                        Abel Asfaw
                    </a>
                </nav>
                <nav className="flex flex-wrap items-center justify-center text-base sm:mr-auto sm:ml-4 sm:border-l sm:border-gray-700 sm:py-1 sm:pl-4">
                    <a
                        href="#projects"
                        className="mr-2 duration-200 ease-in hover:text-white"
                    >
                        Projects
                    </a>
                    <a
                        href="#skills"
                        className="ml-2 duration-200 ease-in hover:text-white"
                    >
                        Skills
                    </a>
                </nav>
                <nav>
                    <a
                        href="#contact"
                        className="mt-2.5 inline-flex items-center rounded border-0 bg-gray-800 py-1 px-3 text-base duration-200 ease-in hover:bg-gray-700 focus:outline-none sm:mt-0"
                    >
                        Reach Out
                        <HiArrowLongRight className="ml-1 hidden h-4 w-4 sm:block" />
                    </a>
                </nav>
            </div>
        </header>
    );
}
