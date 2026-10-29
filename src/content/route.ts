import type { ContentfulData } from '../contentful';

export interface Stop {
  key: string;
  /** Two-digit stop number, e.g. "01". */
  n: string;
  company: string;
  jobTitle: string;
  /** Map label year: the start year, or "now" for the current role. */
  year: string;
  dates: string;
  length: string;
  description: string;
  skills: string[];
  /** Map position, in percent of the map's width and height. */
  x: number;
  y: number;
}

export interface Project {
  key: string;
  /** Two-digit project number, e.g. "01". */
  n: string;
  title: string;
  description: string;
  skills: string[];
  link: string;
  host: string;
  githubLink?: string;
  imageUrl?: string;
}

export interface SkillUsage {
  /** Indexes into the stops where the skill was used. */
  stops: number[];
  /** Indexes into the projects that use the skill. */
  projects: number[];
}

const pad = (n: number) => String(n).padStart(2, '0');

/** "1 stop", "3 stops". */
export const plural = (count: number, unit: string) =>
  `${count} ${unit}${count === 1 ? '' : 's'}`;

// Contentful dates are calendar dates, so format them in UTC to keep the
// visitor's time zone from shifting them into the previous month.
function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
}

// Counts calendar months inclusively, the way the dates read:
// Jan 2022 – Nov 2022 is 11 months.
function formatLength(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const months =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    (end.getUTCMonth() - start.getUTCMonth()) +
    1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [years && plural(years, 'year'), rest && plural(rest, 'month')]
    .filter(Boolean)
    .join(' ');
}

// The route climbs and dips across the map: x spreads the stops evenly and
// y zigzags through the design's four heights, repeating for longer careers.
const ROUTE_HEIGHTS = [70, 36, 62, 34];
const ROUTE_START = 14;
const ROUTE_END = 84;

function routePoint(index: number, count: number) {
  const x =
    count === 1
      ? (ROUTE_START + ROUTE_END) / 2
      : ROUTE_START + ((ROUTE_END - ROUTE_START) * index) / (count - 1);
  return { x, y: ROUTE_HEIGHTS[index % ROUTE_HEIGHTS.length] };
}

/**
 * The narrowest map, in px, that keeps `gap` px between neighbouring stops.
 * Narrower screens scroll the map sideways instead of crowding the stops.
 */
export function routeMinWidth(count: number, gap: number) {
  return count < 2
    ? 0
    : Math.ceil((gap * (count - 1) * 100) / (ROUTE_END - ROUTE_START));
}

export function toStops(
  experienceSection: ContentfulData['experienceSection'],
): Stop[] {
  if (!experienceSection) {
    return [];
  }

  // The route reads left to right, oldest role first.
  const roles = experienceSection.experiences
    .flatMap((exp) => (exp ? [exp.fields] : []))
    .toSorted(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    );

  return roles.map((role, index) => {
    // A role flagged current reads as "Present" even if an old end date
    // was left on it in the CMS.
    const endDate = role.isCurrent ? undefined : role.endDate;
    return {
      key: `${role.company}-${role.startDate}`,
      n: pad(index + 1),
      company: role.company,
      jobTitle: role.jobTitle,
      year: endDate ? String(new Date(role.startDate).getUTCFullYear()) : 'now',
      dates: `${formatDate(role.startDate)} – ${
        endDate ? formatDate(endDate) : 'Present'
      }`,
      length: endDate ? formatLength(role.startDate, endDate) : 'current role',
      description: role.description,
      skills: role.skills ?? [],
      ...routePoint(index, roles.length),
    };
  });
}

function hostOf(link: string) {
  try {
    return new URL(link).hostname.replace(/^www\./, '');
  } catch {
    return link;
  }
}

export function toProjects(
  projectsSection: ContentfulData['projectsSection'],
): Project[] {
  return (projectsSection?.projects ?? [])
    .flatMap((project) => (project ? [project.fields] : []))
    .map((project, index) => {
      const imageUrl = project.image?.fields.file?.url;
      return {
        key: project.projectLink,
        n: pad(index + 1),
        title: project.title,
        description: project.description,
        skills: project.skills ?? [],
        link: project.projectLink,
        host: hostOf(project.projectLink),
        githubLink: project.githubLink,
        imageUrl: imageUrl ? `${imageUrl}?w=1400&fm=webp&q=80` : undefined,
      };
    });
}

export function toSkills(skillsSection: ContentfulData['skillsSection']) {
  return (skillsSection?.skills ?? []).flatMap((skill) =>
    skill ? [skill.fields.label] : [],
  );
}

// Roles list skills exactly ("React" must not match "React Native"), but
// project stacks name specific flavors, so a whole-word match counts there:
// "AWS" matches "AWS S3" and "CSS" matches "Tailwind CSS".
function projectUses(projectSkill: string, skill: string) {
  return projectSkill === skill || projectSkill.split(/\s+/).includes(skill);
}

/** How many stops on the route list `skill`. */
export function stopCount(skill: string, stops: Stop[]) {
  return stops.filter((stop) => stop.skills.includes(skill)).length;
}

export function skillUsage(
  skill: string,
  stops: Stop[],
  projects: Project[],
): SkillUsage {
  return {
    stops: stops.flatMap((stop, index) =>
      stop.skills.includes(skill) ? [index] : [],
    ),
    projects: projects.flatMap((project, index) =>
      project.skills.some((projectSkill) => projectUses(projectSkill, skill))
        ? [index]
        : [],
    ),
  };
}
