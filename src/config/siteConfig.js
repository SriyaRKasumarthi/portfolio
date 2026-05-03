/** Site-wide copy and links for the newspaper portfolio shell */
export const SITE = {
  name: 'Sriya Kasumarthi',
  mastheadTitle: 'Selected Works',
  mastheadTagline:
    'An irregular journal of design, interaction, and emerging interfaces.',
  mastheadBylineRole: 'UX Designer · Research · XR',
  taglineShort:
    'Designing how humans meet technology—from AR and robotics to accessible products.',
  email: 'sriya.kasumarthi@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/sriya-kasumarthi',
  blogUrl: 'https://interfacingtomorrow.substack.com/',
  resumePath: 'Resume/SriyaKasumarthi_resume.pdf',
};

export function resumeUrl() {
  return `${import.meta.env.BASE_URL}${SITE.resumePath}`;
}
