import * as stylex from '@stylexjs/stylex';
import { AnimatePresence, motion } from 'motion/react';
import { useId, useState } from 'react';

import type { ContentfulData } from '../contentful';
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

// Non-breaking spaces keep multi-word skills ("React Native") on one line
// and each separator attached to the skill before it.
function formatSkills(skills: string[]) {
  return skills.map(skill => skill.replaceAll(' ', '\u00A0')).join('\u00A0· ');
}

const panelVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const panelTransition = {
  duration: 0.25,
  ease: [0, 0, 0.2, 1] as [number, number, number, number],
};

const indicatorTransition = {
  type: 'spring' as const,
  duration: 0.5,
  bounce: 0.15,
};

export function Experience({ experienceSection }: ExperienceProps) {
  // `null` means "the most recent role", so the default survives CMS edits.
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const panelId = useId();
  const indicatorId = useId();

  if (!experienceSection) {
    return null;
  }

  // The timeline reads left to right, oldest role first.
  const roles = experienceSection.experiences
    .flatMap(exp => (exp ? [exp.fields] : []))
    .toSorted(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    );

  if (roles.length === 0) {
    return null;
  }

  const activeIndex = Math.min(
    selectedIndex ?? roles.length - 1,
    roles.length - 1,
  );
  const { company, jobTitle, startDate, endDate, description, skills } =
    roles[activeIndex];

  return (
    <Section
      id="experience"
      title={experienceSection.title}
      style={experience.content}
    >
      <ol {...stylex.props(experience.stops)}>
        {roles.map((role, index) => {
          const isSelected = index === activeIndex;

          return (
            <li
              key={`${role.company}-${role.startDate}`}
              {...stylex.props(isSelected && experience.itemSelected)}
            >
              <button
                type="button"
                aria-pressed={isSelected}
                aria-controls={panelId}
                onClick={() => setSelectedIndex(index)}
                {...stylex.props(
                  experience.stop,
                  isSelected && experience.stopSelected,
                )}
              >
                <span aria-hidden="true" {...stylex.props(experience.bar)}>
                  {/* One shared indicator: Motion slides it from the previous
                      stop to this one, passing over any stops in between. */}
                  {isSelected ? (
                    <motion.span
                      layoutId={indicatorId}
                      transition={indicatorTransition}
                      {...stylex.props(experience.indicator)}
                    />
                  ) : null}
                </span>
                <span {...stylex.props(experience.stopDate)}>
                  {formatDate(role.startDate)}
                </span>
                <span
                  {...stylex.props(
                    experience.stopCompany,
                    isSelected && experience.stopCompanySelected,
                  )}
                >
                  {role.company}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div id={panelId} aria-live="polite" {...stylex.props(experience.panel)}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={`${company}-${startDate}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={panelVariants}
            transition={panelTransition}
            {...stylex.props(experience.role)}
          >
            <span {...stylex.props(experience.dates)}>
              {formatDate(startDate)} –{' '}
              {endDate ? formatDate(endDate) : 'Present'}
            </span>
            <h3 {...stylex.props(experience.jobTitle)}>
              {jobTitle}{' '}
              <span {...stylex.props(experience.company)}>@ {company}</span>
            </h3>
            <p {...stylex.props(experience.description)}>{description}</p>
            {skills.length > 0 ? (
              <p {...stylex.props(experience.skills)}>{formatSkills(skills)}</p>
            ) : null}
          </motion.article>
        </AnimatePresence>
      </div>
    </Section>
  );
}
