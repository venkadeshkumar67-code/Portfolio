import Section from '../common/Section';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';
import { education, languages } from '../../data/siteData';
import './Education.css';

export default function Education() {
  return (
    <Section id="education" eyebrow="05 — Education" title="Academic background">
      <div className="education__grid">
        <Reveal as="article" className="card education__card">
          <span className="education__expected mono">{education.expected}</span>
          <h3 className="education__degree">{education.degree}</h3>
          <p className="education__school">{education.school}</p>
          <p className="education__affiliation">{education.affiliation}</p>

          <h4 className="education__subtitle mono">Relevant coursework</h4>
          <ul className="tags tags--sm">
            {education.coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="article" delay={100} className="card education__lang-card">
          <div className="icon-badge">
            <Icon name="globe" />
          </div>
          <h3 className="card-title">Languages spoken</h3>
          <ul className="education__lang-list">
            {languages.map((language) => (
              <li key={language.name}>
                <span>{language.name}</span>
                <span className="education__level mono">{language.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
