import Button from './common/Button';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-10 bg-gray-925 p-2">
            <div className="container mx-auto flex flex-col font-cubano">
                <nav className="flex flex-wrap justify-center gap-2 sm:gap-10">
                    <Button navButton href="#about">
                        About
                    </Button>
                    <Button navButton href="#experience">
                        Experience
                    </Button>
                    <Button navButton href="#projects">
                        Projects
                    </Button>
                    <Button navButton href="#skills">
                        Skills
                    </Button>
                </nav>
            </div>
        </header>
    );
}
