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
      },
      'inclusive-mobility-navigation': {
        title: 'Inclusive Mobility Navigation App',
        subtitle: 'Design an inclusive navigation app with mobility-friendly features for Chapel Hill',
        backgroundImage: '/api/placeholder/1920/1080',
        description: 'Designed an inclusive navigation app with mobility-friendly features for Chapel Hill, inspired by Google and Apple Maps. The goal was to enhance accessibility for users with physical disabilities—temporary or permanent—by integrating assistive navigation into widely used platforms.',
        year: '2024',
        role: 'UX Designer & Researcher',
        duration: '4 months',
        team: '3 designers, 2 researchers',
        challenges: [
          'Understanding diverse mobility needs and accessibility requirements',
          'Integrating assistive features without overwhelming mainstream users',
          'Designing for both temporary and permanent mobility limitations',
          'Creating intuitive emergency assistance features',
          'Ensuring comprehensive accessibility compliance'
        ],
        process: [
          'Community Research: Forums and accessibility community insights',
          'User Interviews: Direct conversations with wheelchair users',
          'Persona Development: Creating detailed user profiles',
          'Feature Ideation: Brainstorming mobility-friendly solutions',
          'Low-Fidelity Wireframing: Initial design concepts',
          'Usability Testing: Iterative testing with target users',
          'High-Fidelity Prototyping: Final interactive designs'
        ],
        results: [
          'Identified 6 key accessibility features for navigation apps',
          'Created comprehensive personas for different mobility needs',
          'Designed intuitive emergency assistance system',
          'Developed accessibility rating system for routes',
          'Achieved 90% user satisfaction in usability testing'
        ],
        technologies: ['Figma', 'Whimsical Research Boards', 'Interviews', 'UX Research', 'Wireframing', 'Prototyping', 'Inclusive Design', 'Accessibility', 'Usability Testing'],
        images: [
          { title: 'Research Insights', description: 'Key findings from community forums and user interviews' },
          { title: 'User Personas', description: 'Detailed profiles of different mobility user types' },
          { title: 'Feature Discovery', description: 'Six core accessibility features identified through research' },
          { title: 'Low-Fidelity Wireframes', description: 'Initial design concepts and user flows' },
          { title: 'Usability Testing', description: 'Testing sessions with wheelchair users and feedback' },
          { title: 'High-Fidelity Prototype', description: 'Final interactive design with all accessibility features' }
        ],
        prototypeUrl: 'https://example.com/prototype'
      },
      'luminary-ar': {
        title: 'Luminary AR',
        subtitle: 'Accessible Navigation for Real Mobility Needs',
        backgroundImage: '/api/placeholder/1920/1080',
        description: 'Luminary AR is a campus navigation system designed to prioritize accessibility. By combining real-time routing, accessibility ratings, obstacle reporting, and community support, Luminary AR helps students with mobility impairments navigate efficiently and safely.',
        year: '2024',
        role: 'Product Designer | Lead UX Researcher | HCI Researcher',
        duration: '6 months',
        team: '4 designers, 3 researchers, 2 developers',
        challenges: [
          'Addressing UNC Chapel Hill\'s $1 billion maintenance backlog affecting accessibility',
          'Students trapped due to failed elevators and inaccessible buildings',
          'Existing solutions like Campuspartner have limited coverage and manual data collection',
          'Google Maps AR insufficient for last 100-foot navigation details',
          'Creating intuitive system that measures obstacles objectively'
        ],
        process: [
          'Background Research: Analyzing accessibility issues and existing solutions',
          'User Interviews: Two students with mobility impairments',
          'Persona Development: Four key user types with different needs',
          'Feature Ideation: Ten core accessibility features',
          'Prototype Evolution: Four iterative design phases',
          'User Evaluation: Wizard of Oz and interactive prototype testing',
          'Final Design: Eight-screen comprehensive navigation system'
        ],
        results: [
          'Comprehensive navigation system prioritizing accessibility',
          'Real-time routing with accessibility ratings (1-5 stars)',
          'Community-driven obstacle reporting and support',
          'AR-guided navigation with alternative route options',
          'Personalized accessibility settings and quick toggles',
          'Post-route feedback system with detailed comments'
        ],
        technologies: ['Product Design', 'UX Research', 'HCI Research', 'Figma', 'Prototyping', 'User Testing', 'Accessibility', 'AR Design'],
        images: [
          { title: 'Hero Illustration', description: 'Luminary AR guiding a wheelchair user across campus' },
          { title: 'Solution Comparison', description: 'Infographic comparing current solutions vs. Luminary AR features' },
          { title: 'User Journey Map', description: 'Journey map of Participant A navigating UNC using Google Maps AR' },
          { title: 'Persona Cards', description: 'Four detailed personas with key insights and images' },
          { title: 'Feature Diagram', description: 'Ten key features highlighted in comprehensive diagram' },
          { title: 'Prototype Evolution', description: 'Screenshots of each prototype iteration with annotations' },
          { title: 'User Evaluation', description: 'Heatmap and feedback summary from testing sessions' },
          { title: 'Final Design Mockups', description: 'Annotated Figma mockups of all 8 screens' }
        ],
        caseStudyUrl: 'https://example.com/case-study'
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
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed mb-12">
            {project.description}
          </p>
          
          {/* Prototype Buttons (only for luminary-ar) */}
          {projectName === 'luminary-ar' && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="https://www.figma.com/proto/GfNvcasil8GBn6hlEEdbfS/Navi-App?type=design&node-id=4-3&t=FsdoCwziFj19HFvs-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A3&mode=design"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-beige-500 text-white font-medium rounded-xl border-2 border-beige-400 overflow-hidden shadow-lg hover:shadow-2xl hover:border-beige-300 transition-all duration-500 cursor-hover group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 text-lg">View Figma Prototype</span>
                <motion.svg 
                  className="w-5 h-5 relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </motion.svg>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-beige-400 to-beige-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.a>
              
              <motion.a
                href="https://youtu.be/GK7ktpYKJrI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-beige-500 text-white font-medium rounded-xl border-2 border-beige-400 overflow-hidden shadow-lg hover:shadow-2xl hover:border-beige-300 transition-all duration-500 cursor-hover group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 text-lg">Watch Demo Video</span>
                <motion.svg 
                  className="w-5 h-5 relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </motion.svg>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-beige-400 to-beige-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.a>
            </div>
          )}
          
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
          
          {/* View Prototype Button (only for inclusive-mobility-navigation) */}
          {project.prototypeUrl && (
            <div className="mb-12">
              <motion.a
                href={project.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-beige-500 text-white font-medium rounded-xl border-2 border-beige-400 overflow-hidden shadow-lg hover:shadow-2xl hover:border-beige-300 transition-all duration-500 cursor-hover group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 text-lg">View Prototype</span>
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

      {/* Project-Specific Sections for Luminary AR */}
      {projectName === 'luminary-ar' && (
        <>
          {/* Overview */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Overview
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                College campuses and cities around the globe face inherent accessibility challenges. Stairs, broken sidewalks, 
                unmaintained elevators, high curbs, and construction pose difficulties for individuals with mobility impairments. 
                UNC Chapel Hill (UNC) has struggled to address these issues effectively, with a maintenance backlog exceeding 
                $1 billion. Students often rely on general navigation apps, which fail to account for accessibility, 
                forcing reliance on trial-and-error or peer guidance.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Luminary AR is a campus navigation system designed to prioritize accessibility. By combining 
                real-time routing, accessibility ratings, obstacle reporting, and community support, Luminary AR helps students 
                with mobility impairments navigate efficiently and safely.
              </p>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                <div className="w-full rounded-lg overflow-hidden">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/personas/luminaryhero.jpg`}
                    alt="Hero illustration showing Luminary AR guiding a wheelchair user across campus"
                    className="w-full h-64 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-96 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-gray-400">Hero illustration showing Luminary AR guiding a wheelchair user across campus</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Discovery */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Discovery
              </h2>
              
              <div className="mb-12">
                <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                  Background
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Accessibility issues at UNC have real consequences:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">In 2022, a student was trapped on a dorm's fourth floor for 36 hours due to a failed elevator.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">In 2023, another student was stranded in the Hanes Art Center.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Students often encounter inaccessible classrooms, office hours, and events.</span>
                  </li>
                </ul>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
                  <p className="text-gray-300 italic text-lg leading-relaxed">
                    "During my orientation, I was stuck in classrooms where my wheelchair didn't fit between the desks… 
                    I'm constantly worried about attending student organization events because I never know what obstacles 
                    I'll encounter".
                  </p>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Steep slopes, uneven sidewalks, and high curbs further complicate navigation, requiring advanced planning 
                  for most trips. Existing solutions like Campuspartner and the UNC ARS map partially address accessibility but have limitations in 
                  coverage, routing, and reliance on manual data collection.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                  User Research
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  We conducted interviews with two students with mobility impairments:
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-3">Participant A</h4>
                    <p className="text-gray-300 text-sm mb-4">Experienced wheelchair and walker user, service animal handler, deeply involved in accessibility advocacy.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-3">Participant C</h4>
                    <p className="text-gray-300 text-sm mb-4">Long-term wheelchair user, accessibility researcher, leader of Project Luminary.</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Key insights:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300"><strong>A:</strong> Routing is about respect; trial-and-error and word-of-mouth dominate navigation. Users are reluctant to report obstacles.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300"><strong>C:</strong> Accessibility should be inclusive for all impairments. Systems should be intuitive, visually accessible, and measure obstacles objectively.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Routing tasks highlighted challenges: both relied heavily on Google Maps AR but struggled with the last 100-foot problem, insufficient detail at the end of routes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Personas */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Personas
              </h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                  <div className="w-full rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/personas/persona1-nancy-lee.jpg`}
                      alt="Nancy Lee - Computer Science PhD Student"
                      className="w-full h-auto object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-48 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-gray-400">Nancy Lee</span>
                    </div>
                  </div>
                  <p className="text-white font-medium">Nancy Lee</p>
                  <p className="text-gray-400 text-sm">Computer Science PhD Student</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                  <div className="w-full rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/personas/persona2-olivia-bennett.jpg`}
                      alt="Olivia Bennett - Student"
                      className="w-full h-auto object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-48 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-gray-400">Olivia Bennett</span>
                    </div>
                  </div>
                  <p className="text-white font-medium">Olivia Bennett</p>
                  <p className="text-gray-400 text-sm">Student</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                  <div className="w-full rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/personas/persona3-rachel-smith.jpg`}
                      alt="Rachel Smith - Chemistry Lab Assistant"
                      className="w-full h-auto object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-48 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-gray-400">Rachel Smith</span>
                    </div>
                  </div>
                  <p className="text-white font-medium">Rachel Smith</p>
                  <p className="text-gray-400 text-sm">Chemistry Lab Assistant</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                  <div className="w-full rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/personas/persona4-mitchell-pritchett.jpg`}
                      alt="Mitchell Pritchett - Marketing Undergrad"
                      className="w-full h-auto object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-48 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-gray-400">Mitchell Pritchett</span>
                    </div>
                  </div>
                  <p className="text-white font-medium">Mitchell Pritchett</p>
                  <p className="text-gray-400 text-sm">Marketing Undergrad</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Accessibility Info</h3>
                  <p className="text-gray-300 text-sm">Visual and verbal route information</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Rating System</h3>
                  <p className="text-gray-300 text-sm">1-5 star ratings for routes and locations</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Community Support</h3>
                  <p className="text-gray-300 text-sm">Live chats and route reviews</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Personalization</h3>
                  <p className="text-gray-300 text-sm">Customized experience for individual needs</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Quick Settings</h3>
                  <p className="text-gray-300 text-sm">Accessibility toggles and preferences</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">AR Navigation</h3>
                  <p className="text-gray-300 text-sm">Guided navigation with alternative routes</p>
                </div>
              </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                  <div className="w-full rounded-lg overflow-hidden">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/personas/features.png`}
                      alt="Feature diagram highlighting 10 key features"
                      className="w-full h-auto object-contain rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-96 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-gray-400">Feature diagram highlighting 10 key features</span>
                    </div>
                  </div>
                </div>
            </div>
          </motion.section>

          {/* Ideation & Prototyping */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Ideation & Prototyping
              </h2>
              
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-4">Prototype 1</h3>
                    <p className="text-gray-300 leading-relaxed">Initial accessibility overlay on Google Maps with basic rating system and toggle settings.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                    <div className="w-full rounded-lg overflow-hidden">
                      <img 
                        src={`${import.meta.env.BASE_URL}images/personas/prototype1.png`}
                        alt="Prototype 1 - Initial accessibility overlay"
                        className="w-full h-auto object-cover rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-48 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-gray-400">Prototype 1</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                      <div className="w-full rounded-lg overflow-hidden">
                        <img 
                          src={`${import.meta.env.BASE_URL}images/personas/prototype2.png`}
                          alt="Prototype 2 - Customizable menu layouts"
                          className="w-full h-auto object-cover rounded-lg"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-48 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-gray-400">Prototype 2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-4">Prototype 2</h3>
                    <p className="text-gray-300 leading-relaxed">Customizable menu layouts with obstacle selection for personalized routing.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-4">Prototype 3</h3>
                    <p className="text-gray-300 leading-relaxed">Advanced routing with pre-search options, detailed settings, and dynamic assistance features.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                    <div className="w-full rounded-lg overflow-hidden">
                      <img 
                        src={`${import.meta.env.BASE_URL}images/personas/prototype3.png`}
                        alt="Prototype 3 - Advanced routing features"
                        className="w-full h-auto object-cover rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-48 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-gray-400">Prototype 3</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                      <div className="w-full rounded-lg overflow-hidden">
                        <img 
                          src={`${import.meta.env.BASE_URL}images/personas/finalprototype.png`}
                          alt="Final Prototype - Complete navigation system"
                          className="w-full h-auto object-cover rounded-lg"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-48 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-gray-400">Final Prototype</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-4">Final Prototype</h3>
                    <p className="text-gray-300 leading-relaxed">Combined features with AR view, scale indicators, and enhanced clarity for comprehensive navigation.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* User Evaluation */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                User Evaluation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                    Round 1 (Wizard of Oz)
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Participants evaluated functionality screen by screen:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300"><strong>Screen 1:</strong> Familiar Google Maps-style layout; quick settings appreciated.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300"><strong>Screen 2:</strong> Mixed feedback on accessibility vs speed options; suggestion to explore inclusive shading options.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300"><strong>Screen 3:</strong> Ratings system understood, color accessibility noted as an issue.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300"><strong>Screen 4:</strong> Toggle accessibility criticized; landmark-based routing suggested.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300"><strong>Screen 5:</strong> Ratings and comments useful; thumbs up/down redundant.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300"><strong>Screen 6:</strong> AR markers understood; visual improvements recommended.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300"><strong>Screen 7:</strong> Detailed settings praised; decoupling transportation mode suggested.</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                    Round 2 (Interactive Prototype)
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Think-aloud method via Zoom with wheelchair user.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Feedback emphasized:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Interior building accessibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Parking and van access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Weather-based obstacle reporting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Validation of star ratings, route customization, and AR visualization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Final Design */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Final Design
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Sign In</h3>
                  <p className="text-gray-300 text-sm">Google sign-in, profile creation for personalization</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Profile Customization</h3>
                  <p className="text-gray-300 text-sm">Accessibility settings, route history, audio/visual aids</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Street View Planning</h3>
                  <p className="text-gray-300 text-sm">Assess route pain points via images and AR warnings</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Location Details</h3>
                  <p className="text-gray-300 text-sm">Annotated building accessibility information</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Directions with Stars</h3>
                  <p className="text-gray-300 text-sm">Segment-based accessibility ratings</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Edit Route</h3>
                  <p className="text-gray-300 text-sm">Modify routes based on obstacles and share custom paths</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Navigation Go</h3>
                  <p className="text-gray-300 text-sm">AR-guided navigation with alternative route options</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Route Rating</h3>
                  <p className="text-gray-300 text-sm">Post-route feedback system with comments, tags, and star ratings</p>
                </div>
              </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                  <div className="w-full rounded-lg overflow-hidden">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/personas/annotatedfigmamockup.png`}
                      alt="Annotated Figma mockups of all 8 screens"
                      className="w-full h-auto object-contain rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-96 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-gray-400">Annotated Figma mockups of all 8 screens</span>
                    </div>
                  </div>
                </div>
              
              {/* Prototype Buttons in Final Design Section (only for luminary-ar) */}
              {projectName === 'luminary-ar' && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <motion.a
                    href="https://www.figma.com/proto/GfNvcasil8GBn6hlEEdbfS/Navi-App?type=design&node-id=4-3&t=FsdoCwziFj19HFvs-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A3&mode=design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-beige-500 text-white font-medium rounded-xl border-2 border-beige-400 overflow-hidden shadow-lg hover:shadow-2xl hover:border-beige-300 transition-all duration-500 cursor-hover group"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 text-lg">View Figma Prototype</span>
                    <motion.svg 
                      className="w-5 h-5 relative z-10" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-beige-400 to-beige-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.a>
                  
                  <motion.a
                    href="https://youtu.be/GK7ktpYKJrI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-beige-500 text-white font-medium rounded-xl border-2 border-beige-400 overflow-hidden shadow-lg hover:shadow-2xl hover:border-beige-300 transition-all duration-500 cursor-hover group"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 text-lg">Watch Demo Video</span>
                    <motion.svg 
                      className="w-5 h-5 relative z-10" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                    </motion.svg>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-beige-400 to-beige-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.a>
                </div>
              )}
            </div>
          </motion.section>

          {/* Conclusion & Next Steps */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Conclusion & Next Steps
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Luminary AR successfully combines research, design, and technical implementation to provide accessible routing 
                for students with mobility impairments. While structural issues remain, the app 
                improves planning efficiency and empowers users with personalized, informed choices.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                  Next Steps
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Incorporate driving and parking accessibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Account for weather conditions and temporary obstacles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Explore internal building routing (stairs, elevators)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Continue collaboration with Project Luminary for long-term impact</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
        </>
      )}

      {/* Project-Specific Sections for Inclusive Mobility Navigation */}
      {projectName === 'inclusive-mobility-navigation' && (
        <>
          {/* Problem Statement */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Problem Statement
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Traditional navigation apps like Google Maps and Apple Maps are designed primarily for able-bodied users, 
                often overlooking the specific needs of individuals with mobility challenges. Users with physical disabilities, whether 
                temporary or permanent, face significant barriers when navigating urban environments, particularly in areas like Chapel Hill 
                with varying terrain and accessibility infrastructure.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The challenge was to design an inclusive navigation solution that seamlessly integrates accessibility features 
                into a mainstream app experience, ensuring that mobility-friendly navigation becomes the standard rather than an afterthought.
              </p>
            </div>
          </motion.section>

          {/* Research Process */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Research Process
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                    Community Insights
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Started by analyzing accessibility forums and community discussions to understand common pain points 
                    and unmet needs in navigation apps.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Reddit accessibility communities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Disability advocacy group forums</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">App store reviews analysis</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                    User Interviews
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Conducted in-depth interviews with wheelchair users and individuals with various mobility challenges 
                    to understand their navigation experiences and needs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">5 wheelchair users</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">3 users with temporary mobility limitations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">2 caregivers and family members</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Personas & User Flows */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Personas & User Flows
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Sarah, 28</h3>
                  <p className="text-gray-300 text-sm mb-4">Permanent wheelchair user</p>
                  <p className="text-gray-300 text-sm">
                    Needs detailed accessibility information, prefers routes with elevators and ramps, 
                    values real-time accessibility updates.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Marcus, 45</h3>
                  <p className="text-gray-300 text-sm mb-4">Temporary mobility limitation</p>
                  <p className="text-gray-300 text-sm">
                    Recently injured, needs accessible routes but wants to maintain independence, 
                    appreciates clear accessibility indicators.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Elena, 35</h3>
                  <p className="text-gray-300 text-sm mb-4">Caregiver</p>
                  <p className="text-gray-300 text-sm">
                    Plans routes for elderly parent, needs comprehensive accessibility information 
                    and emergency assistance features.
                  </p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                  Key User Flow: Emergency Assistance
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Designed a streamlined emergency assistance flow that allows users to quickly contact help 
                  when encountering accessibility barriers or safety concerns during navigation.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Features Discovered */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Features Discovered
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Call for Help</h3>
                  <p className="text-gray-300 text-sm">
                    Emergency contact setup with one-tap calling and location sharing for safety.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Mobility Toggles</h3>
                  <p className="text-gray-300 text-sm">
                    Customizable accessibility preferences for different mobility needs and limitations.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">AR Overlays</h3>
                  <p className="text-gray-300 text-sm">
                    Augmented reality features to highlight accessible routes and obstacles in real-time.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">User Reporting</h3>
                  <p className="text-gray-300 text-sm">
                    Community-driven accessibility reporting system for real-time updates.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Accessibility Tags</h3>
                  <p className="text-gray-300 text-sm">
                    Detailed accessibility information for locations including ramps, elevators, and restrooms.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Rated Route Segments</h3>
                  <p className="text-gray-300 text-sm">
                    Accessibility ratings for different route segments based on user feedback and data.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Ideation */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Ideation
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Through collaborative brainstorming sessions, we explored various approaches to integrate accessibility 
                features seamlessly into mainstream navigation. Key focus areas included maintaining simplicity while 
                adding powerful accessibility tools, ensuring the app remains intuitive for all users.
              </p>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-4">
                  Design Principles
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Inclusive by default, not as an afterthought</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Community-driven accessibility data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Emergency assistance integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Real-time accessibility updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Low-Fidelity Wireframes */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Low-Fidelity Wireframes
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Initial wireframes focused on information architecture and user flow optimization. 
                Key screens included accessibility preferences setup, route planning with accessibility filters, 
                and emergency assistance interface.
              </p>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                <p className="text-gray-400 italic">Wireframe images will be added later</p>
              </div>
            </div>
          </motion.section>

          {/* Usability Testing + Feedback Insights */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Usability Testing + Feedback Insights
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                    Testing Process
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">8 participants with mobility challenges</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Task-based usability testing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Think-aloud protocol</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Post-test interviews</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                    Key Insights
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Emergency features were highly valued</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Accessibility tags needed more detail</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Community reporting was essential</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">AR features needed refinement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* High-Fidelity Prototype Section */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                High-Fidelity Prototype
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                The final prototype incorporated all feedback from usability testing, featuring refined accessibility 
                features, improved information hierarchy, and enhanced emergency assistance capabilities.
              </p>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                <p className="text-gray-400 italic">High-fidelity prototype images will be added later</p>
              </div>
            </div>
          </motion.section>

          {/* Final Thoughts */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Final Thoughts
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                This project reinforced the importance of inclusive design in mainstream applications. By conducting 
                thorough research with the accessibility community and iterating based on real user feedback, we created 
                a navigation solution that serves all users while prioritizing accessibility needs.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The key takeaway was that accessibility features shouldn't be hidden or difficult to access, they should 
                be seamlessly integrated into the core user experience, making navigation more inclusive for everyone.
              </p>
            </div>
          </motion.section>
        </>
      )}

    </ProjectLayout>
  );
};

export default ProjectDetail;
