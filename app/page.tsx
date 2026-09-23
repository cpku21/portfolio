const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'JavaScript',
      'TypeScript',
      'React 18',
      'Next.js 14',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Responsive UI',
    ],
  },
  {
    title: 'Server and data',
    items: [
      'Node.js',
      'Next.js Route Handlers',
      'REST APIs',
      'MongoDB',
      'Mongoose',
      'NextAuth.js',
      'JWT sessions',
      'Nodemailer',
    ],
  },
  {
    title: 'Quality and workflow',
    items: [
      'Git and GitHub',
      'Vitest',
      'React Testing Library',
      'Zod',
      'React Hook Form',
      'Accessibility',
      'PWA',
      'Vercel',
    ],
  },
];

const engineeringDecisions = [
  {
    title: 'Safe booking under concurrency',
    text: 'Availability is not trusted only in the interface. The server checks the requested period, prevents self-booking and overlapping rentals, and uses an atomic update with a MongoDB transaction to avoid two users reserving the same car.',
  },
  {
    title: 'Authentication and session revocation',
    text: 'The application supports email verification, credentials sign-in and secure password reset. A session version is checked on the server so sessions created before a password reset can be rejected.',
  },
  {
    title: 'Privacy and authorization',
    text: 'Protected routes verify both identity and resource ownership. Public pages expose the city instead of the exact pickup address, and reservation contact details are available only while the booking is active.',
  },
  {
    title: 'Performance and predictable data',
    text: 'Search uses a card-shaped response, selected database fields and server-side pagination. Profile queries use focused projections and indexes, while static homepage content is rendered on the server instead of waiting for client JavaScript.',
  },
  {
    title: 'Responsive and accessible flows',
    text: 'Desktop and mobile layouts were tested separately. Dialogs received keyboard focus management, forms received accessible labels and larger tap targets, and iOS PWA scrolling and mobile navigation overlap were addressed.',
  },
  {
    title: 'Regression-oriented testing',
    text: 'Vitest and React Testing Library cover important components and business flows. I learned to test observable behaviour, not only that a configuration or implementation detail exists.',
  },
];

