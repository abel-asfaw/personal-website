import { LinkButton } from './common/Button';

export default function Navbar() {
    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
    ];

    return (
        <header className="sticky top-0 z-10 bg-zinc-950/70 p-4 shadow-sm shadow-zinc-950 backdrop-blur">
            <div className="container mx-auto flex flex-col font-cubano">
                <nav className="flex flex-wrap justify-center gap-2 sm:gap-10">
                    {navItems.map((item) => (
                        <LinkButton
                            className="text-lg text-neutral-400 hover:text-white"
                            key={item.label}
                            href={item.href}
                            navButton
                        >
                            {item.label}
                        </LinkButton>
                    ))}
                </nav>
            </div>
        </header>
    );
}
