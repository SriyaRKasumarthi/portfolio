import Rule from './Rule';

/**
 * Replaces the dark ProjectLayout hero with the newspaper case study chrome.
 * Inner content (Tailwind / legacy dark-theme classes) is styled via
 * `case-legacy-content` overrides in newspaper-portfolio.css.
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
      <div className="case-eyebrow">
        {categoryLabel}
        {year ? ` · ${year}` : ''}
      </div>
      <h1 className="case-title">{title}</h1>
      {subtitle ? <p className="case-deck">{subtitle}</p> : null}
      <Rule kind="double" />
      {heroImage ? (
        <figure className="case-hero">
          <img src={heroImage} alt="" className="case-hero-img" />
        </figure>
      ) : null}
      <div className="case-body case-legacy-content">{children}</div>
    </article>
  );
}
