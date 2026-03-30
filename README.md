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

## Deploy on Vercel

1. Push this repo to GitHub and [import the project](https://vercel.com/new) in Vercel (framework **Vite** is detected automatically; build is `npm run build`, output **`dist`**).
2. **Environment variables** (Project → Settings → Environment Variables), for **Production** and **Preview**:
   - `VITE_BOLNA_API_KEY` — Bolna API bearer token  
   - `VITE_BOLNA_AGENT_ID` — outbound agent UUID  
   Redeploy after saving. Without these, the voice demo shows a setup notice and stays disabled (keys are not committed to git).
3. `vercel.json` includes SPA **rewrites** to `index.html` (per [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite)) and long-cache headers for hashed `/assets/*` files.

Local secrets: copy `.env.example` to `.env.local` and fill values (`.env.local` is gitignored).

Next suggestions (optional):
- Add TypeScript if you want stronger types.
- Add unit/integration tests for interactive components.