const earlierProjects = [
  {
    label: 'Next.js application',
    title: 'Educator v2',
    description:
      'A Next.js and TypeScript rebuild of a tutoring platform. My mentor defined the project and provided the backend, database models and API contract; I built the frontend and connected it to that API.',
    work: [
      'Reusable TypeScript components',
      'Redux Toolkit state management',
      'Typed API requests and authentication flows',
      'Protected pages and Formik/Yup validation',
    ],
    stack: ['Next.js 13', 'TypeScript', 'Redux Toolkit', 'Formik', 'Yup'],
  },
  {
    label: 'React application',
    title: 'Educator v1',
    description:
      'My first larger React application and the point where separate lessons became a connected product. The Spring Boot backend and data models were mentor-provided; I implemented the frontend against the existing API.',
    work: [
      'Responsive screens and reusable UI',
      'Typed Axios services',
      'JWT authentication and protected routes',
      'Search, forms and the main tutoring workflows',
    ],
    stack: ['React 18', 'TypeScript', 'React Router', 'Axios'],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="logo" href="#top" aria-label="Srdjan Vasic home">
          Srdjan Vasic
        </a>
        <div className="navLinks">
          <a href="#work">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a className="navCta" href="mailto:srdjanns95@gmail.com">
            Contact
          </a>
        </div>
      </nav>

      <section className="hero pageShell" id="top">
        <p className="eyebrow">
          <span className="statusDot" /> Open to junior opportunities
        </p>
        <h1>Junior frontend developer building dependable web products.</h1>
        <p className="heroText">
          I work mainly with React, Next.js and TypeScript. My strongest
          project is RentMyCar, a peer-to-peer car rental demo where I have
          worked across responsive interfaces, API integration,
          authentication, booking rules, database consistency, security,
          testing and deployment.
        </p>
        <p className="heroSupportingText">
          I also have a mechanical engineering background, which shaped the
          way I approach software: break a complex system into smaller parts,
          understand how they interact and verify the result instead of relying
          on assumptions.
        </p>
        <div className="heroActions">
          <a className="button buttonPrimary" href="#work">
            View projects
          </a>
          <a
            className="button buttonSecondary"
            href="https://github.com/cpku21"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button buttonSecondary"
            href="https://www.linkedin.com/in/srdjanvasic-dev/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>

        <dl className="quickFacts" aria-label="Profile summary">
          <div>
            <dt>Focus</dt>
            <dd>React and Next.js</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Serbia</dd>
          </div>
          <div>
            <dt>Looking for</dt>
            <dd>Junior frontend role</dd>
          </div>
          <div>
            <dt>Current work</dt>
            <dd>RentMyCar</dd>
          </div>
        </dl>
      </section>

      <section className="section pageShell" id="skills">
        <div className="sectionHeading">
          <p className="sectionLabel">Skills</p>
          <div>
            <h2>Technologies I have used in real project flows</h2>
            <p>
              I do not treat this as a list of keywords. These are tools I have
              used while building interfaces, connecting APIs, protecting
              actions, validating data and testing user behaviour.
            </p>
          </div>
        </div>

        <div className="skillsGrid">
          {skillGroups.map((group) => (
            <article className="skillGroup" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="projectSection" id="work">
        <div className="pageShell">
          <div className="sectionHeading projectHeading">
            <p className="sectionLabel">Featured project</p>
            <div>
              <h2>RentMyCar</h2>
              <p>
                A peer-to-peer car rental demo for Serbia, designed for both
                people who need a car and owners who want to publish one.
              </p>
            </div>
          </div>

          <div className="projectOverview">
            <div className="projectSummary">
              <h3>What the product does</h3>
              <p>
                Renters can search by city and dates, filter available cars,
                inspect public details, book a vehicle, follow reservation
                status and leave a review. Owners can publish and edit cars,
                manage incoming bookings and cancel when a vehicle becomes
                unavailable.
              </p>
              <p>
                The same account can act as renter and owner. The application
                includes separate desktop and mobile experiences and can be
                installed as a PWA.
              </p>
            </div>

            <aside className="projectRole">
              <h3>My work</h3>
              <p>
                I built and refined the product through mentor feedback and
                code review. My work covered frontend flows and API integration,
                followed by increasingly deeper work on route handlers,
                authorization, MongoDB operations, validation, tests,
                performance and production behaviour.
              </p>
              <p>
                This is a portfolio demo, not a production rental company. It
                does not process payments, deposits or insurance, and that
                limitation is stated clearly in the product.
              </p>
            </aside>
          </div>

          <div className="userFlows">
            <article>
              <h3>Renter flow</h3>
              <ul className="checkList">
                <li>Search available cars by location and rental dates</li>
                <li>Filter by price, make, type, engine and seats</li>
                <li>Keep filters while moving between search and details</li>
                <li>Book, cancel under the policy and keep rental history</li>
                <li>Receive verification, booking and cancellation emails</li>
              </ul>
            </article>
            <article>
              <h3>Owner flow</h3>
              <ul className="checkList">
                <li>Publish, update and remove owned vehicle listings</li>
                <li>Review incoming reservations from the profile dashboard</li>
                <li>See contact details only for an active reservation</li>
                <li>Cancel a booking until its start if a car is unavailable</li>
                <li>Release reserved dates immediately after cancellation</li>
              </ul>
            </article>
          </div>

          <div className="decisionSection">
            <h3>Engineering decisions I can explain</h3>
            <div className="decisionGrid">
              {engineeringDecisions.map((decision) => (
                <article key={decision.title}>
                  <h4>{decision.title}</h4>
                  <p>{decision.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="stackBlock">
            <h3>Technology stack</h3>
            <ul className="tagList" aria-label="RentMyCar technologies">
              {[
                'Next.js 14 App Router',
                'React 18',
                'TypeScript',
                'MongoDB',
                'Mongoose',
                'NextAuth.js',
                'React Hook Form',
                'Zod',
                'Tailwind CSS',
                'Radix UI',
                'Nodemailer',
                'Vitest',
                'React Testing Library',
                'next-pwa',
                'Vercel Analytics',
              ].map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <div className="projectActions">
            <a
              className="button buttonPrimary"
              href="https://rent-my-car-app.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Open live demo <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button buttonSecondary"
              href="https://github.com/stefan-lukic/rent-my-car-app"
              target="_blank"
              rel="noreferrer"
            >
              View repository <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section pageShell" aria-labelledby="earlier-work">
        <div className="sectionHeading">
          <p className="sectionLabel">Earlier work</p>
          <div>
            <h2 id="earlier-work">How the projects connect</h2>
            <p>
              The Educator projects established my frontend foundations.
              RentMyCar became the next step: understanding how the interface,
              server, database and business rules form one system.
            </p>
          </div>
        </div>

        <div className="earlierGrid">
          {earlierProjects.map((project) => (
            <article className="earlierCard" key={project.title}>
              <p className="cardLabel">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <h4>What I worked on</h4>
              <ul className="checkList compactList">
                {project.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul
                className="tagList compactTags"
                aria-label={`${project.title} technologies`}
              >
                {project.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="aboutSection" id="about">
        <div className="pageShell aboutGrid">
          <p className="sectionLabel">About me</p>
          <div>
            <h2>Engineering discipline with a developer&apos;s curiosity</h2>
            <p>
              I am a self-taught developer with a mechanical engineering
              background. I learn best by building complete flows, receiving
              direct feedback and then improving both the implementation and
              my understanding of why it works.
            </p>
            <p>
              My current goal is a junior frontend role where I can contribute
              with React and TypeScript, continue learning from experienced
              engineers and gradually take ownership of larger product areas.
              I care about readable code, predictable user flows, accessibility
              and verifying behaviour before calling a task finished.
            </p>
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="pageShell contactGrid">
          <div>
            <p className="sectionLabel">Contact</p>
            <h2>Let&apos;s talk about a junior opportunity.</h2>
          </div>
          <div className="contactLinks">
            <a href="mailto:srdjanns95@gmail.com">srdjanns95@gmail.com</a>
            <a
              href="https://github.com/cpku21"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/srdjanvasic-dev/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="pageShell">
        <p>© 2026 Srdjan Vasic</p>
        <p>Built with Next.js and TypeScript</p>
      </footer>
    </main>
  );
}
