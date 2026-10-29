# My Personal Website

This is the source code for my personal website. It's fully responsive and is built with TypeScript, React, StyleX, Motion and Vite, with Day and Night themes. Content comes from Contentful (fetched with React Query), so I don't have to make code changes to update things like skills or experience. It's live at https://abelasfaw.com.

## Development

```bash
npm install
npm run dev
```

`npm run check` runs the typecheck, oxlint and the oxfmt check. `npm install` also sets up [lefthook](https://lefthook.dev) hooks: pre-commit lints, format-checks and typechecks staged files, and pre-push runs the review in `.claude/skills/pre-push-review`.
