import Icon from '../common/Icon';
import { profile } from '../../data/siteData';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__note">
          <span className="footer__mark" aria-hidden="true">
            {profile.initials}
          </span>
          © {year} {profile.name}. Built with React, HTML, CSS &amp; JavaScript.
        </p>

        <a className="footer__top" href="#top">
          Back to top
          <Icon name="arrowUp" />
        </a>
      </div>
    </footer>
  );
}
