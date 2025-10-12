import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectLayout from '../components/ProjectLayout';

const ProjectDetail = () => {
  const { projectName } = useParams();
  const location = useLocation();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 1000], [0, -200]);
  const textY = useTransform(scrollY, [0, 1200], [0, -30]);

  // Scroll to top on page load or route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Mock project data based on project name
  const getProjectData = (name) => {
    const projects = {
      'ecommerce-app': {
        title: 'E-Commerce Mobile App',
        subtitle: 'Redesigned shopping experience with focus on accessibility',
        backgroundImage: '/api/placeholder/1920/1080',
        description: 'A comprehensive redesign of a mobile e-commerce application focusing on improving user experience, accessibility, and conversion rates.',
        year: '2024',
        role: 'Lead UX Designer',
        duration: '6 months',
        team: '5 designers, 3 developers',
        challenges: [
          'Improving conversion rates by 25%',
          'Reducing cart abandonment by 40%',
          'Ensuring WCAG 2.1 AA compliance',
          'Creating a seamless mobile experience'
        ],
        process: [
          'User Research & Analysis',
          'Wireframing & Information Architecture',
          'Visual Design & Prototyping',
          'Usability Testing & Iteration',
          'Development Handoff & Support'
        ],
        results: [
          '25% increase in conversion rates',
          '40% reduction in cart abandonment',
          '95% user satisfaction score',
          'Full WCAG 2.1 AA compliance'
        ],
        technologies: ['Figma', 'Principle', 'Sketch', 'InVision', 'React Native'],
        images: [
          { title: 'User Research Insights', description: 'Key findings from user interviews and usability testing' },
          { title: 'Wireframe Iterations', description: 'Evolution of the information architecture' },
          { title: 'Final Design System', description: 'Comprehensive design system implementation' },
          { title: 'Mobile Prototype', description: 'Interactive prototype for user testing' }
        ]
      },
      'healthcare-dashboard': {
        title: 'Healthcare Dashboard',
        subtitle: 'Complex data visualization for medical professionals',
        backgroundImage: '/api/placeholder/1920/1080',
        description: 'Designed an intuitive dashboard for healthcare professionals to manage patient data, appointments, and medical records.',
        year: '2023',
        role: 'Senior UX Designer',
        duration: '8 months',
        team: '3 designers, 5 developers',
        challenges: [
          'Complex data visualization requirements',
          'High-stress medical environment considerations',
          'HIPAA compliance and security',
          'Multi-device compatibility'
        ],
        process: [
          'Stakeholder Interviews',
          'Data Architecture Planning',
          'Wireframing & Prototyping',
          'User Testing with Medical Staff',
          'Iterative Design Refinement'
        ],
        results: [
          '60% reduction in data lookup time',
          '90% user adoption rate',
          'Zero security incidents',
          'Improved patient care efficiency'
        ],
        technologies: ['Figma', 'Adobe XD', 'React', 'D3.js', 'TypeScript'],
        images: [
          { title: 'Data Flow Analysis', description: 'Understanding complex medical data relationships' },
          { title: 'Dashboard Wireframes', description: 'Initial layout and information hierarchy' },
          { title: 'Visual Design System', description: 'Color-coded data visualization approach' },
          { title: 'Final Implementation', description: 'Live dashboard in medical environment' }
        ]
      },
      'ar-motion-guidance': {
        title: 'Investigating Encodings Type and Frame of Reference for Augmented Reality Body Motion Guidance',
        subtitle: 'Research on designing effective visual encodings and perspectives for AR motion guidance',
        backgroundImage: '/api/placeholder/1920/1080',
        description: `Augmented reality (AR) offers promising opportunities to support movement-based activities, such as personal training or physical therapy, with real-time, spatially-situated visual cues. While many approaches leverage AR to guide motion, existing design guidelines focus on simple, upper-body movements within the user's field of view. We lack evidence-based design recommendations for guiding more diverse scenarios involving movements with varying levels of visibility and direction. We conducted an experiment to investigate how different visual encodings and perspectives affect motion guidance performance and usability, using three exercises that varied in visibility and planes of motion. Our findings reveal significant differences in preference and performance across designs. Notably, the best perspective varied depending on motion visibility and showing more information about the overall motion did not necessarily improve motion execution. We provide empirically-grounded guidelines for designing immersive, interactive visualizations for motion guidance to support more effective AR systems.`,
        year: '2025',
        role: 'Researcher & Designer',
        duration: '12 months',
        team: 'Research team of 2',
        challenges: [
          'Limited evidence-based design guidelines for diverse body movements',
          'Balancing information density with motion execution performance',
          'Designing for movements with varying visibility levels',
          'Accounting for different planes of motion and user perspectives'
        ],
        process: [
          'Visual Encoding Designs: Different approaches to representing body motion in AR space',
          'Experimental Setup: Study design with exercises varying in visibility and motion planes',
          'Performance Analysis: Comparative analysis of different encoding and perspective combinations',
          'Design Guidelines: Evidence-based recommendations for AR motion guidance systems',
        ],
        results: [
          'Empirically-grounded design guidelines for AR motion guidance',
          'Identified optimal perspectives for different motion types',
          'Demonstrated that more information does not always improve performance',
          'Published findings to advance AR interaction design'
        ],
        technologies: ['Augmented Reality', 'Human-Computer Interaction', 'Experimental Design', 'Data Visualization', 'User Study'],
        images: [
          { title: 'Visual Encoding Designs', description: 'Different approaches to representing body motion in AR space' },
          { title: 'Experimental Setup', description: 'Study design with exercises varying in visibility and motion planes' },
          { title: 'Performance Analysis', description: 'Comparative analysis of different encoding and perspective combinations' },
          { title: 'Design Guidelines', description: 'Evidence-based recommendations for AR motion guidance systems' }
        ],
        paperUrl: '/publications/ar-motion-guidance.pdf'
      },
      'injury-recovery-ar': {
        title: 'Understanding User Needs for Injury Recovery with Augmented Reality',
        subtitle: 'User-centered design research for AR-enhanced physical therapy',
        backgroundImage: '/api/placeholder/1920/1080',
        description: `Physical therapy (PT) plays a crucial role in muscle injury recovery, but people struggle to adhere to and perform PT exercises correctly from home. To support challenges faced with in-home PT, augmented reality (AR) holds promise in enhancing patient's engagement and accuracy through immersive interactive visualizations. However, effectively leveraging AR requires a better understanding of patient needs during injury recovery. Through interviews with six individuals undergoing physical therapy, this paper introduces user-centered design considerations integrating AR and body motion data to enhance in-home PT for injury recovery. Our findings identify key challenges and propose design variables for future body-based visualizations of body motion data for PT.`,
        year: '2025',
        role: 'Researcher & Designer',
        duration: '10 months',
        team: 'Research team of 3',
        challenges: [
          'Understanding diverse patient needs during injury recovery',
          'Identifying barriers to in-home PT adherence and accuracy',
          'Balancing AR visualization complexity with usability',
          'Designing for varying injury types and recovery stages'
        ],
        process: [
          'Literature Review: Examining existing AR PT solutions and design gaps',
          'User Interviews: Six participants undergoing physical therapy',
          'Qualitative Analysis: Identifying themes and user needs',
          'Design Variables: Proposing AR visualization considerations for PT'
        ],
        results: [
          'User-centered design considerations for AR-enhanced PT',
          'Identified key challenges in in-home exercise adherence',
          'Proposed design variables for body motion visualizations',
          'Contributed to AR physical therapy research foundations'
        ],
        technologies: ['Augmented Reality', 'Physical Therapy', 'User Research', 'Human-Computer Interaction', 'Body Motion Visualization'],
        images: [
          { title: 'User Interview Insights', description: 'Key findings from interviews with PT patients' },
          { title: 'Challenge Mapping', description: 'Identified barriers to in-home PT success' },
          { title: 'Design Variables', description: 'Proposed considerations for AR PT visualizations' },
          { title: 'Future Directions', description: 'Research opportunities for AR-enhanced recovery' }
        ],
        paperUrl: 'https://0fbd1968-4f2d-4bdb-bce8-e3134bc377d6.filesusr.com/ugd/2e35d5_5b337e2fedf44fa08271f4571a847906.pdf'
      },
      'physical-therapy-mr': {
        title: 'Understanding Physical Therapy Challenges for Older Adults through Mixed Reality',
        subtitle: 'Research on using MR to address PT challenges for older adults',
        backgroundImage: '/api/placeholder/1920/1080',
        description: `Physical therapy (PT) is crucial in helping older adults manage chronic conditions and weakening muscles, but older adults face increasing challenges that can impact their PT experience, including increased fatigue, memory loss, and mobility and travel constraints. While current technology attempts to facilitate remote care, they have limitations and are used in-practice infrequently. Mixed reality (MR) technology shows promise for addressing these challenges by creating immersive, context-aware environments remotely that previously could only be achieved in clinical settings. To bridge the gap between MR's potential and its practical application in geriatric PT, we conducted in-depth interviews with three PT clinicians and six older adult patients to understand challenges with PT care and adherence that MR may address. Our findings inform design considerations for supporting older adults' needs through MR and outline technical requirements for practical implementation.`,
        year: '2025',
        role: 'Researcher & Designer',
        duration: '11 months',
        team: 'Research team of 3',
        challenges: [
          'Understanding unique PT challenges faced by older adults',
          'Addressing fatigue, memory loss, and mobility constraints',
          'Identifying limitations of current remote care technologies',
          'Balancing MR complexity with older adult usability needs'
        ],
        process: [
          'Stakeholder Interviews: Three PT clinicians and six older adult patients',
          'Challenge Mapping: Identifying PT care and adherence barriers',
          'MR Design Considerations: User needs analysis for immersive PT',
          'Technical Requirements: Outlining practical implementation needs'
        ],
        results: [
          'Design considerations for MR-enhanced geriatric PT',
          'Identified key barriers to PT adherence in older adults',
          'Technical requirements for practical MR PT implementation',
          'Published findings to inform future MR healthcare systems'
        ],
        technologies: ['Healthcare', 'Augmented Reality', 'Visualization'],
        images: [
          { title: 'User Research Findings', description: 'Insights from clinicians and older adult patients' },
          { title: 'Challenge Analysis', description: 'PT barriers unique to older adult populations' },
          { title: 'MR Design Framework', description: 'Considerations for immersive PT environments' },
          { title: 'Implementation Guidelines', description: 'Technical requirements for practical deployment' }
        ],
        paperUrl: 'https://arxiv.org/html/2509.14514v1#abstract'
      }
    };
    
    return projects[name] || {
      title: 'Project Not Found',
      subtitle: 'This project could not be found',
      backgroundImage: '/api/placeholder/1920/1080',
      description: 'The requested project does not exist.',
      year: '2024',
      role: 'UX Designer',
      duration: 'N/A',
      team: 'N/A',
      challenges: [],
      process: [],
      results: [],
      technologies: [],
      images: []
    };
  };

  const project = getProjectData(projectName);

  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.subtitle}
      backgroundImage={project.backgroundImage}
    >
      {/* Project Overview */}
      <motion.section 
        className="mb-24"
        style={{ y: textY }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
            Project Overview
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-12">
            {project.description}
          </p>
          
          {/* Read Paper Button (only for publications with paperUrl) */}
          {project.paperUrl && (
            <div className="mb-12">
              <motion.a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-beige-500 text-white font-medium rounded-xl border-2 border-beige-400 overflow-hidden shadow-lg hover:shadow-2xl hover:border-beige-300 transition-all duration-500 cursor-hover group"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { 
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 text-lg">Read Paper</span>
                <motion.svg 
                  className="w-5 h-5 relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
                <div className="absolute inset-0 bg-gradient-to-r from-beige-400 to-beige-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </motion.a>
            </div>
          )}
          
          {/* Project Details Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Year</h3>
              <p className="text-xl font-semibold text-white">{project.year}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Role</h3>
              <p className="text-xl font-semibold text-white">{project.role}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Duration</h3>
              <p className="text-xl font-semibold text-white">{project.duration}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Team</h3>
              <p className="text-xl font-semibold text-white">{project.team}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technologies */}
      <motion.section 
        className="mb-24"
        style={{ y: textY }}
      >
        <h3 className="text-3xl font-bold font-orbitron text-white mb-8 text-center">
          Technologies Used
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Process Timeline */}
      <motion.section 
        className="mb-24"
        style={{ y: textY }}
      >
        <h3 className="text-3xl font-bold font-orbitron text-white mb-12 text-center">
          Design Process
        </h3>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-beige-500/30"></div>
            {project.process.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-8 mb-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-beige-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-semibold font-space-grotesk text-white mb-2">
                    {step}
                  </h4>
                  <p className="text-gray-300">
                    Detailed description of this phase in the design process and its key deliverables.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Challenges & Solutions */}
      <motion.section 
        className="mb-24"
        style={{ y: textY }}
      >
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold font-orbitron text-white mb-8">
              Challenges
            </h3>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold font-orbitron text-white mb-8">
              Results
            </h3>
            <ul className="space-y-4">
              {project.results.map((result, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">{result}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>
    </ProjectLayout>
  );
};

export default ProjectDetail;
