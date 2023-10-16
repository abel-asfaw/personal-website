import { LinkButton } from './common/Button';
import { Underline } from './common/Effects';

export default function Navbar() {
    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
    ];

    return (
        <header className="sticky top-0 z-10 bg-zinc-950/70 p-4 shadow-sm shadow-zinc-950 backdrop-blur">
            <nav className="flex flex-wrap justify-center gap-4 font-russisch font-bold sm:gap-20">
                {navItems.map((item) => (
                    <LinkButton
                        key={item.label}
                        href={item.href}
                        className="group"
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
