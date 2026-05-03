import Rule from './Rule';
import { SITE, resumeUrl } from '../../config/siteConfig';

export default function ColophonFooter() {
  return (
    <>
      <Rule kind="fancy" />
      <footer className="colophon" id="contact">
        <nav className="col-mini" aria-label="Footer">
          <a href={resumeUrl()} download className="col-bracket-link" data-cursor="hover">
            <span className="bl-bracket bl-l" aria-hidden="true">
              [
            </span>
            <span className="bl-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="100%"
                height="100%"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3 V15" />
                <path d="M7 10 L12 15 L17 10" />
                <path d="M4 19 H20" />
              </svg>
            </span>
            <span className="bl-body">
              <span className="bl-eyebrow">Resume</span>
              <span className="bl-label">Download Resume</span>
            </span>
            <span className="bl-bracket bl-r" aria-hidden="true">
              ]
            </span>
          </a>
          <a
            href={SITE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-bracket-link"
            data-cursor="hover"
          >
            <span className="bl-bracket bl-l" aria-hidden="true">
              [
            </span>
            <span className="bl-icon bl-icon-in" aria-hidden="true">
              in
            </span>
            <span className="bl-body">
              <span className="bl-eyebrow">Professional Record</span>
              <span className="bl-label">LinkedIn</span>
            </span>
            <span className="bl-bracket bl-r" aria-hidden="true">
              ]
            </span>
          </a>
          <a href={`mailto:${SITE.email}`} className="col-bracket-link" data-cursor="hover">
            <span className="bl-bracket bl-l" aria-hidden="true">
              [
            </span>
            <span className="bl-icon" aria-hidden="true">
              ✎
            </span>
            <span className="bl-body">
              <span className="bl-eyebrow">Correspondence</span>
              <span className="bl-label">{SITE.email}</span>
            </span>
            <span className="bl-bracket bl-r" aria-hidden="true">
              ]
            </span>
          </a>
        </nav>

        <Rule kind="thin" />

        <p className="col-creed">
          © {new Date().getFullYear()} {SITE.name}. Printed on a virtual press —{' '}
          {SITE.mastheadTitle}.
        </p>
      </footer>
    </>
  );
}
