import * as stylex from '@stylexjs/stylex';

import type { Project, SkillUsage, Stop } from '../../content/route';

import { Button, LinkButton } from '../ui/Button';
import { skillDetail } from './Toolbox.styles';

interface SkillDetailProps {
  skill: string | null;
  usage: SkillUsage | null;
  stops: Stop[];
  projects: Project[];
  isTouch: boolean;
  onJumpToStop: (index: number) => void;
  onJumpToProject: (index: number) => void;
  onClear: () => void;
}

export function SkillDetail({
  skill,
  usage,
  stops,
  projects,
  isTouch,
  onJumpToStop,
  onJumpToProject,
  onClear,
}: SkillDetailProps) {
  if (!skill || !usage) {
    return (
      <div {...stylex.props(skillDetail.empty)}>
        {isTouch ? 'Tap' : 'Click'} any skill above to see where I used it, and
        light it up on the map.
      </div>
    );
  }

  const stopCount = usage.stops.length;
  const projectCount = usage.projects.length;
  const hasPlaces = stopCount + projectCount > 0;
  const reach = stopCount
    ? `${stopCount} ${stopCount === 1 ? 'stop' : 'stops'} on the route`
    : projectCount
      ? `${projectCount} ${projectCount === 1 ? 'project' : 'projects'} in my open tabs`
      : 'used everywhere';

  return (
    // Re-keyed per skill so the card replays its entrance.
    <div key={skill} {...stylex.props(skillDetail.root)}>
      <div {...stylex.props(skillDetail.summary)}>
        <span {...stylex.props(skillDetail.eyebrow)}>
          Selected tool · {reach}
        </span>
        <strong {...stylex.props(skillDetail.name)}>{skill}</strong>
      </div>
      <div {...stylex.props(skillDetail.where)}>
        <span {...stylex.props(skillDetail.whereLabel)}>
          {hasPlaces
            ? `Where I've used it, ${isTouch ? 'tap' : 'click'} to jump there`
            : 'Where I use it'}
        </span>
        <div {...stylex.props(skillDetail.places)}>
          {usage.stops.map((index) => (
            <LinkButton
              key={stops[index].key}
              href="#route"
              onClick={() => onJumpToStop(index)}
              style={skillDetail.place}
            >
              <span
                aria-hidden="true"
                {...stylex.props(skillDetail.placeBadge)}
              >
                {stops[index].n}
              </span>
              <span {...stylex.props(skillDetail.placeText)}>
                {stops[index].company}
                <span {...stylex.props(skillDetail.placeCta)}>
                  ↑ on the map
                </span>
              </span>
            </LinkButton>
          ))}
          {usage.projects.map((index) => (
            <LinkButton
              key={projects[index].key}
              href="#projects"
              onClick={() => onJumpToProject(index)}
              style={skillDetail.place}
            >
              <span
                aria-hidden="true"
                {...stylex.props(skillDetail.placeBadge)}
              >
                ◎
              </span>
              <span {...stylex.props(skillDetail.placeText)}>
                {projects[index].title}
                <span {...stylex.props(skillDetail.placeCta)}>
                  ↑ in my open tabs
                </span>
              </span>
            </LinkButton>
          ))}
          {hasPlaces ? null : (
            <span {...stylex.props(skillDetail.everywhere)}>
              Part of everything I ship, every day.
            </span>
          )}
        </div>
      </div>
      <Button
        variant="round"
        onClick={onClear}
        aria-label="Clear selected skill"
        style={skillDetail.clear}
      >
        ✕
      </Button>
    </div>
  );
}
