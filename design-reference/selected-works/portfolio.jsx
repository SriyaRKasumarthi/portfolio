/* global React, ReactDOM, TweaksPanel, TweakSection, TweakSlider, TweakColor, TweakRadio, useTweaks */
const { useState, useEffect, useRef, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "paperTop": "#fbf7ed",
  "paperBottom": "#f5eedd",
  "ink": "#1a1612",
  "accent": "#7a1f1f",
  "grain": 0.45,
  "bodySize": 17,
  "headlineWeight": "bold"
} /*EDITMODE-END*/;

// ---------- DATA ----------
const PROJECTS = [
{ id: "p1", slug: "the-quiet-ledger", title: "The Quiet Ledger", deck: "Reimagining personal finance for people who would rather not think about it.", category: "UX Design", date: "March 2026", edition: "Vol. IV, No. 12", description: "A six-month engagement with a community credit union to soften a notoriously punishing onboarding flow. The redesign cut abandonment by 41% and won an internal accessibility commendation.", role: "Lead Designer", size: "lead", tone: "ink", hasCaseStudy: true },
{ id: "p2", slug: "field-notes", title: "Field Notes", deck: "A pocket companion for botanists working far from cell service.", category: "Mobile Apps", date: "January 2026", edition: "Vol. IV, No. 09", description: "Offline-first sketching, voice memos, and GPS-tagged specimen logs. Built for the kind of people who keep a knife in their boot.", role: "Product & Interaction", size: "tall", tone: "moss" },
{ id: "p3", slug: "almanac", title: "Almanac", deck: "A reading app that treats long-form journalism like a season, not a feed.", category: "Mobile Apps", date: "November 2025", edition: "Vol. III, No. 47", description: "Weekly issues, hand-set typography, and a deliberate refusal to surface engagement metrics. Shipped on iOS to a small but devoted audience.", role: "Founder & Designer", size: "wide", tone: "rust" },
{ id: "p4", slug: "kiln-cooperative", title: "The Kiln Co-operative", deck: "Brand and storefront for a worker-owned ceramics studio in Oakland.", category: "Web Design", date: "September 2025", edition: "Vol. III, No. 38", description: "A handmade marketplace that does not pretend to be a marketplace. Custom CMS, hand-drawn marks, and a checkout flow that reads like a letter.", role: "Identity & Web", size: "med", tone: "ochre" },
{ id: "p5", slug: "switchback", title: "Switchback", deck: "Trail planning for the rest of us — a navigation tool with strong opinions.", category: "UX Design", date: "July 2025", edition: "Vol. III, No. 28", description: "Took a category dominated by feature checklists and replaced it with three honest questions. Now in pilot with the Sierra Nevada Conservancy.", role: "Design Lead", size: "med", tone: "moss" },
{ id: "p6", slug: "house-organ", title: "House Organ", deck: "An internal newsroom for a 4,000-person engineering organization.", category: "Web Design", date: "May 2025", edition: "Vol. III, No. 19", description: "Replaced eleven aging wikis with a single weekly digest. Editorial tools for non-editors; a calm masthead for an anxious company.", role: "Principal Designer", size: "wide", tone: "ink" },
{ id: "p7", slug: "margin-notes", title: "Margin Notes", deck: "A second-brain for editors that disappears when the writing starts.", category: "UX Design", date: "February 2025", edition: "Vol. III, No. 06", description: "A research and annotation tool built for the messy middle of the editorial process. Shipped quietly; used loudly.", role: "Solo", size: "narrow", tone: "burgundy" },
{ id: "p8", slug: "common-hours", title: "Common Hours", deck: "Scheduling software that respects the asymmetry of caregiving.", category: "Mobile Apps", date: "October 2024", edition: "Vol. II, No. 41", description: "A calendar designed around the idea that not everyone's time is worth the same. Built with a domestic-workers' co-op over eighteen months.", role: "Co-Designer", size: "narrow", tone: "rust" }];


