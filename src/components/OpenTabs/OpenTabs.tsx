import * as stylex from '@stylexjs/stylex';
import { useId } from 'react';

import type { Project } from '../../content/route';

import { Button, LinkButton } from '../ui/Button';
import { ScrollArea } from '../ui/ScrollArea';
import { SectionHeading } from '../ui/SectionHeading';
import { TagList } from '../ui/TagList';
import { openTabs } from './OpenTabs.styles';
import { GhostWindow, ProjectWindow, type WindowSpot } from './ProjectWindow';

interface OpenTabsProps {
  title: string;
  projects: Project[];
  /** Index of the project window in front. */
  front: number;
  onBringForward: (index: number) => void;
  isTouch: boolean;
}

// Fan positions by distance from the front window; any further back stay
// hidden until their tab brings them forward.
const SPOTS: WindowSpot[] = ['front', 'behindLeft', 'behindRight'];

export function OpenTabs({
  title,
  projects,
  front,
  onBringForward,
  isTouch,
}: OpenTabsProps) {
  const titleId = useId();

  // A refetch can return fewer projects than the index the visitor picked.
  const frontIndex = Math.min(front, projects.length - 1);
  const project = projects[frontIndex];
  if (!project) {
    return null;
  }

  const hasMany = projects.length > 1;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      {...stylex.props(openTabs.root)}
    >
      <div {...stylex.props(openTabs.header)}>
        <SectionHeading
          id="projects-heading"
          eyebrow={`Waypoint 02 · ${title}`}
          title="Open tabs"
        />
        {hasMany ? (
          <div {...stylex.props(openTabs.tabs)}>
            {projects.map((p, index) => (
              <Button
                key={p.key}
                variant="quiet"
                aria-pressed={index === frontIndex}
                onClick={() => onBringForward(index)}
                style={index === frontIndex && openTabs.tabPicked}
              >
                {p.n} · {p.title}
              </Button>
            ))}
          </div>
        ) : null}
      </div>

      <div {...stylex.props(openTabs.body)}>
        <div {...stylex.props(openTabs.desk)}>
          {hasMany ? null : <GhostWindow />}
          {projects.map((p, index) => {
            const spot =
              SPOTS[(index - frontIndex + projects.length) % projects.length];
            return spot ? (
              <ProjectWindow
                key={p.key}
                project={p}
                spot={spot}
                onBringForward={() => onBringForward(index)}
              />
            ) : null;
          })}
          {hasMany ? (
            <span aria-hidden="true" {...stylex.props(openTabs.hint)}>
              {isTouch ? 'tap' : 'click'} a window to bring it forward
            </span>
          ) : null}
        </div>

        <article aria-live="polite" {...stylex.props(openTabs.card)}>
          {/* Re-keyed per project so the details replay their entrance, and
              each project's text starts scrolled to the top. */}
          <div key={project.key} {...stylex.props(openTabs.details)}>
            <span {...stylex.props(openTabs.meta)}>
              Tab {project.n}
              {project.host ? ` · ${project.host}` : null}
            </span>
            <h3 id={titleId} {...stylex.props(openTabs.title)}>
              {project.title}
            </h3>
            <ScrollArea labelledBy={titleId}>
              <p {...stylex.props(openTabs.description)}>
                {project.description}
              </p>
              <TagList tags={project.skills} style={openTabs.tags} />
            </ScrollArea>
            <div {...stylex.props(openTabs.links)}>
              {project.link ? (
                <LinkButton
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="solid"
                >
                  Visit site ↗
                </LinkButton>
              ) : null}
              {project.githubLink ? (
                <LinkButton
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Source code on GitHub"
                >
                  Code
                </LinkButton>
              ) : null}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
