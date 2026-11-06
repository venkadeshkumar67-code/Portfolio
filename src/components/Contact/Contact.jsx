import Reveal from '../common/Reveal';
import Icon from '../common/Icon';
import { profile, socials } from '../../data/siteData';
import './Contact.css';

export default function Contact() {
  const github = socials.find((social) => social.icon === 'github');
  const linkedin = socials.find((social) => social.icon === 'linkedin');

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact__panel">
          <p className="eyebrow contact__eyebrow">06 — Contact</p>

          <h2 id="contact-title" className="section-title contact__title">
            Let's build something
            <br />
            <span className="grad">worth shipping.</span>
          </h2>

          <p className="section-lead contact__lead">
            I'm looking for an entry-level software developer role where I can contribute from day
            one and keep growing. If that sounds useful to your team, I'd love to talk.
          </p>

          <div className="contact__actions">
            <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
              <Icon name="mail" />
              {profile.email}
            </a>
            <a className="btn btn--ghost btn--lg" href={profile.phoneHref}>
              <Icon name="phone" />
              {profile.phone}
            </a>
          </div>

          <ul className="contact__meta">
            <li>
              <Icon name="pin" />
              {profile.location}
            </li>
            <li>
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                github.com/venkadeshkumar67-code
              </a>
            </li>
            <li>
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                linkedin.com/in/venkatesh-kumar-66a65a301
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
