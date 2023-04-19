import LinkButton from './common/LinkButton';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-10 bg-gray-925/80 backdrop-blur drop-shadow-sm p-4">
            <div className="container mx-auto flex flex-col font-cubano">
                <nav className="flex flex-wrap justify-center gap-2 sm:gap-10">
                    <LinkButton navButton href="#about">
                        About
                    </LinkButton>
                    <LinkButton navButton href="#experience">
                        Experience
                    </LinkButton>
                    <LinkButton navButton href="#projects">
                        Projects
                    </LinkButton>
                    <LinkButton navButton href="#skills">
                        Skills
                    </LinkButton>
                </nav>
            </div>
        </header>
    );
}
