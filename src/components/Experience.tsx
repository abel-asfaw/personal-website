import * as stylex from '@stylexjs/stylex';

import type { ContentfulData } from '../contentful';
import { Accordion } from './ui/Accordion';
import { PillButton } from './ui/Button';
import { Section } from './ui/Section';
import { experience } from './Experience.styles';

interface ExperienceProps {
  experienceSection: ContentfulData['experienceSection'];
}

function formatDate(date: string) {
  const castDate = new Date(date);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(castDate);

  return formattedDate;
}

export function Experience({ experienceSection }: ExperienceProps) {
  if (!experienceSection) {
    return null;
  }

  return (
    <Section
      id="experience"
      title={experienceSection.title}
      style={experience.list}
      as="ul"
    >
      {experienceSection?.experiences.map(exp => {
        if (!exp) {
          return null;
        }

        const { company, jobTitle, startDate, endDate, description, skills } =
          exp.fields;

        const formattedStartDate = formatDate(startDate);
        const formattedEndDate = endDate ? formatDate(endDate) : 'Present';

        const headerContent = (
          <div {...stylex.props(experience.itemHeader)}>
            <span
              {...stylex.props(experience.jobTitle)}
            >{`${jobTitle} @ ${company}`}</span>
            <span {...stylex.props(experience.dates)}>
              {formattedStartDate} – {formattedEndDate}
            </span>
          </div>
        );

        const bodyContent = (
          <>
            <p {...stylex.props(experience.description)}>{description}</p>
            {skills.length > 0 ? (
              <ul {...stylex.props(experience.skills)}>
                {skills.map(skill => (
                  <li key={skill}>
                    <PillButton>{skill}</PillButton>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        );

        return (
          <li
            key={`${jobTitle} @ ${company}`}
            {...stylex.props(experience.item)}
          >
            <Accordion
              headerContent={headerContent}
              bodyContent={bodyContent}
            />
          </li>
        );
      })}
    </Section>
  );
}