const CATEGORIES = ["All", "UX Design", "Mobile Apps", "Web Design"];

const TONES = {
  ink: { bg: "#1a1612", fg: "#f4ede0", dot: "#f4ede0" },
  moss: { bg: "#2c3a2e", fg: "#e8dfc9", dot: "#e8dfc9" },
  rust: { bg: "#4a2418", fg: "#f4ede0", dot: "#f4ede0" },
  ochre: { bg: "#6b4a1f", fg: "#f4ede0", dot: "#f4ede0" },
  burgundy: { bg: "#5a1818", fg: "#f4ede0", dot: "#f4ede0" }
};

// ---------- ROUTER ----------
function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash.slice(1) || "/");
  useEffect(() => {
    const onHash = () => {
      setHash(window.location.hash.slice(1) || "/");
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash;
}

function navigate(path) {window.location.hash = path;}

// ---------- HALFTONE ----------
function Halftone({ tone = "ink", caption, seed = 1, className = "", aspect }) {
  const t = TONES[tone] || TONES.ink;
  const dots = useMemo(() => {
    const out = [];let s = seed * 9301 + 49297;
    const rand = () => {s = (s * 9301 + 49297) % 233280;return s / 233280;};
    for (let y = 0; y < 14; y++) for (let x = 0; x < 22; x++) {
      const r = 0.6 + rand() * 4.2;
      out.push({ x: x * 16 + 8 + (rand() - 0.5) * 4, y: y * 16 + 8 + (rand() - 0.5) * 4, r });
    }
    return out;
  }, [seed]);
  return (
    <div className={`halftone ${className}`} style={{ background: t.bg, color: t.fg, ...(aspect ? { aspectRatio: aspect } : {}) }}>
      <svg viewBox="0 0 360 224" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id={`vg-${seed}`} cx="50%" cy="40%" r="75%">
            <stop offset="0%" stopColor={t.fg} stopOpacity="0.12" />
            <stop offset="100%" stopColor={t.fg} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="360" height="224" fill={`url(#vg-${seed})`} />
        {dots.map((d, i) => <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={t.dot} opacity={0.55} />)}
      </svg>
      {caption && <div className="halftone-caption"><span className="hc-bullet">●</span><span>{caption}</span></div>}
    </div>);

}

function Rule({ kind = "thin" }) {
  if (kind === "double") return <div className="rule-double" />;
  if (kind === "fancy") return <div className="rule-fancy" aria-hidden="true"><span /><span className="orn">❦</span><span /></div>;
  return <div className="rule-thin" />;
}

// ---------- STICKY MASTHEAD NAV ----------
function StickyMasthead({ route }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navItems = [
  { label: "Work", href: "#/" },
  { label: "About", href: "#/about" },
  { label: "Resume", href: "resume.pdf", download: true },
  { label: "LinkedIn", href: "https://linkedin.com", external: true }];

  const isActive = (href) => {
    if (href === "#/" && (route === "/" || route.startsWith("/projects"))) return true;
    if (href === "#/about" && route === "/about") return true;
    return false;
  };
  return (
    <div className={`stickymast ${scrolled ? "is-scrolled" : ""}`}>
      <div className="sm-inner" style={{ opacity: "1" }}>
        <a href="#/" className="sm-name">Eleanor Voss</a>
        <nav className="sm-nav" aria-label="Primary">
          {navItems.map((it) =>
          <a
            key={it.label}
            href={it.href}
            className={`sm-link ${isActive(it.href) ? "is-active" : ""}`}
            {...it.download ? { download: true } : {}}
            {...it.external ? { target: "_blank", rel: "noopener" } : {}}>
            
              {it.label}
            </a>
          )}
        </nav>
      </div>
    </div>);

}

// ---------- HOME MASTHEAD (large title) ----------
function MainMasthead() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  }).toUpperCase();
  return (
    <header className="masthead" id="top">
      <h1 className="title">
        <span className="title-the">The</span>
        <span className="title-main">Selected Works</span>
      </h1>
      <p className="title-tagline">An Irregular Journal of Design, Interaction &amp; Other Quiet Inventions</p>
      <Rule kind="double" />
      <div className="masthead-byline">
        <span>BY <em>Eleanor Voss</em></span>
        <span className="mb-dot">●</span>
        <span>UX Designer at Large</span>
      </div>
    </header>);

}

