import Section from '../common/Section';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';
import { projects } from '../../data/siteData';
import './Projects.css';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title="Selected work"
      lead="Two live websites that show the range: cloud technology services and a production college platform."
    >
      <div className="projects__grid">
        {projects.map((project) => (
          <Reveal as="article" key={project.id} className="card projects__card">
            <div className="projects__top">
              <div>
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__meta mono">
                  <span>{project.role}</span>
                  <span className="projects__sep" aria-hidden="true">
                    •
                  </span>
                  <span>{project.period}</span>
                </p>
              </div>
              <span className={`badge badge--${project.status.variant}`}>
                {project.status.variant === 'live' && (
                  <span className="pulse" aria-hidden="true" />
                )}
                {project.status.label}
              </span>
            </div>

            <p className="projects__desc">{project.description}</p>

            <ul className="projects__features">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <ul className="tags tags--sm projects__tech">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="projects__links">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  className={`btn btn--sm btn--${link.variant}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <Icon name={link.icon} />
                </a>
              ))}
              {project.secondaryLink && (
                <a
                  className="projects__secondary"
                  href={project.secondaryLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.secondaryLink.label}
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
