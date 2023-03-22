import {
    DiJava,
    DiJavascript,
    DiPython,
    DiHtml5,
    DiCss3,
    DiPostgresql,
    DiReact,
    DiGit,
} from 'react-icons/di';
import { SiGraphql, SiCplusplus } from 'react-icons/si';

const ICON_CLASSES = 'text-green-400 w-6 h-6 flex-shrink-0 mr-4';

export const projects = [
    {
        title: 'Project 1',
        subtitle: 'Stack 1',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: '/assets/images/project-1.avif',
        link: 'https://github.com/abel-asfaw/',
    },
    {
        title: 'Project 2',
        subtitle: 'Stack 2',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: '/assets/images/project-2.avif',
        link: 'https://github.com/abel-asfaw/',
    },
    {
        title: 'Project 3',
        subtitle: 'Stack 3',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: '/assets/images/project-3.avif',
        link: 'https://github.com/abel-asfaw/',
    },
    {
        title: 'Project 4',
        subtitle: 'Stack 4',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: '/assets/images/project-4.avif',
        link: 'https://github.com/abel-asfaw/',
    },
];

export const skills = {
    Python: <DiPython className={ICON_CLASSES} />,
    Java: <DiJava className={ICON_CLASSES} />,
    'C++': <SiCplusplus className={ICON_CLASSES} />,
    JavaScript: <DiJavascript className={ICON_CLASSES} />,
    React: <DiReact className={ICON_CLASSES} />,
    HTML: <DiHtml5 className={ICON_CLASSES} />,
    CSS: <DiCss3 className={ICON_CLASSES} />,
    Postgres: <DiPostgresql className={ICON_CLASSES} />,
    GraphQL: <SiGraphql className={ICON_CLASSES} />,
    Git: <DiGit className={ICON_CLASSES} />,
};
