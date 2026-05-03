import Rule from './Rule';
import { SITE } from '../../config/siteConfig';

/**
 * Replaces the dark ProjectLayout hero with the newspaper case study chrome
 * (matches design-reference CaseStudyPage structure).
 * Legacy Tailwind inside children is overridden in newspaper-portfolio.css
 * under `.legacy-case-study-root .case-legacy-content`.
 */
export default function NewspaperProjectLayout({
  title,
  subtitle,
  categoryLabel = 'Project',
  year,
  heroImage,
  children,
}) {
  return (
    <article className="case legacy-case-study-root">
      <div className="case-eyebrow">{categoryLabel}</div>
      <h1 className="case-title">{title}</h1>
      {subtitle ? <p className="case-deck">{subtitle}</p> : null}
      <Rule kind="double" />
      <div className="case-byline">
        <span>{SITE.name}</span>
        <span className="dot">·</span>
        <span className="meta-mono">{year || '—'}</span>
      </div>
      {heroImage ? (
        <figure className="case-hero">
          <img src={heroImage} alt="" className="case-hero-img" />
        </figure>
      ) : null}
      <div className="case-body case-legacy-content">{children}</div>
    </article>
  );
}