// ---------- FILTER BAR ----------
function FilterBar({ active, onChange, query, setQuery, total }) {
  return (
    <section className="filterbar" aria-label="Filters">
      <div className="filter-tabs" role="tablist">
        {CATEGORIES.map((c) =>
        <button key={c} role="tab" aria-selected={active === c}
        className={`tab ${active === c ? "tab-active" : ""}`}
        onClick={() => onChange(c)}>
            <span className="tab-label">{c}</span>
            <span className="tab-underline" />
          </button>
        )}
      </div>
      <div className="filter-search">
        <div className="search-field">
          <svg viewBox="0 0 24 24" className="search-glass" aria-hidden="true">
            <circle cx="10" cy="10" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <line x1="14.6" y1="14.6" x2="20" y2="20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder=" Search the Archive" aria-label="Search" />
          {query && <button className="search-clear" onClick={() => setQuery("")} aria-label="Clear">×</button>}
        </div>
      </div>
      <div className="breadcrumb">
        <span className="bc-count">{total} {total === 1 ? "project" : "projects"}</span>
      </div>
    </section>);

}

// ---------- PROJECT CARDS (Classified Ad style) ----------
function ProjectCard({ p, idx }) {
  const style = { "--stagger": `${idx * 45}ms` };
  const href = p.hasCaseStudy ? `#/projects/${p.slug}` : "#/";
  return (
    <article className="ad-card" style={style}>
      <a href={href} className="ad-thumb-link" data-cursor="hover" aria-label={p.title}>
        <Halftone tone={p.tone} seed={idx + 3} className="ad-thumb" aspect="1 / 1" />
      </a>
      <div className="ad-body">
        <div className="ad-meta-top">
          <span className="ad-num">№ {String(idx + 1).padStart(2, "0")}</span>
          <span className="ad-dot">·</span>
          <span className="ad-date">{p.date}</span>
        </div>
        <a href={href} className="headline-link" data-cursor="hover">
          <h3 className="ad-headline">{p.title}</h3>
        </a>
        <p className="ad-deck">{p.deck}</p>
        <div className="ad-foot">
          <span className="ad-role">Role · {p.role}</span>
          <a href={href} className="ad-cta" data-cursor="hover">
            <span className="ad-cta-label">Read</span>
            <span className="ad-cta-arr">→</span>
          </a>
        </div>
      </div>
    </article>);

}

// ---------- CATEGORY SECTION ----------
function CategorySection({ category, projects, sectionIdx }) {
  if (!projects.length) return null;
  return (
    <section className="cat-section" style={{ "--cat-stagger": `${sectionIdx * 80}ms` }}>
      <header className="cat-header">
        <div className="cat-rule cat-rule-l" aria-hidden="true" />
        <div className="cat-header-mid">
          <div className="cat-kicker">— Section {String(sectionIdx + 1).padStart(2, "0")} —</div>
          <h2 className="cat-title">{category}</h2>
          <div className="cat-sub">
            {projects.length} {projects.length === 1 ? "entry" : "entries"}
          </div>
        </div>
        <div className="cat-rule cat-rule-r" aria-hidden="true" />
      </header>
      <div className="cat-grid">
        {projects.map((p, i) => <ProjectCard key={p.id} p={p} idx={i} />)}
      </div>
    </section>);

}

