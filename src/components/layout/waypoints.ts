// Section anchors shared by the header nav and the mobile dock.
export const WAYPOINTS = [
  { href: '#route', label: 'Route' },
  { href: '#projects', label: 'Projects' },
  { href: '#toolbox', label: 'Toolbox' },
] as const;

export const WAYPOINT_HREFS = WAYPOINTS.map(({ href }) => href);
