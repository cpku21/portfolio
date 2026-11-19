// All text on the site lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Srdjan Vasic',
  title: 'Full-Stack Developer',
  headline:
    'Full-stack developer building and shipping web products with React, Next.js and TypeScript.',
  intro:
    'I take products from the first screen to the production database: interfaces, APIs, data models, tests and deployment. I am self-taught, with a mechanical engineering background, and I use AI tools daily while reviewing, testing and owning what ships.',
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
      'A Serbian football trivia game on a 3×3 board: name a player who matches both the row and the column. Designed, built and run by me.',
    highlights: [
      'Local, solo and real-time online matches with server-timed turns and sets',
      'Custom-board mode where each player picks the criteria, checked on the server',
      'Daily challenge with a monthly leaderboard',
      'PostgreSQL database of 2,700+ players built from Wikipedia and Transfermarkt data',
      'Answers validated only on the server; ~1,700 tests, Playwright flows and a layout audit',
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
    items: ['Vitest', 'React Testing Library', 'Playwright', 'Zod', 'Git and GitHub', 'Vercel', 'PWA', 'AI-assisted development'],
  },
];
