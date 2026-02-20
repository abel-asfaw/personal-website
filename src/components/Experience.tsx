import type { ContentfulData } from '../contentful';
import { Accordion } from './ui/Accordion';
import { PillButton } from './ui/Button';
import { Section } from './ui/Section';

interface ExperienceProps {
  experienceSection: ContentfulData['experienceSection'];
}

export function Experience({ experienceSection }: ExperienceProps) {
  function formatDate(date: string) {
    const castDate = new Date(date);

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric',
    }).format(castDate);

    return formattedDate;
  }

  if (!experienceSection) {
    return null;
  }

  return (
    <Section
      id="experience"
      title={experienceSection.title}
      className="gap-4"
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
          <div className="flex flex-1 flex-col items-start sm:flex-row sm:justify-between">
            <span className="font-medium">{`${jobTitle} @ ${company}`}</span>
            <span className="text-neutral-400 sm:text-right">
              {formattedStartDate} – {formattedEndDate}
            </span>
          </div>
        );

        const bodyContent = (
          <>
            <p className="leading-relaxed">{description}</p>
            {skills.length > 0 ? (
              <ul className="flex list-none flex-wrap gap-2 pt-2">
                {skills.map(skill => (
                  <li key={skill}>
                    <PillButton className="font-roboto hover:scale-107 duration-400 bg-indigo-600 text-white ease-in-out">
                      {skill}
                    </PillButton>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        );

        return (
          <li key={`${jobTitle} @ ${company}`} className="w-full list-none">
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
