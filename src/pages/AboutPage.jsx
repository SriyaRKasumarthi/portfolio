import Rule from '../components/newspaper/Rule';
import { SITE } from '../config/siteConfig';

const base = import.meta.env.BASE_URL;

export default function AboutPage() {
  return (
    <article className="about-page">
      <h1 className="page-title">About</h1>
      <Rule kind="double" />

      <div className="about-page-body">
        <figure className="about-portrait-large">
          <div className="portrait-frame portrait-frame--photo">
            <img
              src={`${base}images/profile/Headshot.jpg`}
              alt={SITE.name}
              className="about-photo"
            />
          </div>
          <figcaption>{SITE.name}</figcaption>
        </figure>

        <div className="about-prose-large">
          <p className="about-lede">
            <span className="about-dropcap">I</span>
            {SITE.taglineShort}
          </p>
          <p>
            UX Designer redefining how humans connect with technology—from web experiences to XR,
            AI, and robotics interfaces. Great design starts with listening. Purposeful products can
            only be built after a true understanding of the problem.
          </p>
          <p className="about-pull">
            <span className="about-quote">&ldquo;</span>
            My goal is simple: make technology enhance human capabilities rather than replacing what
            makes people human—freeing them to pursue what truly matters.
          </p>
          <p>
            I write occasionally about craft and emerging tech at{' '}
            <a href={SITE.blogUrl} className="ink-link" target="_blank" rel="noopener noreferrer">
              Interfacing Tomorrow
            </a>
            . For collaboration, reach me at{' '}
            <a className="ink-link" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
