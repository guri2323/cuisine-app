# Cuisine Browser (Vite + React + TypeScript)

Discover curated dishes from around the world with a modern, single-page experience built using Vite, React, TypeScript, Tailwind CSS, and React Router.

## Features
- Home grid of cuisine cards with imagery, region badge, difficulty, and time.
- Detail page for each cuisine with description, timings, ingredients, and steps.
- Responsive, dark-styled UI with Tailwind and subtle gradients.
- Data-driven structure via `src/data/cuisines.ts`.

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS
- React Router v6
- React Icons

## Getting Started
1) Install dependencies:
```bash
npm install
```
2) Run the dev server:
```bash
npm run dev
```
3) Build for production:
```bash
npm run build
```
4) Preview the production build:
```bash
npm run preview
```

## Project Structure
- `src/App.tsx` – route definitions and layout wrapper.
- `src/components/` – layout shell and reusable cuisine card.
- `src/pages/` – home, cuisine detail, and not found views.
- `src/data/cuisines.ts` – cuisine interface and sample data.
- `src/index.css` – Tailwind imports and base styling.

## Tailwind
Configured via `tailwind.config.cjs` with content paths for Vite and a small theme extension. Global imports live in `src/index.css`.

## Deployment
- Run `npm run build` and deploy the `dist/` output with any static host (e.g., Vercel, Netlify, GitHub Pages).
