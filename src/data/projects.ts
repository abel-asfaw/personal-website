export interface Project {
  title: string;
  skills: string[];
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Photography Portfolio',
    skills: [
      'React',
      'Python',
      'FastAPI',
      'Postgres',
      'AWS S3',
      'Docker',
      'Tailwind CSS',
    ],
    description: `
            I built a photography portolio web app where I can upload and
            display my photos without the clutter of social media, and so I can 
            add my own personal touch to how my photos are displayed. I've set up
            an admin page (which is secured through Auth0) where I can manage the 
            photos. And I've implemented token-based access for the upload and 
            delete API endpoints.
        `,
    image: '/assets/images/project-1.webp',
    link: 'https://github.com/abel-asfaw/photography-portfolio',
  },
];

export default projects;
