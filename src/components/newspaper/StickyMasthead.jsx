import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SITE, resumeUrl } from '../../config/siteConfig';

export default function StickyMasthead() {
  const { pathname } = useLocation();
  const workActive =
    pathname === '/' || pathname === '/work' || pathname.startsWith('/projects');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`stickymast ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="sm-inner" style={{ opacity: '1' }}>
        <Link to="/" className="sm-name">
          {SITE.name}
        </Link>
        <nav className="sm-nav" aria-label="Primary">
          <Link to="/" className={`sm-link ${workActive ? 'is-active' : ''}`}>
            Work
          </Link>
          <NavLink
            to="/about"
            className={({ isActive }) => `sm-link ${isActive ? 'is-active' : ''}`}
          >
            About
          </NavLink>
          <a href={resumeUrl()} download className="sm-link">
            Resume
          </a>
          <a
            href={SITE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm-link"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </div>
  );
}
