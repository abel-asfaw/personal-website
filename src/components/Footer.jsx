import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    const classes = 'h-6 w-6 duration-200 ease-in hover:text-white';

    return (
        <footer className="bg-gray-800">
            <div className="container mx-auto flex w-full flex-col items-center justify-center p-6 xs:flex-row xs:justify-between">
                © 2023 Abel Asfaw
                <ul className="mt-2 flex flex-wrap gap-6 xs:mt-0">
                    <li>
                        <a
                            href="https://github.com/abel-asfaw/"
                            target="_blank"
                            title="GitHub"
                        >
                            <FaGithub className={classes} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/abelasfaw/"
                            target="_blank"
                            title="LinkedIn"
                        >
                            <FaLinkedinIn className={classes} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
