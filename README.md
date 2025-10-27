# GitHub Codespaces ♥️ Next.js

Welcome to your shiny new Codespace running Next.js! We've got everything fired up and running for you to explore Next.js.

You've got a blank canvas to work on from a git perspective as well. There's a single initial commit with the what you're seeing right now - where you go from here is up to you!

Everything you do here is contained within this one codespace. There is no repository on GitHub yet. If and when you’re ready you can click "Publish Branch" and we’ll create your repository and push up your project. If you were just exploring then and have no further need for this code then you can simply delete your codespace and it's gone forever.

## Canadian Mobile Welding — Next.js demo

This repository is a small Next.js site for "Canadian Mobile Welding" — a mobile + in-shop welding business. It uses Next.js + React with Tailwind CSS for styling. The site is mostly static content, with a homepage at `/pages/index.js` and shared `Header`/`Footer` components.

What I updated

- Rewrote this README to include install and run instructions tailored to the project.

Quick tech summary

- Framework: Next.js (see `package.json`)
- UI: React
- Styling: Tailwind CSS + a global stylesheet (`global.css`)
- Language: JavaScript (no TypeScript in this repo)

Prerequisites

- Node.js (installed in this environment: v22.15.0)
- npm (installed in this environment: 9.8.1)
- Recommended: Node.js 18+ for modern Next.js projects

Install and run (local development)

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Build and production

```bash
npm run build
npm run start
```

Available npm scripts (from package.json)

- `dev` — start Next.js dev server
- `build` — run Next.js production build
- `start` — run Next.js production server

Project layout (important files)

- `pages/` — Next.js pages. Main entry: `pages/index.js`.
- `pages/_app.js` — global wrapper that imports `global.css` and includes `Header`/`Footer`.
- `components/Header.js`, `components/Footer.js` — site header & footer.
- `public/images/` — images used by the site (services, projects, etc.).
- `global.css` — site-wide styles and Tailwind import.
- `tailwind.config.js` & `postcss.config.js` — Tailwind and PostCSS configuration.

Notes & assumptions

- The repo is JavaScript-only (no TypeScript). I didn't add TS or tests to keep edits small and low-risk.
- Image files referenced under `public/images/` are expected to exist (the homepage references several). If any image is missing the page will still render, but the broken image will appear in the browser.
- There are no environment variables required for local development.

Development tips

- Tailwind is configured and imported in `global.css`. If you change Tailwind classes, the dev server will pick up changes.
- The site uses simple client-side interactivity (review carousel, mobile menu) with React hooks in `pages/index.js` and `components/Header.js`.

Next suggested improvements

1. Add a small test suite (Jest + React Testing Library) for smoke tests on the homepage and components.
2. Add a CI pipeline (GitHub Actions) to run `npm run build` and tests on PRs.
3. Optionally migrate to TypeScript for stronger type checks.

How to contribute

1. Fork/branch and make changes.
2. Run `npm install` and `npm run dev` locally to verify behavior.
3. Open a PR with a clear description and a screenshot if you change UI.

Verification performed in this environment

- Node: v22.15.0
- npm: 9.8.1

If you'd like, I can run `npm run build` next to confirm the production build succeeds in this Codespace — say the word and I'll run it and report the result.

---

If you'd like the README shorter or prefer added sections (examples, screenshots, or deployment instructions for Vercel), tell me which and I'll update it.
