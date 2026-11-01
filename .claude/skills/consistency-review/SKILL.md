---
name: consistency-review
description: |
  Code consistency and pattern adherence review for this site.
  Naming, file layout, StyleX conventions, data flow and project standards.
  Use after making changes, before committing, to keep the codebase uniform.
---

# Consistency Review

Checks that a change reads like the rest of this codebase. Review the diff you're given (or `git diff` when none is named), not the whole repo.

Formatting and import order are not part of this review: oxfmt enforces them (`npm run format`). Lint rules oxlint already reports (`npm run lint`) aren't either. Don't report or hand-fix them.

This repo has no CLAUDE.md, so this file is where its conventions are written down. When a change sets a new convention on purpose, update this file in the same change.

## When to Use This Skill

- After finishing a change
- Before committing
- When several changes contribute to the same feature

## Naming Conventions

### 1. Values and Functions

```
[ ] camelCase for values and functions, PascalCase for components and types
[ ] Descriptive names (not x, tmp, data)
[ ] Booleans read as yes/no: is, has, should, can (isTouch, hasMany, isCurrent)
[ ] Functions are verbs; data mappers are to<Thing> (toStops, toProjects)
[ ] Module-level constants are UPPER_SNAKE_CASE (READ_LINE, ROUTE_HEIGHTS, SPOTS)
[ ] Two-digit display numbers are named n, as on Stop and Project
```

### 2. Files and Directories

```
[ ] Component files match the component name (OpenTabs.tsx exports OpenTabs)
[ ] Every component folder has an index.ts that re-exports its public component(s)
[ ] Styles sit in a sibling <Component>.styles.ts, never inline in the .tsx
[ ] .stylex.ts is only for defineConsts/defineVars (src/styles/tokens.stylex.ts)
[ ] Hooks are one per file in src/hooks, named use<Thing>.ts
```

| Kind                           | Where / convention                                       | Example                              |
| ------------------------------ | -------------------------------------------------------- | ------------------------------------ |
| Page section                   | `src/components/<Section>/`, `index.ts` re-export        | `OpenTabs/OpenTabs.tsx`              |
| Section helper component       | Same folder, styles share the section's `.styles.ts`     | `OpenTabs/ProjectWindow.tsx`         |
| Header, footer, dock, nav data | `src/components/layout/`                                 | `Dock.tsx`, `waypoints.ts`           |
| Shared UI primitive            | `src/components/ui/<Name>/`, default export + `index.ts` | `ui/Button/Button.tsx`               |
| Hook                           | `src/hooks/use<Thing>.ts`                                | `useActiveWaypoint.ts`               |
| Contentful client/types        | `src/contentful/`                                        | `useContentfulData.ts`               |
| Content mapping                | `src/content/`                                           | `route.ts` (`toStops`, `skillUsage`) |
| Tokens and themes              | `src/styles/`                                            | `tokens.stylex.ts`, `themes.ts`      |
| Skeleton                       | `<Section>Skeleton`, exported beside the section         | `HeroSkeleton` in `Hero.tsx`         |

### 3. Types

```
[ ] PascalCase, no I prefix
[ ] A component's props interface is <Component>Props (OpenTabsProps), not Props
[ ] Fixed sets are string unions or `as const` arrays, not enums
[ ] Type-only imports use import type
```

### 4. Exports

```
[ ] Section and layout components are named exports (export function OpenTabs)
[ ] ui/ primitives are default exports, re-exported by name from their index.ts
    (an icon set like ui/Icons is the exception: named exports, re-exported
    with export *)
[ ] Imports go through a folder's index.ts from outside it ('../ui/Button'),
    and straight to the file from inside it ('./OpenTabs.styles')
```

## StyleX

The rules here are the StyleX Authoring Guide as this repo applies it. Most are invisible to lint.

```
[ ] Each .styles.ts exports one stylex.create per component, named in camelCase
    after it (openTabs, projectWindow)
[ ] The outermost element's key is root; other keys name the element's role
    (title, links, desk); variant keys are adjectives or variant names
    (current, picked, front) and never repeat base styles
[ ] A style passed to a child's style prop is named for the child's role in
    the parent (link, tabPicked), not for its effect
[ ] Never className or style on an element that also spreads stylex.props()
[ ] Conditions nest inside the property value with a default key:
    padding: { default: 16, [bp.wide]: 0 }
[ ] Breakpoints and media queries come from bp (bp.wide, bp.fineHover,
    bp.reducedMotion), never written inline
    (the exception: a container query worked out from a section's own layout
    constants stays a named constant in that .styles.ts, like SIDE_BY_SIDE
    in Route.styles.ts; and a runtime useMediaQuery repeats its bp value,
    with a comment at both, like the Dock and bp.wide)
[ ] Parent hover uses stylex.defaultMarker() + stylex.when.ancestor(':hover')
[ ] A variant that overrides a property with a hover condition restates the
    condition (see header.underlineCurrent), or the hover keeps winning
[ ] Colors come from themeColors (themed) or colors (the same in both
    themes); no raw hex or rgba in .styles.ts beyond masks
[ ] Fonts, shadows and easings come from fonts, shadows, easing
[ ] Keyframes live in the .styles.ts next to the create that uses them
[ ] Real elements over ::before / ::after
```

