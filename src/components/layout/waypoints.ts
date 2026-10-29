// Section anchors shared by the header nav and the mobile dock.
export const waypoints = [
  { href: '#route', label: 'Route', short: 'Route' },
  { href: '#projects', label: 'Projects', short: 'Projects' },
  { href: '#toolbox', label: 'Toolbox', short: 'Tools' },
  { href: '#say-hi', label: 'Contact', short: 'Hi' },
] as const;

export const waypointHrefs = waypoints.map(({ href }) => href);
