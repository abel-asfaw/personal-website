import { Github } from 'lucide-react';

import type { ContentfulData } from '../contentful';
import { OverlayCard } from './ui/Card';
import { Section } from './ui/Section';

interface ProjectsProps {
  projectsSection: ContentfulData['projectsSection'];
}

export function Projects({ projectsSection }: ProjectsProps) {
  if (!projectsSection) {
    return null;
  }

  return (
    <Section
      id="projects"
      title={projectsSection.title}
      className="gap-4"
      as="ul"
    >
      {projectsSection.projects?.map(project => {
        if (!project) {
          return null;
        }

        const { title, projectLink, githubLink, skills, description, image } =
          project.fields;

        const imageUrl = image?.fields.file?.url;

        return (
          <li key={projectLink} className="list-none">
            <OverlayCard
              tags={skills}
              title={title}
              link={projectLink}
              imageUrl={imageUrl!}
              description={description}
              links={[
                ...(githubLink
                  ? [{ href: githubLink, icon: <Github size={24} /> }]
                  : []),
              ]}
            />
          </li>
        );
      })}
    </Section>
  );
}
