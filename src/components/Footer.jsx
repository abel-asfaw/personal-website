import { LinkButton } from './common/Button';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="mt-10 border-t border-zinc-900">
            <div className="container mx-auto flex w-full flex-col items-center justify-center p-6 text-zinc-400 xs:flex-row xs:justify-between">
                © 2023 Abel Asfaw
                <div className="mt-2 flex flex-wrap gap-6 xs:mt-0">
                    <LinkButton
                        href="https://github.com/abel-asfaw/"
                        target="_blank"
                    >
                        <FaGithub size={24} title="LinkedIn" />
                    </LinkButton>
                    <LinkButton
                        href="https://linkedin.com/in/abelasfaw/"
                        target="_blank"
                    >
                        <FaLinkedinIn size={24} title="GitHub" />
                    </LinkButton>
                </div>
            </div>
        </footer>
    );
}
