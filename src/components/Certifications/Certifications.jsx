import Section from '../common/Section';
import Reveal from '../common/Reveal';
import { certifications } from '../../data/siteData';
import './Certifications.css';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      alt
      eyebrow="04 — Credentials"
      title="Certifications & training"
      lead="Structured learning continued alongside full-time study and project work."
    >
      <ul className="certs__grid">
        {certifications.map((item, index) => (
          <Reveal as="li" key={`${item.name}-${item.year}`} delay={index * 60} className="card certs__card">
            <span className="certs__year mono">{item.year}</span>
            <h3 className="certs__name">{item.name}</h3>
            <p className="certs__issuer">{item.issuer}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