// ---------- EMPTY STATE ----------
function NoResults({ query, category, onClear }) {
  return (
    <div className="no-results">
      <div className="nr-frame">
        <div className="nr-stamp">CLASSIFIEDS</div>
        <Rule kind="fancy" />
        <h3 className="nr-title">An Editorial Note</h3>
        <p className="nr-body">
          We regret to inform our readers that no stories were found
          {category !== "All" && <> within <em>{category}</em></>}
          {query && <> matching <em>"{query}"</em></>}.
          The archive is deep but not infinite; perhaps try a broader query, or write to the editor.
        </p>
        <button className="nr-button" onClick={onClear}>Reset the Page</button>
      </div>
    </div>);

}

// ---------- CURSOR ----------
function CustomCursor() {
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  useEffect(() => {
    let x = innerWidth / 2,y = innerHeight / 2,rx = x,ry = y,raf;
    const onMove = (e) => {
      x = e.clientX;y = e.clientY;
      const interactive = e.target.closest && e.target.closest('button, a, input, [data-cursor="hover"]');
      setHovering(!!interactive);
    };
    const tick = () => {
      rx += (x - rx) * 0.18;ry += (y - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    addEventListener("mousemove", onMove);raf = requestAnimationFrame(tick);
    return () => {removeEventListener("mousemove", onMove);cancelAnimationFrame(raf);};
  }, []);
  return (
    <div ref={ringRef} className={`cursor-ring ${hovering ? "is-hover" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" width="24" height="24">
        <circle cx="20" cy="20" r="13" fill="none" stroke="#1a1612" strokeWidth="1.4" />
        <line x1="29.5" y1="29.5" x2="36" y2="36" stroke="#1a1612" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>);

}

// ---------- ABOUT PAGE ----------
function AboutPage() {
  return (
    <article className="about-page">
      <h1 className="page-title">About</h1>
      <Rule kind="double" />

      <div className="about-page-body">
        <figure className="about-portrait-large" aria-hidden="true">
          <div className="portrait-frame">
            <svg viewBox="0 0 220 280" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="port-dots-2" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="1.1" fill="#1a1612" opacity="0.55" />
                </pattern>
                <radialGradient id="port-light-2" cx="40%" cy="32%" r="60%">
                  <stop offset="0%" stopColor="#f4ede0" /><stop offset="100%" stopColor="#c8b994" />
                </radialGradient>
              </defs>
              <rect width="220" height="280" fill="url(#port-light-2)" />
              <ellipse cx="110" cy="118" rx="54" ry="66" fill="#1a1612" opacity="0.85" />
              <path d="M30 280 C 40 220, 80 196, 110 196 C 140 196, 180 220, 190 280 Z" fill="#1a1612" opacity="0.85" />
              <rect width="220" height="280" fill="url(#port-dots-2)" opacity="0.5" />
            </svg>
          </div>
          <figcaption>Eleanor Voss, in studio</figcaption>
        </figure>

        <div className="about-prose-large">
          <p className="about-lede">
            <span className="about-dropcap">F</span>or fifteen years I have been designing software for people who would rather be doing almost anything else — paying rent, keeping the lights on, taking care of someone they love. The work that interests me is the work that disappears.
          </p>
          <p>
            I lead product and interaction design from a small studio in Brooklyn, with frequent residencies in Berkeley. My practice favors slow research, plain language, and interfaces that age gracefully. I spend an unfashionable amount of time talking to the people who will actually use a thing, and an equally unfashionable amount of time arguing for less of it.
          </p>
          <p className="about-pull">
            <span className="about-quote">&ldquo;</span>
            Design, when it works, gets out of the way. When it doesn't, it stands between people and their lives.
          </p>
          <p>
            My clients tend to be mission-aligned: community credit unions, conservation nonprofits, independent media, domestic-workers' co-ops. I am not the right designer for software that exists to harvest attention. I am, occasionally, the right designer for software that exists to restore some.
          </p>
          <p>
            Before going independent I led teams at two product studios and one civic-tech outfit. I teach a yearly seminar on editorial typography at SVA, and I write infrequently about the intersection of craft and labor.
          </p>
        </div>
      </div>
    </article>);

}

// (former trailing back-to-portfolio removed)
function _unused_about() {return null;}

// ---------- CASE STUDY PAGE ----------
function CaseStudyPage({ slug }) {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx === -1) {
    return (
      <div className="case">
        <h1 className="page-title">Story Not Found</h1>
        <p className="page-deck">The archive does not contain that piece. <a href="#/" className="ink-link">Return to the front page.</a></p>
      </div>);

  }
  const p = PROJECTS[idx];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <article className="case">
      <div className="case-eyebrow">{p.category}</div>
      <h1 className="case-title">{p.title}</h1>
      <p className="case-deck">{p.deck}</p>
      <Rule kind="double" />
      <div className="case-byline">
        <span>Eleanor Voss</span>
        <span className="dot">·</span>
        <span className="meta-mono">{p.date}</span>
      </div>

      <figure className="case-hero">
        <Halftone tone={p.tone} seed={42} caption={`Plate I — ${p.title}, application home screen`} aspect="16 / 9" />
        <figcaption>Plate I — The reworked home view, surfacing balance only on request. The default state asks a question rather than answering one.</figcaption>
      </figure>

      <div className="case-body">
        <section className="case-section">
          <h2 className="case-h2">Problem</h2>
          <p className="dropcap-case">
            Most personal finance apps are designed for the highest-engagement user: the one who logs in daily, watches markets, and treats money as a sport. The vast majority of people are not that user. They are tired, often anxious, and need a tool that respects how unpleasant the subject is. The community credit union we partnered with had a 67% drop-off in their mobile onboarding — not because their members didn't want to bank, but because the software made banking feel like an interrogation.
          </p>
        </section>

        <aside className="case-pull">
          <span className="about-quote">&ldquo;</span>
          The default state of a financial product should not be a number. It should be a question — gently asked.
        </aside>

        <section className="case-section">
          <h2 className="case-h2">Solution</h2>
          <p>
            We rebuilt the application around a single principle: <em>show less, ask better questions</em>. The home view defaults to a typographic prompt rather than a balance; transactions are organized by intention, not chronology; and notifications were stripped from twenty-three event types down to four. The result feels less like a dashboard and more like a well-tended journal.
          </p>
          <p>
            The visual language is deliberately quiet — generous whitespace, a single editorial serif for figures, and an ink-on-paper palette that doesn't shift between tabs. The interface borrows from print design's most useful gift: the willingness to make a decision and stand by it.
          </p>
        </section>

        <figure className="case-figure">
          <div className="case-figure-grid">
            <Halftone tone="moss" seed={71} caption="Plate II — Onboarding, step three" aspect="3 / 4" />
            <Halftone tone="rust" seed={88} caption="Plate III — Transaction grouping" aspect="3 / 4" />
            <Halftone tone="ochre" seed={104} caption="Plate IV — Settings, monthly review" aspect="3 / 4" />
          </div>
          <figcaption>Plates II–IV — Three moments from the redesigned flow. Each screen does one thing, slowly.</figcaption>
        </figure>

        <section className="case-section">
          <h2 className="case-h2">Key Design Decisions</h2>
          <ol className="case-list">
            <li>
              <strong>The Quiet Home.</strong> The default screen does not display a balance. Members tap once to reveal it; the gesture is small but the editorial point is large. Day-to-day anxiety about a number you cannot, in the moment, change, drops measurably.
            </li>
            <li>
              <strong>Intention-Based Grouping.</strong> Transactions cluster by what they were <em>for</em>, not <em>when</em> they happened. Groceries, rent, kindness, repair. Members can rename a group with a single keystroke; the names are theirs.
            </li>
            <li>
              <strong>The Monthly Letter.</strong> Once a month, the app composes a one-paragraph plain-language summary of the previous thirty days — written in the same serif as the rest of the application. It is not a report. It is a letter.
            </li>
            <li>
              <strong>Strict Notification Diet.</strong> We cut notification surface area by 83%. The four that remain are the four members consistently said, in research, they actually wanted.
            </li>
          </ol>
        </section>

        <aside className="case-pull">
          <span className="about-quote">&ldquo;</span>
          Cut alerts by 83%. Kept only the four members had asked for, by name, in research.
        </aside>

        <section className="case-section">
          <h2 className="case-h2">Results</h2>
          <p>
            Onboarding abandonment fell by 41% within the first quarter of release. Monthly active engagement rose 22%, but — more importantly — average session length <em>declined</em> by 18%, exactly as we hoped. Members were getting in, doing the small thing they came to do, and getting out. The credit union's internal accessibility commendation followed in the second quarter.
          </p>
          <div className="case-stats">
            <div className="stat"><span className="stat-num">−41%</span><span className="stat-label">Onboarding abandonment</span></div>
            <div className="stat"><span className="stat-num">−18%</span><span className="stat-label">Average session length</span></div>
            <div className="stat"><span className="stat-num">+22%</span><span className="stat-label">Monthly active engagement</span></div>
            <div className="stat"><span className="stat-num">−83%</span><span className="stat-label">Notification surface area</span></div>
          </div>
        </section>

        <figure className="case-figure">
          <Halftone tone="ink" seed={130} caption="Plate V — The Monthly Letter" aspect="16 / 9" />
          <figcaption>Plate V — The Monthly Letter, our favorite small invention. A composed paragraph; never a pie chart.</figcaption>
        </figure>

        <section className="case-section">
          <h2 className="case-h2">Acknowledgements</h2>
          <p>
            Thanks to the credit union's research and member services teams, and to the eleven members who let us sit in their kitchens with notebooks for three afternoons each. The work is, properly, theirs.
          </p>
        </section>
      </div>

      <Rule kind="fancy" />

      <nav className="case-pager" aria-label="Project navigation">
        <a href={`#/projects/${prev.slug}`} className="pager-link pager-prev" data-cursor="hover">
          <span className="pager-eyebrow">← Previous Project</span>
          <span className="pager-title">{prev.title}</span>
          <span className="pager-meta">{prev.category} · {prev.date}</span>
        </a>
        <a href={`#/projects/${next.slug}`} className="pager-link pager-next" data-cursor="hover">
          <span className="pager-eyebrow">Next Project →</span>
          <span className="pager-title">{next.title}</span>
          <span className="pager-meta">{next.category} · {next.date}</span>
        </a>
      </nav>
    </article>);

}

// ---------- HOME PAGE ----------
function HomePage({ active, setActive, query, setQuery, animKey }) {
  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (active !== "All" && p.category !== active) return false;
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return p.title.toLowerCase().includes(q) || p.deck.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    });
  }, [active, query]);

  // Group by category, preserving CATEGORIES order (skip "All")
  const grouped = useMemo(() => {
    const order = CATEGORIES.filter((c) => c !== "All");
    return order.
    map((cat) => ({ category: cat, items: filtered.filter((p) => p.category === cat) })).
    filter((g) => g.items.length > 0);
  }, [filtered]);

  return (
    <>
      <MainMasthead />
      <section id="work" className="portfolio-section">
        <FilterBar active={active} onChange={setActive} query={query} setQuery={setQuery} total={filtered.length} />
        <Rule kind="thin" />
        {filtered.length === 0 ?
        <NoResults query={query} category={active} onClear={() => {setActive("All");setQuery("");}} /> :

        <div key={animKey} className="classifieds">
            {grouped.map((g, i) =>
          <CategorySection key={g.category} category={g.category} projects={g.items} sectionIdx={i} />
          )}
          </div>
        }
      </section>
    </>);

}

