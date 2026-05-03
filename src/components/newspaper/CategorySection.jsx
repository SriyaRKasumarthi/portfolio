import ProjectCard from './ProjectCard';

export default function CategorySection({ category, projects, sectionIdx }) {
  if (!projects.length) return null;
  return (
    <section className="cat-section" style={{ '--cat-stagger': `${sectionIdx * 80}ms` }}>
      <header className="cat-header">
        <div className="cat-rule cat-rule-l" aria-hidden="true" />
        <div className="cat-header-mid">
          <div className="cat-kicker">— Section {String(sectionIdx + 1).padStart(2, '0')} —</div>
          <h2 className="cat-title">{category}</h2>
          <div className="cat-sub">
            {projects.length} {projects.length === 1 ? 'entry' : 'entries'}
          </div>
        </div>
        <div className="cat-rule cat-rule-r" aria-hidden="true" />
      </header>
      <div className="cat-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} idx={i} />
        ))}
      </div>
    </section>
  );
}
