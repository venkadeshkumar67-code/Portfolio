import Reveal from './Reveal';
import './Section.css';

/**
 * Standard page section: handles the id anchor, container, eyebrow,
 * title and lead paragraph so every section shares the same rhythm.
 */
export default function Section({
  id,
  eyebrow,
  title,
  lead,
  alt = false,
  className = '',
  children,
}) {
  const classes = ['section', alt ? 'section--alt' : '', className].filter(Boolean).join(' ');

  return (
    <section id={id} className={classes} aria-labelledby={`${id}-title`}>
      <div className="container">
        {(eyebrow || title || lead) && (
          <Reveal className="section-head">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 id={`${id}-title`} className="section-title">
                {title}
              </h2>
            )}
            {lead && <p className="section-lead">{lead}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
