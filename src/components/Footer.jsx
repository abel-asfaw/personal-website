import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    const classes = 'duration-200 ease-in hover:text-white';

    return (
        <footer className="mt-10 border-t border-gray-800">
            <div className="container mx-auto flex w-full flex-col items-center justify-center p-6 xs:flex-row xs:justify-between">
                © 2023 Abel Asfaw
                <ul className="mt-2 flex flex-wrap gap-6 xs:mt-0">
                    <li>
                        <a
                            href="https://github.com/abel-asfaw/"
                            target="_blank"
                            title="GitHub"
                        >
                            <FaGithub size={24} className={classes} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/abelasfaw/"
                            target="_blank"
                            title="LinkedIn"
                        >
                            <FaLinkedinIn size={24} className={classes} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