// ---------- ROOT ----------
function App() {
  const route = useHashRoute();
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [animKey, setAnimKey] = useState(0);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--paper-top", t.paperTop);
    r.setProperty("--paper-bot", t.paperBottom);
    r.setProperty("--ink", t.ink);
    r.setProperty("--burgundy", t.accent);
    r.setProperty("--grain-opacity", String(t.grain));
    document.body.style.fontSize = t.bodySize + "px";
    r.setProperty("--headline-weight", t.headlineWeight === "bold" ? "900" : "700");
  }, [t]);

  useEffect(() => {setAnimKey((k) => k + 1);}, [active, query]);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  }).toUpperCase();

  let body;
  if (route === "/about") body = <AboutPage />;else
  if (route.startsWith("/projects/")) body = <CaseStudyPage slug={route.slice("/projects/".length)} />;else
  body = <HomePage active={active} setActive={setActive} query={query} setQuery={setQuery} animKey={animKey} />;

  return (
    <div className="paper">
      <CustomCursor />
      <StickyMasthead route={route} />
      <div className="page">
        <div key={route} className="route-fade">
          {body}
        </div>

        <TweaksPanel title="Tweaks">
          <TweakSection label="Paper" />
          <TweakColor label="Top tone" value={t.paperTop} onChange={(v) => setTweak("paperTop", v)} />
          <TweakColor label="Bottom tone" value={t.paperBottom} onChange={(v) => setTweak("paperBottom", v)} />
          <TweakSlider label="Grain" value={t.grain} min={0} max={1} step={0.05} onChange={(v) => setTweak("grain", v)} />
          <TweakSection label="Ink" />
          <TweakColor label="Body ink" value={t.ink} onChange={(v) => setTweak("ink", v)} />
          <TweakColor label="Accent" value={t.accent} onChange={(v) => setTweak("accent", v)} />
          <TweakSection label="Type" />
          <TweakSlider label="Body size" value={t.bodySize} min={14} max={22} step={1} unit="px" onChange={(v) => setTweak("bodySize", v)} />
          <TweakRadio label="Headline" value={t.headlineWeight} options={["regular", "bold"]} onChange={(v) => setTweak("headlineWeight", v)} />
        </TweaksPanel>

        <Rule kind="fancy" />
        <footer className="colophon" id="contact">
          <nav className="col-mini" aria-label="Footer">
            <a href="resume.pdf" download className="col-bracket-link" data-cursor="hover">
              <span className="bl-bracket bl-l" aria-hidden="true">[</span>
              <span className="bl-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 V15" />
                  <path d="M7 10 L12 15 L17 10" />
                  <path d="M4 19 H20" />
                </svg>
              </span>
              <span className="bl-body">
                <span className="bl-eyebrow">Resume</span>
                <span className="bl-label">Download Resume</span>
              </span>
              <span className="bl-bracket bl-r" aria-hidden="true">]</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="col-bracket-link" data-cursor="hover">
              <span className="bl-bracket bl-l" aria-hidden="true">[</span>
              <span className="bl-icon bl-icon-in" aria-hidden="true">in</span>
              <span className="bl-body">
                <span className="bl-eyebrow">Professional Record</span>
                <span className="bl-label">LinkedIn</span>
              </span>
              <span className="bl-bracket bl-r" aria-hidden="true">]</span>
            </a>
            <a href="mailto:letters@selectedworks.press" className="col-bracket-link" data-cursor="hover">
              <span className="bl-bracket bl-l" aria-hidden="true">[</span>
              <span className="bl-icon" aria-hidden="true">✎</span>
              <span className="bl-body">
                <span className="bl-eyebrow">Correspondence</span>
                <span className="bl-label">letters@selectedworks.press</span>
              </span>
              <span className="bl-bracket bl-r" aria-hidden="true">]</span>
            </a>
          </nav>

          <Rule kind="thin" />

          <p className="col-creed">
            Printed on a virtual press.  The Selected Works. All rights reserved, most opinions held loosely.
          </p>
        </footer>
      </div>
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);