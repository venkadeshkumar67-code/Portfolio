import { useEffect, useState } from 'react';
import Icon from '../common/Icon';
import useScrolled from '../../hooks/useScrolled';
import useActiveSection from '../../hooks/useActiveSection';
import { navLinks, profile } from '../../data/siteData';
import './Navbar.css';

const SECTION_IDS = navLinks.map((link) => link.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(12);
  const activeId = useActiveSection(SECTION_IDS);

  // Close the mobile menu on Escape or when the viewport grows past the breakpoint.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`} id="top">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#top" aria-label={`${profile.name} — back to top`}>
          <span className="navbar__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="navbar__wordmark">
            venkatesh<span className="navbar__dot">.</span>
          </span>
        </a>

        <nav
          id="primary-nav"
          className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeId === link.id ? 'is-active' : ''}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="btn btn--ghost btn--sm navbar__cta" href={profile.resume} download>
            Resume
            <Icon name="download" />
          </a>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar__bars" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
}
