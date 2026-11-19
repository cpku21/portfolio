# Srdjan Vasic — Developer Portfolio

![Portfolio preview](./public/og.png)

A focused, responsive developer portfolio built to present my work, technical growth, and engineering mindset to recruiters and development teams.

The site highlights my main full-stack project, **RentMyCar**, alongside earlier applications that document my progression from React fundamentals to independently building and deploying full-stack products.

## Live site

**Portfolio:** [srdjan-vasic.vercel.app](https://srdjan-vasic.vercel.app/)

## Purpose

This portfolio is designed to answer the questions a recruiter or developer usually has when reviewing a junior candidate:

- Who is the developer?
- What can they build?
- Which technologies have they used in real projects?
- Can their work be opened and tested?
- How has their knowledge progressed over time?
- How can they be contacted?

Instead of functioning as a generic personal landing page, the site is structured as a concise case-study-style introduction to my development work.

## Featured project

### RentMyCar

A full-stack peer-to-peer car rental marketplace where vehicle owners can publish cars and renters can search, book, and manage reservations.

- **Live application:** [rent-my-car-app.vercel.app](https://rent-my-car-app.vercel.app/)
- **Source code:** [stefan-lukic/rent-my-car-app](https://github.com/stefan-lukic/rent-my-car-app)
- **Core technologies:** Next.js 14, TypeScript, MongoDB, Mongoose, NextAuth and Vitest
- **Main areas of focus:** authentication, ownership checks, availability, responsive booking flows and automated testing

The repository is owned by my mentor, Stefan Lukic. I am developing the application as my primary portfolio project under mentorship and code review.

## Earlier work

The portfolio also includes two earlier tutoring-platform projects that show a clear learning path:

### Educator v2

A structured Next.js application developed with mentor guidance, reusable TypeScript components, Redux state management, form validation and a more disciplined project architecture.

### Educator v1

A React application connected to a Spring Boot API, with typed service modules, JWT authentication, protected routes, search flows and reusable UI components.

## Technology stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 14 — App Router |
| UI | React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS and custom global CSS |
| Fonts | `next/font` with Inter and Roboto Mono |
| Metadata | Next.js Metadata API and Open Graph image |
| Code quality | ESLint, TypeScript strict checking and production builds |
| Hosting | Vercel |
| Source control | Git and GitHub |

## Main features

- Responsive single-page layout for desktop, tablet and mobile screens
- Clear navigation between work, background and contact sections
- Featured-project presentation with direct live-demo and repository links
- Earlier-work archive showing technical progression
- Skills and technology overview
- Engineering-background and development-journey sections
- Direct email contact call to action
- Open Graph and Twitter metadata for richer link previews
- Reduced-motion support for users who prefer less animation
- Semantic headings, landmarks and accessible labels
- Static generation for a small, fast production bundle

## Design approach

The visual system uses a limited palette, bold typography and strong contrast to keep the site memorable without distracting from the work.

- **Dark ink:** primary text and high-contrast sections
- **Warm paper:** main background and softer content areas
- **Acid green:** accent color for calls to action and section markers
- **Editorial layout:** oversized headings, numbered sections and deliberate spacing
- **Responsive composition:** layouts collapse into readable single-column sections on smaller screens

The interface is intentionally lightweight: it does not require a component library or unnecessary client-side JavaScript.

## Project structure

```text
portfolio/
├── app/
│   ├── globals.css       # Design system, layouts and responsive styles
│   ├── layout.tsx        # Root layout, fonts and SEO/social metadata
│   └── page.tsx          # Portfolio page content and sections
├── public/
│   ├── favicon.svg       # Browser icon
│   └── og.png            # Social sharing and README preview image
├── next.config.mjs       # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.ts    # Tailwind content configuration
├── tsconfig.json         # Strict TypeScript configuration
└── package.json          # Scripts and dependencies
```

## Getting started locally

### Prerequisites

- Node.js 20 LTS or newer
- npm
- Git

### Installation

```powershell
git clone https://github.com/cpku21/portfolio.git
Set-Location portfolio
npm install
```

### Development server

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the local Next.js development server |
| `npm run lint` | Checks the project with ESLint |
| `npm run typecheck` | Runs TypeScript without emitting build files |
| `npm run build` | Creates and validates an optimized production build |
| `npm run start` | Runs the previously created production build |

## Environment variables

The portfolio does not require secrets or backend credentials.

The optional `NEXT_PUBLIC_SITE_URL` variable can be used to define the canonical metadata base outside Vercel:

```env
NEXT_PUBLIC_SITE_URL=https://example.com
```

On Vercel, the application can use `VERCEL_PROJECT_PRODUCTION_URL` automatically. During local development it falls back to `http://localhost:3000`.

## Quality checks

Before a change is considered ready, the project should pass:

```powershell
npm run lint
npm run typecheck
npm run build
```

The current page is statically generated by Next.js, which keeps the runtime simple and avoids unnecessary client-side work.

## Deployment

The `main` branch is connected to Vercel.

1. A change is pushed to GitHub.
2. Vercel automatically creates a production deployment.
3. The build runs and validates the Next.js application.
4. A successful deployment becomes available at [srdjan-vasic.vercel.app](https://srdjan-vasic.vercel.app/).

This workflow keeps the public portfolio synchronized with the latest version of the repository.

## Roadmap

The portfolio is intentionally useful in its current form and can evolve alongside my work. Planned improvements include:

- Replacing project mockups with polished real application screenshots
- Adding detailed case studies for major projects
- Linking the earlier projects when their public repositories and deployments are ready
- Adding automated accessibility and end-to-end checks
- Expanding project descriptions with concrete engineering decisions and results

## Author

**Srdjan Vasic**  
Full-stack developer and mechanical engineer

- Portfolio: [srdjan-vasic.vercel.app](https://srdjan-vasic.vercel.app/)
- GitHub: [github.com/cpku21](https://github.com/cpku21)
- Email: [srdjanns95@gmail.com](mailto:srdjanns95@gmail.com)

I am currently open to junior software development opportunities where I can contribute, learn from experienced developers and continue building reliable, user-focused products.


## Editing content

All text on the site (profile, projects, skills, links) lives in `app/content.ts`. Edit that file, run `npm run build` to check, and push; Vercel redeploys automatically.
