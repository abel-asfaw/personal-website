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

const ICON_CLASSES = 'text-green-400 w-6 h-6 flex-shrink-0';

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
    Postgres: <SiPostgresql className={ICON_CLASSES} />,
    GraphQL: <SiGraphql className={ICON_CLASSES} />,
    Git: <FaGitAlt className={ICON_CLASSES} />,
};

export const experience = [
    {
        title: 'Software Engineer @ Lockheed Martin',
        date: 'Apr. 2023 - Present',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Nisi sit ipsa delectus eum quo voluptas aspernatur accusantium distinctio possimus est.',
    },
    {
        title: 'Software Developer @ Redfin',
        date: 'Jan. 2022 - Nov. 2022',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Nisi sit ipsa delectus eum quo voluptas aspernatur accusantium distinctio possimus est.',
    },
    {
        title: 'Teaching Assistant @ UMBC',
        date: 'Aug. 2020 - Jan. 2022',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Nisi sit ipsa delectus eum quo voluptas aspernatur accusantium distinctio possimus est.',
    },
    {
        title: 'Computer Science Tutor @ UMBC',
        date: 'Mar. 2021 - Dec. 2021',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Nisi sit ipsa delectus eum quo voluptas aspernatur accusantium distinctio possimus est.',
    },
    {
        title: 'DevOps Engineer Intern @ Northrop Grumman',
        date: 'May 2021 - Aug. 2021',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. \
        Nisi sit ipsa delectus eum quo voluptas aspernatur accusantium distinctio possimus est.',
    },
];
