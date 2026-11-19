import { profile, projects, skills } from './content';

const External = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
  <a className={className} href={href} target="_blank" rel="noreferrer">
    {children} <span aria-hidden="true">↗</span>
  </a>
);

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="logo" href="#top">
          {profile.name}
        </a>
        <div className="navLinks">
          <a href="#work">Projects</a>
          <a href="#skills">Skills</a>
          <a className="navCta" href={`mailto:${profile.email}`}>
            Contact
          </a>
        </div>
      </nav>

      <section className="hero pageShell" id="top">
        <p className="eyebrow">
          <span className="statusDot" /> Open to junior opportunities
        </p>
        <h1>{profile.headline}</h1>
        <p className="heroText">{profile.intro}</p>
        <div className="heroActions">
          <a className="button buttonPrimary" href="#work">
            View projects
          </a>
          <External className="button buttonSecondary" href={profile.github}>
            GitHub
          </External>
          <External className="button buttonSecondary" href={profile.linkedin}>
            LinkedIn
          </External>
        </div>
      </section>

      <section className="section pageShell" id="work" aria-labelledby="projects-title">
        <div className="sectionHeading">
          <p className="sectionLabel">Projects</p>
          <h2 id="projects-title">What I have built</h2>
        </div>
        <div className="earlierGrid">
          {projects.map((project) => (
            <article className="earlierCard" key={project.title}>
              <p className="cardLabel">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="checkList compactList">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="tagList compactTags" aria-label={`${project.title} technologies`}>
                {project.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              {project.links.length > 0 && (
                <div className="projectActions">
                  {project.links.map((link, index) => (
                    <External
                      key={link.href}
                      className={`button ${index === 0 ? 'buttonPrimary' : 'buttonSecondary'}`}
                      href={link.href}
                    >
                      {link.label}
                    </External>
                  ))}
                </div>
              )}
              {project.note && <p className="cardNote">{project.note}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="section pageShell" id="skills" aria-labelledby="skills-title">
        <div className="sectionHeading">
          <p className="sectionLabel">Skills</p>
          <h2 id="skills-title">Tools I use in real projects</h2>
        </div>
        <div className="skillsGrid">
          {skills.map((group) => (
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

      <section className="contactSection" id="contact">
        <div className="pageShell contactGrid">
          <div>
            <p className="sectionLabel">Contact</p>
            <h2>Let&apos;s talk about a junior opportunity.</h2>
            <p>
              {profile.location} · {profile.lookingFor}
            </p>
          </div>
          <div className="contactLinks">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <External href={profile.github}>GitHub</External>
            <External href={profile.linkedin}>LinkedIn</External>
          </div>
        </div>
      </section>

      <footer className="pageShell">
        <p>© 2026 {profile.name}</p>
      </footer>
    </main>
  );
}
