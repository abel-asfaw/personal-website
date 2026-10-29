import * as stylex from '@stylexjs/stylex';
import { useMemo, useState } from 'react';

import type { Project, Stop } from '../../content/route';

import { skillUsage, stopCount } from '../../content/route';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillDetail } from './SkillDetail';
import { SkillMarquee } from './SkillMarquee';
import { toolbox } from './Toolbox.styles';

interface ToolboxProps {
  title: string;
  skills: string[];
  stops: Stop[];
  projects: Project[];
  picked: string | null;
  onPick: (skill: string | null) => void;
  onJumpToStop: (index: number) => void;
  onJumpToProject: (index: number) => void;
  isTouch: boolean;
}

export function Toolbox({
  title,
  skills,
  stops,
  projects,
  picked,
  onPick,
  onJumpToStop,
  onJumpToProject,
  isTouch,
}: ToolboxProps) {
  const [isPaused, setIsPaused] = useState(false);
  const counts = useMemo(
    () => new Map(skills.map((skill) => [skill, stopCount(skill, stops)])),
    [skills, stops],
  );

  if (skills.length === 0) {
    return null;
  }

  const half = Math.ceil(skills.length / 2);
  const togglePick = (skill: string) => onPick(picked === skill ? null : skill);
  // A picked skill holds the rows still so it stays where it was tapped, so
  // the button shows them stopped and can't resume them until it's cleared.
  const isStopped = isPaused || picked !== null;

  return (
    <section
      id="toolbox"
      aria-labelledby="toolbox-heading"
      {...stylex.props(toolbox.root)}
    >
      <div {...stylex.props(toolbox.header)}>
        <SectionHeading
          id="toolbox-heading"
          eyebrow={`Waypoint 03 · ${title}`}
          title="The toolbox"
        />
        <div {...stylex.props(toolbox.tools)}>
          <span {...stylex.props(toolbox.hint)}>
            {isTouch ? 'tap' : 'click'} a skill to see where I used it
          </span>
          <Button
            variant="quiet"
            disabled={picked !== null}
            onClick={() => setIsPaused((p) => !p)}
          >
            <span aria-hidden="true">{isStopped ? '▶' : '❚❚'}</span>
            {isStopped ? 'Play' : 'Pause'}
          </Button>
        </div>
      </div>
      <SkillMarquee
        skills={skills.slice(0, half)}
        counts={counts}
        picked={picked}
        onPick={togglePick}
        isPaused={isStopped}
      />
      <SkillMarquee
        skills={skills.slice(half)}
        counts={counts}
        picked={picked}
        onPick={togglePick}
        isPaused={isStopped}
        isReversed
      />
      <div aria-live="polite" {...stylex.props(toolbox.detail)}>
        <SkillDetail
          skill={picked}
          usage={picked ? skillUsage(picked, stops, projects) : null}
          stops={stops}
          projects={projects}
          isTouch={isTouch}
          onJumpToStop={onJumpToStop}
          onJumpToProject={onJumpToProject}
          onClear={() => onPick(null)}
        />
      </div>
    </section>
  );
}
