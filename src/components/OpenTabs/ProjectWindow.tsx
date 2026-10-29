import * as stylex from '@stylexjs/stylex';

import type { Project } from '../../content/route';

import { Button } from '../ui/Button';
import { projectWindow } from './OpenTabs.styles';

/** Where a window sits in the fan: in front, or one of the two behind it. */
export type WindowSpot = 'front' | 'behindLeft' | 'behindRight';

interface ProjectWindowProps {
  project: Project;
  spot: WindowSpot;
  onBringForward: () => void;
}

export function ProjectWindow({
  project,
  spot,
  onBringForward,
}: ProjectWindowProps) {
  const isFront = spot === 'front';

  // The project tabs and the details card are the keyboard and screen reader
  // route; clicking a window behind is a mouse shortcut, so the windows stay
  // out of tab order and the accessibility tree, and a click doesn't move
  // focus onto them.
  return (
    <Button
      variant="text"
      tabIndex={-1}
      aria-hidden="true"
      onMouseDown={(event) => event.preventDefault()}
      onClick={isFront ? undefined : onBringForward}
      style={[
        projectWindow.root,
        isFront ? projectWindow.front : projectWindow.behind,
        !isFront && projectWindow[spot],
      ]}
    >
      <span {...stylex.props(projectWindow.bar)}>
        <span {...stylex.props(projectWindow.dot)} />
        <span {...stylex.props(projectWindow.dot)} />
        <span {...stylex.props(projectWindow.dot)} />
        <span {...stylex.props(projectWindow.address)}>
          {project.host ?? project.title}
        </span>
      </span>
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt=""
          loading="lazy"
          draggable={false}
          {...stylex.props(projectWindow.screen)}
        />
      ) : null}
    </Button>
  );
}

/** The dashed window behind the front one while there's only one project. */
export function GhostWindow() {
  return (
    <div aria-hidden="true" {...stylex.props(projectWindow.ghost)}>
      next tab · loading…
    </div>
  );
}
