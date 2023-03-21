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

export const projects = [
    {
        title: 'Project 1',
        subtitle: 'Stack 1',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: '/images/project-1.avif',
        link: 'https://github.com/abel-asfaw/',
    },
    {
        title: 'Project 2',
        subtitle: 'Stack 2',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: '/images/project-2.avif',
        link: 'https://github.com/abel-asfaw/',
    },
    {
        title: 'Project 3',
        subtitle: 'Stack 3',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: '/images/project-3.avif',
        link: 'https://github.com/abel-asfaw/',
    },
    {
        title: 'Project 4',
        subtitle: 'Stack 4',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: '/images/project-4.avif',
        link: 'https://github.com/abel-asfaw/',
    },
];

const iconClasses = 'text-green-400 w-6 h-6 flex-shrink-0 mr-4';
export const skills = {
    Python: <DiPython className={iconClasses} />,
    Java: <DiJava className={iconClasses} />,
    'C++': <SiCplusplus className={iconClasses} />,
    JavaScript: <DiJavascript className={iconClasses} />,
    React: <DiReact className={iconClasses} />,
    HTML: <DiHtml5 className={iconClasses} />,
    CSS: <DiCss3 className={iconClasses} />,
    Postgres: <DiPostgresql className={iconClasses} />,
    GraphQL: <SiGraphql className={iconClasses} />,
    Git: <DiGit className={iconClasses} />,
};
