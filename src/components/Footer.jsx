import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import LinkButton from './common/LinkButton';

export default function Footer() {
    return (
        <footer className="mt-10 border-t border-gray-800">
            <div className="container mx-auto flex w-full flex-col items-center justify-center p-6 xs:flex-row xs:justify-between">
                © 2023 Abel Asfaw
                <div className="mt-2 flex flex-wrap gap-6 xs:mt-0 text-gray-400">
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
