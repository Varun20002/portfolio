# Varun — Portfolio (refactor)

This repository contains a refactored React app for a personal portfolio. The UI markup uses Tailwind-style utility classes — for the original design fidelity install Tailwind CSS or a utility-first setup. The repo is structured to separate presentational pieces into small components.

Quick start:

1. Install deps:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

Notes:
- The project uses Vite for development.
- Tailwind CSS is included in devDependencies. After running `npm install`, Vite will process Tailwind via PostCSS.
- The components are split under `src/components/`. Keep components small and focused.
- If you want to adjust Tailwind's theme or purge paths, edit `tailwind.config.cjs`.

Folder layout:

- public/
  - index.html
- src/
  - main.jsx
  - App.jsx
  - styles.css
  - components/
    - HeroStatCard.jsx
    - StickyNote.jsx
    - ProjectCard.jsx
    - BolnaDemo.jsx
    - CheckItem.jsx
    - CustomStyles.jsx

Next suggestions (optional):
- Add Tailwind for utilities and responsive behavior.
- Add TypeScript if you want stronger types.
- Add unit/integration tests for interactive components.

