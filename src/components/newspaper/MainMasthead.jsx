import Rule from './Rule';
import { SITE } from '../../config/siteConfig';

export default function MainMasthead() {
  return (
    <header className="masthead" id="top">
      <h1 className="title">
        <span className="title-the">The</span>
        <span className="title-main">{SITE.mastheadTitle}</span>
      </h1>
      <p className="title-tagline">{SITE.mastheadTagline}</p>
      <Rule kind="double" />
      <div className="masthead-byline">
        <span>
          BY <em>{SITE.name}</em>
        </span>
        <span className="mb-dot">●</span>
        <span>{SITE.mastheadBylineRole}</span>
      </div>
    </header>
  );
}
