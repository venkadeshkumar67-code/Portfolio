import Section from '../common/Section';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';
import { highlights } from '../../data/siteData';
import './About.css';

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="A developer who ships, not just studies"
      lead="Most graduates arrive with coursework. I arrive with a production system that people actually depend on — and the habits that come from maintaining it."
    >
      <div className="about__grid">
        {highlights.map((item, index) => (
          <Reveal
            as="article"
            key={item.title}
            delay={index * 80}
            className="card about__card"
          >
            <div className="icon-badge">
              <Icon name={item.icon} />
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p>{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
