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
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi\
                sit ipsa delectus eum quo voluptas aspernatur accusantium\
                distinctio possimus est.',
    },
    {
        title: 'Software Developer @ Redfin',
        date: 'Jan. 2022 - Nov. 2022',
        description: 'As a Software Developer on the Selling and Listing Experience\
                (SALE) and Concierge engineering teams, I played a key role in\
                enhancing the agent-facing search filters, which led to a 30%\
                increase in positive user feedback. In addition to developing\
                email templates for the Concierge notification system, I\
                actively collaborated with cross-functional teams to ensure\
                seamless project execution. I also documented Conductor\
                workflows, significantly increasing team productivity. By\
                interviewing team members, I identified and addressed core\
                issues, improving overall engineering processes.',
    },
    {
        title: 'Teaching Assistant @ UMBC',
        date: 'Aug. 2020 - Jan. 2022',
        description: "As a Teaching Assistant in UMBC's Computer Science Department, I\
                guided 20 students through weekly exercises in Python, held\
                office hours for personalized assistance, and contributed to\
                assignment creation. I received positive feedback from 90% of\
                students and consistently improved my teaching methods based on\
                their input. My expertise in teaching complex coding concepts\
                was crucial in helping students of varying skill levels succeed.",
    },
    {
        title: 'Computer Science Tutor @ UMBC',
        date: 'Mar. 2021 - Dec. 2021',
        description: 'As a Computer Science Tutor, I led tutoring sessions for two\
                introductory computer science courses focusing on Python\
                programming fundamentals and OOP principles in C++. I worked\
                with 1 to 4 students per session, fostering strong relationships\
                that created a positive and supportive learning environment. My\
                dedication, effectiveness, and supportive approach earned praise\
                from faculty members, who acknowledged my commitment to helping\
                students understand complex programming concepts and techniques.',
    },
    {
        title: 'DevOps Engineer Intern @ Northrop Grumman',
        date: 'May 2021 - Aug. 2021',
        description: 'During my internship at Northrop Grumman, I automated build and\
                deployment processes for large-scale ground system solutions in\
                an agile environment. By using Ansible, I reduced the Minio\
                deployment process time from 2 hours to just 6 minutes and saved\
                9 minutes daily on the privilege escalation process for testers\
                and developers. I also coached fellow interns on Ansible\
                adoption, further promoting its use within the organization.',
    },
];
