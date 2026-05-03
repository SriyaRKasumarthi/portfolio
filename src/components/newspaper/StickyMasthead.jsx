import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SITE, resumeUrl } from '../../config/siteConfig';

export default function StickyMasthead() {
  const { pathname } = useLocation();
  const workActive =
    pathname === '/' || pathname === '/work' || pathname.startsWith('/projects');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const getScrollTop = () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const onScroll = () => setScrolled(getScrollTop() > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll, { capture: true });
    };
  }, []);

  useEffect(() => {
    const top =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    setScrolled(top > 0);
  }, [pathname]);

  const dynamicHeaderVars = {
    '--stickymast-alpha': scrolled ? 0.86 : 1,
    '--stickymast-border-alpha': scrolled ? 0.18 : 0,
    '--stickymast-shadow-alpha': scrolled ? 0.48 : 0,
    '--stickymast-blur': scrolled ? '12px' : '0px',
    '--stickymast-sat': scrolled ? '150%' : '100%',
  };

  return (
    <div
      className={`stickymast ${scrolled ? 'is-scrolled' : ''}`}
      data-scrolled={scrolled ? '1' : '0'}
      style={dynamicHeaderVars}
    >
      <div className="sm-inner">
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
