import { LinkButton } from './common/Button';
import { Underline } from './common/Decorator';

export default function Navbar() {
    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
    ];

    return (
        <header className="sticky top-0 z-10 bg-zinc-950/70 p-4 shadow-sm shadow-zinc-950 backdrop-blur">
            <nav className="flex flex-wrap justify-center gap-2 font-cubano sm:gap-16">
                {navItems.map((item) => (
                    <LinkButton
                        key={item.label}
                        href={item.href}
                        className="group text-lg"
                        navButton
                    >
                        {item.label}
                        <Underline />
                    </LinkButton>
                ))}
            </nav>
        </header>
    );
}
