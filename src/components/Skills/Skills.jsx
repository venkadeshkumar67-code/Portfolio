import Section from '../common/Section';
import Reveal from '../common/Reveal';
import { coreStrengths, skillGroups } from '../../data/siteData';
import './Skills.css';

export default function Skills() {
  return (
    <Section
      id="skills"
      alt
      eyebrow="02 — Skills"
      title="The toolkit"
      lead="Languages, frameworks and platforms I work with day to day."
    >
      <div className="skills__grid">
        {skillGroups.map((group, index) => (
          <Reveal as="article" key={group.title} delay={index * 70} className="card skills__card">
            <div className="skills__head">
              <span className="skills__dot" style={{ '--dot-color': group.color }} />
              <h3 className="card-title skills__title">{group.title}</h3>
            </div>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="skills__strengths">
        <h3 className="skills__strengths-title mono">Core strengths</h3>
        <ul className="skills__strength-list">
          {coreStrengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
