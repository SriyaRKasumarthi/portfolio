import { Link } from 'react-router-dom';
import Halftone from './Halftone';

export default function ProjectCard({ p, idx }) {
  const style = { '--stagger': `${idx * 45}ms` };
  const to = p.hasCaseStudy ? `/projects/${p.slug}` : '/';

  const thumb = p.image ? (
    <img src={p.image} alt="" className="ad-thumb-img" />
  ) : (
    <Halftone tone={p.tone} seed={idx + 3} className="ad-thumb" aspect="1 / 1" />
  );

  const meta = (
    <div className="ad-meta-top">
      <span className="ad-num">№ {String(idx + 1).padStart(2, '0')}</span>
      <span className="ad-dot">·</span>
      <span className="ad-date">{p.date}</span>
    </div>
  );

  const foot = (
    <div className="ad-foot">
      <span className="ad-role">Role · {p.role}</span>
      {p.hasCaseStudy ? (
        <Link to={to} className="ad-cta" data-cursor="hover">
          <span className="ad-cta-label">Read</span>
          <span className="ad-cta-arr">→</span>
        </Link>
      ) : (
        <span className="ad-cta ad-cta--disabled">
          <span className="ad-cta-label">Read</span>
          <span className="ad-cta-arr">→</span>
        </span>
      )}
    </div>
  );

  return (
    <article className="ad-card" style={style}>
      {p.hasCaseStudy ? (
        <>
          <Link to={to} className="ad-thumb-link" data-cursor="hover" aria-label={p.title}>
            {thumb}
          </Link>
          <div className="ad-body">
            {meta}
            <Link to={to} className="headline-link" data-cursor="hover">
              <h3 className="ad-headline">{p.title}</h3>
            </Link>
            <p className="ad-deck">{p.deck}</p>
            {foot}
          </div>
        </>
      ) : (
        <>
          <div className="ad-thumb-link">{thumb}</div>
          <div className="ad-body">
            {meta}
            <h3 className="ad-headline">{p.title}</h3>
            <p className="ad-deck">{p.deck}</p>
            {foot}
          </div>
        </>
      )}
    </article>
  );
}
