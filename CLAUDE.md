# CLAUDE.md

This file provides guidance to coding assistants when working with code in this repository.

## Project Overview

PR Auto Transport landing page — a modern Vite + React 19 + TypeScript + TailwindCSS v4 single-page marketing site for an auto transport company (Garlas LLC). Deployed to Firebase Hosting.

## Commands

- **Dev server:** `npm run dev` (runs on localhost)
- **Build:** `npm run build` (runs typescript compilation and vite build, outputs to `build/`)
- **Preview:** `npm run preview` (previews local production build)
- **Lint:** `npm run lint` (runs oxlint)
- **Deploy:** `firebase deploy --only hosting` (site: `pr-auto-transport`, project: `data-axe-401820`)

## Architecture

**Routing** (`src/App.tsx`): React Router v7 with these routes:
- `/` — Homepage / Landing page with integrated QuoteForm, FAQ, and sections (`src/pages/landingPage/LandingPage.tsx`)
- `/asesoras` — Advisers page (`src/pages/advisers/Advisers.tsx`)
- `/blog` — Blog listing (`src/pages/blog/Blog.tsx`)
- `/blog/:id` — Blog post details (`src/pages/blogPost/BlogPost.tsx`)
- `/documentos` — Guidelines and requirements documents (`src/pages/documents/Documents.tsx`)
- `/terminos-y-condiciones` — Terms and Conditions (`src/pages/t&c/termsAndConditions.tsx`)

**Styling**:
- TailwindCSS v4 used for modern utility styling, configured via `@tailwindcss/vite` and `src/index.css`.

**Hosting**:
- Firebase Hosting with SPA rewrite (all routes → `index.html`). The `build/` directory is the deploy target.
