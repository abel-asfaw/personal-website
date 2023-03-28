import {
    DiJava,
    DiJavascript,
    DiPython,
    DiHtml5,
    DiCss3,
    DiReact,
} from 'react-icons/di';
import { SiGraphql, SiCplusplus, SiPostgresql } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';

const ICON_CLASSES = 'text-green-400 w-6 h-6';

export const skills = {
    Python: <DiPython className={ICON_CLASSES} />,
    Java: <DiJava className={ICON_CLASSES} />,
    'C++': <SiCplusplus className={ICON_CLASSES} />,
    JavaScript: <DiJavascript className={ICON_CLASSES} />,
    React: <DiReact className={ICON_CLASSES} />,
    HTML: <DiHtml5 className={ICON_CLASSES} />,
    CSS: <DiCss3 className={ICON_CLASSES} />,
    Postgres: <SiPostgresql className={ICON_CLASSES} />,
    GraphQL: <SiGraphql className={ICON_CLASSES} />,
    Git: <FaGitAlt className={ICON_CLASSES} />,
};
