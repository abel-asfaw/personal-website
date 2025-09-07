interface Experience {
  title: string;
  date: string;
  description: string;
  skills: string[];
}

const experience: Experience[] = [
  {
    title: 'Software Engineer @ Raptor Maps',
    date: 'Jan. 2024 – Present',
    description: 'Building stuff. Solving problems. You know the drill.',
    skills: [
      'Python',
      'TypeScript',
      'React',
      'React Native',
      'Postgres',
      'Docker',
      'AWS',
    ],
  },
  {
    title: 'Software Engineer @ Lockheed Martin',
    date: 'Apr. 2023 – Jan. 2024',
    description: `
                At Lockheed Martin, my focus was on driving the modernization of
                maintenance systems software to meet the evolving demands of
                aerospace defense.
            `,
    skills: ['Java', 'JavaScript', 'Docker', 'Kubernetes', 'Helm'],
  },
  {
    title: 'Software Developer @ Redfin',
    date: 'Jan. 2022 – Nov. 2022',
    description: `
                I initially joined the Selling and Listing Experience (SALE)
                team at Redfin as a full-stack developer. Later, I
                transitioned to the Concierge team where my primary focus was
                to develop tools and processes to assist agents in streamlining the
                home renovation process.
            `,
    skills: ['Java', 'JavaScript', 'React', 'LESS', 'Postgres', 'GraphQL'],
  },
  {
    title: 'Teaching Assistant @ UMBC',
    date: 'Aug. 2020 – Jan. 2022',
    description: `
                As a teaching assistant, I mentored 20 students each week, ensured they
                understood fundamental coding concepts, held consistent office
                hours, and even brainstormed new assignment ideas.
            `,
    skills: ['Python'],
  },
  {
    title: 'Computer Science Tutor @ UMBC',
    date: 'Mar. 2021 – Dec. 2021',
    description: `
                At the UMBC Academic Success Center, I led tutoring sessions for
                two fundamental computer science courses—Python
                basics and OOP principles of C++.
            `,
    skills: ['Python', 'C++'],
  },
  {
    title: 'DevOps Engineer Intern @ Northrop Grumman',
    date: 'May 2021 – Aug. 2021',
    description: `
                I automated build and deployment processes for ground system solutions.
            `,
    skills: ['Ansible'],
  },
];

export default experience;
