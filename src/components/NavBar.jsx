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
        <header
            className={
                'full-bleed sticky top-0 z-10 bg-zinc-950/70 py-4 shadow-sm shadow-zinc-950 backdrop-blur'
            }
        >
            <nav className="flex flex-wrap justify-around font-russisch font-bold">
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
