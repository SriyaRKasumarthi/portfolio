import { useMemo, useState, useEffect } from 'react';
import MainMasthead from '../components/newspaper/MainMasthead';
import NewspaperFilterBar from '../components/newspaper/NewspaperFilterBar';
import CategorySection from '../components/newspaper/CategorySection';
import NoResults from '../components/newspaper/NoResults';
import Rule from '../components/newspaper/Rule';
import { CATEGORIES, PROJECTS } from '../data/projects';

export default function HomePage() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [active, query]);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (active !== 'All' && p.category !== active) return false;
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.deck.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [active, query]);

  const grouped = useMemo(() => {
    const order = CATEGORIES.filter((c) => c !== 'All');
    return order
      .map((cat) => ({ category: cat, items: filtered.filter((p) => p.category === cat) }))
      .filter((g) => g.items.length > 0);
  }, [filtered]);

  return (
    <>
      <MainMasthead />
      <section id="work" className="portfolio-section">
        <NewspaperFilterBar
          active={active}
          onChange={setActive}
          query={query}
          setQuery={setQuery}
          total={filtered.length}
        />
        <Rule kind="thin" />
        {filtered.length === 0 ? (
          <NoResults
            query={query}
            category={active}
            onClear={() => {
              setActive('All');
              setQuery('');
            }}
          />
        ) : (
          <div key={animKey} className="classifieds">
            {grouped.map((g, i) => (
              <CategorySection key={g.category} category={g.category} projects={g.items} sectionIdx={i} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
