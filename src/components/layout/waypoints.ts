// Section anchors for the header nav and useActiveWaypoint.
export const WAYPOINTS = [
  { href: '#route', label: 'Route' },
  { href: '#projects', label: 'Projects' },
  { href: '#toolbox', label: 'Toolbox' },
] as const;

export const WAYPOINT_HREFS = WAYPOINTS.map(({ href }) => href);
