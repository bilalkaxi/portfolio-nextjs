import { ThemeToggle } from "@/components/theme-toggle";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          {portfolioData.hero.name}
        </a>
        <nav aria-label="Main">
          <ul className="nav-list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#journey">Journey</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </header>

      <main id="top" className="content">
        <section className="hero card reveal" aria-labelledby="hero-heading">
          <p className="eyebrow">Available for impactful engineering work</p>
          <h1 id="hero-heading">{portfolioData.hero.role}</h1>
          <p className="lead">{portfolioData.hero.tagline}</p>
          <div className="actions">
            <a className="button primary" href={portfolioData.hero.primaryCta.href}>
              {portfolioData.hero.primaryCta.label}
            </a>
            <a className="button ghost" href={portfolioData.hero.secondaryCta.href}>
              {portfolioData.hero.secondaryCta.label}
            </a>
          </div>
        </section>

        <section id="about" className="card reveal" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>{portfolioData.about}</p>
        </section>

        <section id="skills" className="card reveal" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills & Tech Stack</h2>
          <div className="skill-grid">
            {portfolioData.skills.map((group) => (
              <article key={group.category} className="soft-card">
                <h3>{group.category}</h3>
                <ul className="badge-list" aria-label={`${group.category} technologies`}>
                  {group.items.map((item) => (
                    <li key={item} className="badge">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="card reveal" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Selected Projects</h2>
          <div className="project-grid">
            {portfolioData.projects.map((project) => (
              <article key={project.title} className="project-card">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul className="badge-list" aria-label={`${project.title} technology stack`}>
                  {project.technologies.map((tech) => (
                    <li key={tech} className="badge">
                      {tech}
                    </li>
                  ))}
                </ul>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-link">
                  View project <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="card reveal" aria-labelledby="journey-heading">
          <h2 id="journey-heading">Experience & Journey</h2>
          <ol className="timeline">
            {portfolioData.journey.map((item) => (
              <li key={`${item.period}-${item.role}`} className="timeline-item">
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer id="contact" className="site-footer card reveal" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <p>
          Let&apos;s collaborate on meaningful software products. Reach out through any channel below.
        </p>
        <ul className="contact-list">
          <li>
            <a className="text-link" href={`mailto:${portfolioData.contact.email}`}>
              {portfolioData.contact.email}
            </a>
          </li>
          <li>
            <a className="text-link" href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              className="text-link"
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p className="footer-note">© {portfolioData.hero.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
