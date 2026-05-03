/** Filter tabs shown on the home classifieds grid */
export const CATEGORIES = ['All', 'Research', 'Product Design'];

const B = () => import.meta.env.BASE_URL;

/** Newspaper grid + routing metadata for all projects */
export const PROJECTS = [
  {
    id: 'p1',
    slug: 'ar-motion-guidance',
    title: 'Designing Visual Encodings for AR Motion',
    deck: 'Research on visual encodings and perspectives for AR motion guidance.',
    category: 'Research',
    date: '2025',
    edition: 'Vol. I',
    description:
      'Research on designing effective visual encodings and perspectives for AR motion guidance systems.',
    role: 'Researcher & Designer',
    size: 'wide',
    tone: 'ink',
    hasCaseStudy: true,
    image: `${B()}images/projects/ar-motion-guidance/designing-visual-encodings-for-ar-motion.png`,
    legacyCategory: 'publications',
  },
  {
    id: 'p2',
    slug: 'injury-recovery-ar',
    title: 'Injury Recovery AR Study',
    deck: 'User-centered design research for AR-enhanced physical therapy.',
    category: 'Research',
    date: '2025',
    edition: 'Vol. I',
    description:
      'Understanding patient needs for injury recovery with augmented reality.',
    role: 'Researcher & Designer',
    size: 'med',
    tone: 'moss',
    hasCaseStudy: true,
    image: `${B()}images/projects/injury-recovery-ar/injuryrecoveryarstudy.png`,
    legacyCategory: 'publications',
  },
  {
    id: 'p3',
    slug: 'physical-therapy-mr',
    title: 'Physical Therapy MR Study',
    deck: 'Mixed reality for physical therapy challenges among older adults.',
    category: 'Research',
    date: '2025',
    edition: 'Vol. I',
    description:
      'Research on using mixed reality to address physical therapy challenges for older adults.',
    role: 'Researcher & Designer',
    size: 'med',
    tone: 'rust',
    hasCaseStudy: true,
    image: `${B()}images/projects/physical-therapy-mr/ptmrstudy.png`,
    legacyCategory: 'publications',
  },
  {
    id: 'p4',
    slug: 'luminary-ar',
    title: 'Luminary AR',
    deck: 'Accessible navigation for real mobility needs on campus.',
    category: 'Product Design',
    date: '2024',
    edition: 'Vol. I',
    description:
      'Campus navigation that prioritizes accessibility with routing, ratings, and community support.',
    role: 'Lead Designer',
    size: 'lead',
    tone: 'ochre',
    hasCaseStudy: true,
    image: `${B()}images/projects/luminary-ar/luminaryhero.jpg`,
    legacyCategory: 'design',
  },
  {
    id: 'p5',
    slug: 'oasis',
    title: 'Oasis',
    deck: 'An accessible ecosystem of wellness products for menopausal people.',
    category: 'Product Design',
    date: '2024',
    edition: 'Vol. I',
    description:
      'Ring, app, Nest integration, and VR relaxation—designed for accessibility.',
    role: 'Product Designer',
    size: 'tall',
    tone: 'burgundy',
    hasCaseStudy: true,
    image: `${B()}images/projects/oasis/oasisapp.png`,
    legacyCategory: 'design',
  },
  {
    id: 'p6',
    slug: 'robotic-gestures',
    title: 'Robotic Gestures for Virtual Meetings',
    deck: 'Handshakes, waves, and high fives to augment social presence online.',
    category: 'Research',
    date: '2024',
    edition: 'Vol. I',
    description:
      'Pilot study on robotic gestures for engagement and comfort in web conferencing.',
    role: 'Researcher',
    size: 'narrow',
    tone: 'ink',
    hasCaseStudy: true,
    image: `${B()}images/projects/robotic-gestures/participantreaction.png`,
    legacyCategory: 'publications',
  },
];

export function projectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
