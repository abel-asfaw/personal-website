import { LinkButton } from './common/Button';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-10 bg-zinc-950/70 p-4 shadow-sm shadow-zinc-950 backdrop-blur">
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
