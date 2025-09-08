import { useQuery } from '@tanstack/react-query';

import { client } from '../contentful/contentfulClient';
import { Accordion } from './common/Accordion';
import { PillButton } from './common/Button';
import { Section } from './common/Section';

export type WorkExperienceFields = {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
};

export function Experience() {
  const { data: experience } = useQuery({
    queryKey: ['experience'],
    queryFn: () =>
      client.getEntries({
        content_type: 'experience',
        order: ['-fields.endDate'],
      }),
  });

  function formatDate(date: string) {
    const castDate = new Date(date);

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric',
    }).format(castDate);

    return formattedDate;
  }

  return (
    <Section id={'experience'} title={"Where I've Worked"} className={'gap-4'}>
      {experience?.items.map((exp, index) => {
        const { company, jobTitle, startDate, endDate, description, skills } =
          exp.fields as WorkExperienceFields;

        const formattedStartDate = formatDate(startDate);
        const formattedEndDate = endDate ? formatDate(endDate) : 'Present';

        const headerContent = (
          <div className="flex flex-1 flex-col sm:flex-row sm:justify-between">
            <span className="font-medium">{`${jobTitle} @ ${company}`}</span>
            <span className="text-neutral-400 sm:text-right">
              {formattedStartDate} – {formattedEndDate}
            </span>
          </div>
        );

        const bodyContent = (
          <>
            <span className="leading-relaxed">{description}</span>
            {skills.length > 0 ? (
              <span className="flex flex-wrap gap-2 pt-2">
                {skills.map(skill => (
                  <PillButton
                    key={skill}
                    className="bg-indigo-600 font-roboto text-white"
                  >
                    {skill}
                  </PillButton>
                ))}
              </span>
            ) : null}
          </>
        );

        return (
          <Accordion
            key={`${jobTitle} @ ${company}`}
            index={index}
            headerContent={headerContent}
            bodyContent={bodyContent}
          />
        );
      })}
    </Section>
  );
}
