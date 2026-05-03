import { CATEGORIES } from '../../data/projects';

export default function NewspaperFilterBar({
  active,
  onChange,
  query,
  setQuery,
  total,
}) {
  return (
    <section className="filterbar" aria-label="Filters">
      <div className="filter-tabs" role="tablist">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            className={`tab ${active === c ? 'tab-active' : ''}`}
            onClick={() => onChange(c)}
          >
            <span className="tab-label">{c}</span>
            <span className="tab-underline" />
          </button>
        ))}
      </div>
      <div className="filter-search">
        <div className="search-field">
          <svg viewBox="0 0 24 24" className="search-glass" aria-hidden="true">
            <circle cx="10" cy="10" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <line
              x1="14.6"
              y1="14.6"
              x2="20"
              y2="20"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder=" Search the Archive"
            aria-label="Search"
          />
          {query ? (
            <button
              type="button"
              className="search-clear"
              onClick={() => setQuery('')}
              aria-label="Clear"
            >
              ×
            </button>
          ) : null}
        </div>
      </div>
      <div className="breadcrumb">
        <span className="bc-count">
          {total} {total === 1 ? 'project' : 'projects'}
        </span>
      </div>
    </section>
  );
}
