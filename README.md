# Portfolio Next.js

A polished personal portfolio starter built with **Next.js (App Router)** and **TypeScript**.

## Features

- Responsive portfolio layout for mobile, tablet, and desktop
- Editable sections: Hero, About, Skills, Projects, Journey, and Contact
- Light/dark mode toggle with persisted preference in `localStorage`
- System theme respected by default when no saved preference exists
- Accessible semantic structure, keyboard-friendly controls, and focus styles
- Subtle animations with `prefers-reduced-motion` support

## Tech Stack

- Next.js
- React
- TypeScript
- ESLint

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3) Lint the project

```bash
npm run lint
```

### 4) Build for production

```bash
npm run build
```

## Customization Guide

Most editable content lives in:

- `/home/runner/work/portfolio-nextjs/portfolio-nextjs/lib/portfolio-data.ts`

Update name, summary, skills, projects, journey items, and contact links there.

You can adjust design tokens and component styling in:

- `/home/runner/work/portfolio-nextjs/portfolio-nextjs/app/globals.css`

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Deployment

This app can be deployed on any Next.js-compatible host (for example Vercel, Netlify, or a custom Node.js server).