## Code Consistency

### 1. Comments

```
[ ] One-line /** */ doc on exported components and hooks when the name
    doesn't say it all
[ ] Inline comments explain why, not what; describe the code as it is,
    not how it changed
[ ] No commented-out code, no TODO/FIXME
[ ] Copy and comments use the site's vocabulary: waypoint, stop, route,
    tour, toolbox (Glossary below)
```

### 2. Data Flow

```
[ ] Contentful is fetched once, in useContentfulData; components never fetch
[ ] Contentful shapes are mapped to plain types in src/content (Stop, Project)
    before reaching a component; new components take those, not
    ContentfulData fields
[ ] Derived values are computed during render, not copied into useState
[ ] State shared by two sections lives in App and comes down as props
    (pickedSkill, the route tour, the active waypoint)
[ ] Sections render nothing (return null) when their content is empty
[ ] Loading shows a skeleton in the loaded layout's shape (HeroSkeleton)
```

### 3. Components and Interaction

```
[ ] Buttons and links go through ui/Button (Button, LinkButton) with a
    variant, styled further via the style prop
[ ] Skill lists render through TagList; section titles through SectionHeading
    with a "Waypoint 0N · <title>" eyebrow
[ ] New sections get an id, are added to waypoints.ts, and use
    scrollMarginTop: 96 so a jump lands clear of the sticky header
[ ] Sections don't pad their own top or bottom: app.main's gap spaces them
[ ] Copy that names an input says tap or click by isTouch, not both
[ ] External links: target="_blank" rel="noopener noreferrer"; mailto: links
    count as external and open in a new tab too (the hero's Reach out)
```

### 4. Accessibility, Motion and Layout

```
[ ] Real <button> / <a href>, never onClick on a div or span
[ ] Icon-only buttons have aria-label; decorative SVG and marks aria-hidden
[ ] Toggle state via aria-pressed, current nav item via aria-current
[ ] Content that changes on interaction sits in an aria-live="polite" region
[ ] Animations and transitions switch off under bp.reducedMotion
    (main.css has a global backstop, not a substitute)
[ ] Works at the 700px phone layout: no horizontal scroll, touch targets
    at least 44px, text inside buttons can wrap when it might not fit
[ ] Looks right in both Day and Night themes
```

## Glossary

| Term      | Meaning                                                         |
| --------- | --------------------------------------------------------------- |
| Waypoint  | A top-level section the header nav and phone dock link to       |
| Route     | The experience section: the map and its stops                   |
| Stop      | One job on the route (`Stop` in `content/route.ts`)             |
| Tour      | Stepping through the stops (`useRouteTour`)                     |
| Open tabs | The projects section; each project is a browser window          |
| Toolbox   | The skills section; a picked skill lights up stops and projects |
| Dock      | The phone layout's corner waypoint chip and menu                |

## Consistency Scoring

| Category      | Weight | Score Range |
| ------------- | ------ | ----------- |
| Naming        | 30%    | 0-10        |
| Patterns      | 50%    | 0-10        |
| Documentation | 20%    | 0-10        |

**Overall Score = Weighted Average**

- **9-10**: Matches project standards
- **7-8**: Minor deviations
- **5-6**: Notable inconsistencies
- **0-4**: Major rework needed

## Review Process

### Step 1: Automated Checks

```bash
npm run check
```

Runs typecheck, oxlint and the oxfmt check. There are no tests in this repo yet.

### Step 2: Pattern Analysis

Find the closest existing code and compare:

```bash
# Sections and their styles
ls src/components/*/
# How an existing section does the same thing
grep -rn "scrollMarginTop\|SectionHeading" src/components
```

### Step 3: Documentation

- This file updated if a convention changed on purpose
- README updated if the stack or setup changed
- Comments follow the style above

### Step 4: Naming Audit

Read every new identifier, key and file name against the conventions above.

## Output

List each finding as `file:line`, then one sentence on what's wrong and one on the fix. Group by category, most important first, then give the score.
