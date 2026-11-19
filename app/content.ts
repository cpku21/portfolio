// All text on the site lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Srdjan Vasic',
  title: 'Full-Stack Developer',
  headline:
    'Full-stack product developer. From idea to production, with AI agents.',
  intro:
    'I own the whole product: idea, game and UX design, data model, backend, interface, tests, deployment and every release after launch. I work with AI coding agents every day and direct them like a team: I set the rules, plan the work, review every change and decide what ships.',
  location: 'Novi Sad, Serbia',
  lookingFor: 'Open to frontend and full-stack roles, hybrid or remote',
  email: 'srdjanns95@gmail.com',
  github: 'https://github.com/cpku21',
  linkedin: 'https://www.linkedin.com/in/srdjanvasic-dev/',
};

type Link = { label: string; href: string };

export type Project = {
  label: string;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: Link[];
  note?: string;
};

export const projects: Project[] = [
  {
    label: 'Live product · 2026',
    title: 'ViskiKoks.rs',
    description:
      'A Serbian football trivia game on a 3×3 board: name a player who matches both the row and the column. A solo product I built from scratch and run in production: concept, design, data, backend, frontend, releases.',
    highlights: [
      'Local, solo and real-time online matches with server-timed turns and sets',
      'Custom-board mode where each player picks the criteria, checked on the server',
      'Daily challenge with a monthly leaderboard',
      'PostgreSQL database of 2,700+ players built from Wikipedia and Transfermarkt data',
      'Answers validated only on the server; ~1,700 tests, Playwright flows and a layout audit',
      'Built with AI coding agents under my direction: project rules, custom check and research agents, staged plans and my approval before any database or production change',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Zod', 'Vitest', 'Playwright', 'Vercel'],
    links: [{ label: 'Play the game', href: 'https://viskikoks.rs' }],
    note: 'Source code available on request.',
  },
  {
    label: 'Portfolio project · 2026',
    title: 'RentMyCar',
    description:
      'A peer-to-peer car rental marketplace for searching, booking and publishing cars, built with mentor code reviews.',
    highlights: [
      'Search with filters, booking and cancellation, owner and renter dashboards',
      'No double bookings: transactions and atomic updates on the server',
      'Ownership checks, email verification and session revocation after password reset',
      'Private reservation data shown only while a booking is active',
    ],
    stack: ['Next.js 14', 'React 18', 'TypeScript', 'MongoDB', 'Mongoose', 'NextAuth.js', 'Tailwind CSS', 'Zod', 'Vitest'],
    links: [
      { label: 'Live demo', href: 'https://rent-my-car-app.vercel.app/' },
      { label: 'Source code', href: 'https://github.com/stefan-lukic/rent-my-car-app' },
    ],
  },
  {
    label: 'Learning project · 2023–2024',
    title: 'Educator',
    description:
      'Two versions of a tutoring platform (React, then Next.js). The mentor provided the backend and API; I built the frontend.',
    highlights: [
      'Reusable TypeScript components and typed API requests',
      'JWT authentication and protected routes',
      'Redux Toolkit state and Formik/Yup forms',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Axios'],
    links: [],
  },
];

export const approach = [
  {
    title: 'Product from scratch',
    text: 'I take an idea to a live product: define the rules, design the screens, model the data, build the backend and frontend, deploy and keep improving it from real use.',
  },
  {
    title: 'AI-assisted engineering',
    text: 'I work with AI coding agents (Claude Code) as a daily workflow: written project rules, custom agents for checks and research, step-by-step plans, and a review of every change before it is merged.',
  },
  {
    title: 'Full stack, end to end',
    text: 'Interfaces in React and Next.js, APIs and server logic, PostgreSQL and MongoDB data models, authentication, and deployment on Vercel.',
  },
  {
    title: 'Verified, not assumed',
    text: 'Mechanical engineering taught me to check results with evidence. Automated tests, browser tests, layout audits and rehearsed production migrations come before every release.',
  },
];

export const skills = [
  {
    title: 'Frontend',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Accessibility'],
  },
  {
    title: 'Backend and data',
    items: ['Node.js', 'Route Handlers', 'REST APIs', 'PostgreSQL', 'Prisma', 'SQL', 'MongoDB', 'NextAuth.js'],
  },
  {
    title: 'Quality and delivery',
    items: ['Vitest', 'React Testing Library', 'Playwright', 'Zod', 'Git and GitHub', 'Vercel', 'PWA'],
  },
  {
    title: 'AI workflow',
    items: ['Claude Code', 'AI coding agents', 'Custom subagents and skills', 'Prompt and task design', 'Agent rules (AGENTS.md)', 'Code review of AI output'],
  },
];
