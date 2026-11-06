import Icon from '../common/Icon';
import CodeCard from './CodeCard';
import useTypewriter from '../../hooks/useTypewriter';
import { profile, socials, stats } from '../../data/siteData';
import './Hero.css';

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--one" />
        <span className="hero__orb hero__orb--two" />
        <span className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__status">
            <span className="pulse" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 id="hero-title" className="hero__title">
            Hi, I'm <span className="grad">{profile.name}</span>
          </h1>

          <p className="hero__role">
            <span className="mono hero__role-glyph">&lt;/&gt;</span>
            <span className="hero__role-text" aria-live="polite">
              {role}
            </span>
            <span className="hero__caret" aria-hidden="true" />
          </p>

          <p className="hero__lede">{profile.lede}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View my work
              <Icon name="arrowRight" />
            </a>
            <a className="btn btn--ghost" href={profile.resume} download>
              Download resume
              <Icon name="download" />
            </a>
          </div>

          <ul className="socials" aria-label="Social links">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  {...(social.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <Icon name={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__panel">
          <CodeCard />

          <ul className="hero__stats">
            {stats.map((stat) => (
              <li key={stat.label}>
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
