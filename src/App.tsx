import * as stylex from '@stylexjs/stylex';
import { useMemo, useState } from 'react';

import { app } from './App.styles';
import { Hero, HeroSkeleton } from './components/Hero';
import { Dock } from './components/layout/Dock';
import { Header } from './components/layout/Header';
import { WAYPOINT_HREFS } from './components/layout/waypoints';
import { OpenTabs } from './components/OpenTabs';
import { RouteSection } from './components/Route';
import { SayHi } from './components/SayHi';
import { Toolbox } from './components/Toolbox';
import { toAbout } from './content/about';
import { toProjects, toSkills, toStops } from './content/route';
import { useContentfulData } from './contentful';
import { useActiveWaypoint } from './hooks/useActiveWaypoint';
import { useIsTouch } from './hooks/useIsTouch';
import { useRouteTour } from './hooks/useRouteTour';
import { useTheme } from './hooks/useTheme';
import { dayTheme, nightTheme } from './styles/themes';

export default function App() {
  const {
    data: { aboutMe, experienceSection, projectsSection, skillsSection },
    isPending,
  } = useContentfulData();
  const { theme, picked, toggle } = useTheme();
  const isTouch = useIsTouch();
  const activeWaypoint = useActiveWaypoint(WAYPOINT_HREFS);

  // Mapped once per load rather than on every tour step or scroll update.
  const about = useMemo(() => toAbout(aboutMe), [aboutMe]);
  const stops = useMemo(() => toStops(experienceSection), [experienceSection]);
  const projects = useMemo(
    () => toProjects(projectsSection),
    [projectsSection],
  );
  const skills = useMemo(() => toSkills(skillsSection), [skillsSection]);

  const tour = useRouteTour(stops.length);
  // Shared by the toolbox (which picks it) and the map (which lights it up).
  const [pickedSkill, setPickedSkill] = useState<string | null>(null);
  // Shared by the open tabs (which show it in front) and the toolbox (which
  // jumps to it).
  const [frontProject, setFrontProject] = useState(0);

  return (
    // `#top` sits on the root, above the sticky header, so "Back to start"
    // lands at the very top of the page.
    <div
      id="top"
      {...stylex.props(
        app.root,
        picked === 'day' && dayTheme,
        picked === 'night' && nightTheme,
      )}
    >
      <Header
        theme={theme}
        onToggleTheme={toggle}
        activeWaypoint={activeWaypoint}
      />
      <main>
        {isPending ? (
          <HeroSkeleton />
        ) : (
          <>
            <Hero about={about} isTouch={isTouch} onStartTour={tour.play} />
            <RouteSection
              title={experienceSection?.title ?? ''}
              stops={stops}
              tour={tour}
              litSkill={pickedSkill}
              onClearSkill={() => setPickedSkill(null)}
            />
            <OpenTabs
              title={projectsSection?.title ?? ''}
              projects={projects}
              front={frontProject}
              onBringForward={setFrontProject}
              isTouch={isTouch}
            />
            <Toolbox
              title={skillsSection?.title ?? ''}
              skills={skills}
              stops={stops}
              projects={projects}
              picked={pickedSkill}
              onPick={setPickedSkill}
              onJumpToStop={tour.goTo}
              onJumpToProject={setFrontProject}
              isTouch={isTouch}
            />
          </>
        )}
      </main>
      {isPending ? null : <SayHi />}
      <Dock activeWaypoint={activeWaypoint} />
    </div>
  );
}
