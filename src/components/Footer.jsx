import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="m-4 rounded-lg bg-gray-800">
            <div className="container mx-auto flex w-full flex-col items-center justify-center p-6 xs:flex-row xs:justify-between">
                <span className="items-center text-center text-sm text-gray-400">
                    © 2023 Abel Asfaw.
                </span>
                <ul className="mt-2 flex flex-wrap items-center text-sm xs:mt-0">
                    <li>
                        <a
                            href="https://github.com/abel-asfaw/"
                            target="_blank"
                            title="GitHub"
                        >
                            <FaGithub className="mr-4 h-6 w-6 duration-200 ease-in hover:text-white md:mr-6 " />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/abelasfaw/"
                            target="_blank"
                            title="LinkedIn"
                        >
                            <FaLinkedinIn className="mr-4 h-6 w-6 duration-200 ease-in hover:text-white md:mr-6 " />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/other.abel/"
                            target="_blank"
                            title="Instagram"
                        >
                            <FaInstagram className="h-6 w-6 duration-200 ease-in hover:text-white" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
