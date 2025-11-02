import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectLayout from '../components/ProjectLayout';
import VideoModal from '../components/VideoModal';

const ProjectDetail = () => {
  const { projectName } = useParams();
  const location = useLocation();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 1000], [0, -200]);
  const textY = useTransform(scrollY, [0, 1200], [0, -30]);
  
  // Video modal state
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Scroll to top on page load or route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Mock project data based on project name
  const getProjectData = (name) => {
    const projects = {
      'ar-motion-guidance': {
        slug: 'ar-motion-guidance',
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
      },
      'oasis': {
        title: 'Oasis',
        subtitle: 'An accessible ecosystem of health and wellness products for menopausal people',
        backgroundImage: '/api/placeholder/1920/1080',
        description: 'Designing an accessible ecosystem of health and wellness products for women navigating menopause. A comprehensive system including ring wearable, phone app, Google Nest integration, and VR relaxation experiences.',
        year: '2024',
        role: 'UX Designer & Researcher',
        duration: '6 months',
        team: '3 designers, 2 researchers',
        challenges: [
          'Addressing confusion and fear around menopause for 50+ million people in the US',
          'Designing holistic solutions across multiple platforms and devices',
          'Ensuring accessibility and voice-friendly interfaces',
          'Creating empathetic, non-medicalized approach to menopause support'
        ],
        process: [
          'User Research: Interviews with menopausal women',
          'Competitive Analysis: Reviewing existing solutions',
          'Proof of Concept: Analyzing Oura ring approach',
          'System Design: 4-part ecosystem architecture',
          'Prototyping: Phone app, VR app, ring design, voice interface',
          'Design System: Comprehensive visual and interaction guidelines'
        ],
        results: [
          'High-fidelity prototype of phone and VR applications',
          'Google Home conversation design for voice accessibility',
          'Ring wearable design for physiological monitoring',
          'Comprehensive design system and logo design',
          'Holistic approach to menopause wellness support'
        ],
        technologies: ['UX Research', 'Competitive Analysis', 'Prototyping', 'VR Design', 'Voice Design', 'Wearable Design', 'Design System', 'Logo Design'],
        images: [
          { title: 'Phone App Prototype', description: 'Mobile application for symptom tracking and community support' },
          { title: 'VR App Design', description: 'Immersive relaxation and wellness experiences' },
          { title: 'Ring Design', description: 'Wearable device for physiological monitoring' },
          { title: 'Competitive Analysis', description: 'Analysis of existing menopause and wellness solutions' }
        ]
      },
      'robotic-gestures': {
        title: 'Robotic Gestures for Enhanced Virtual Meetings',
        subtitle: 'Exploring how robotic gestures can augment web conferencing to enhance social presence, comfort, and engagement',
        backgroundImage: '/api/placeholder/1920/1080',
        description: 'Remote communication often lacks the social cues that make in-person interactions engaging. This project investigates how robotic gestures can improve engagement, comfort, and social presence in virtual meetings through a pilot study with 4 participants using a Wizard of Oz setup.',
        year: '2025',
        role: 'UX Researcher & Human-Robot Interaction Designer',
        duration: '3 months',
        team: '1 researcher, 1 robotics engineer',
        challenges: [
          'Designing natural robotic gestures that mirror human movements',
          'Ensuring safety in human-robot interaction',
          'Creating intuitive multi-step gesture sequences',
          'Maintaining social presence synchronization'
        ],
        process: [
          'Gesture Design: Mirroring natural human movements',
          'Pilot Study: 4 participants with Wizard of Oz setup',
          'Data Collection: Qualitative and quantitative feedback',
          'Analysis: Group debrief and survey analysis'
        ],
        results: [
          'Demonstrated meaningful engagement enhancement in virtual meetings',
          'Consistent gestures build trust and reduce awkwardness',
          'Adaptive gesture speed improves perceived naturalness',
          'Actionable insights for future HRI systems'
        ],
        technologies: ['Human-Robot Interaction', 'UX Research', 'Robotics', 'Virtual Meetings', 'Social Presence'],
        images: [
          { title: 'Robotic Arm Setup', description: 'Figure 1: Robotic arm setup relative to participant and laptop' },
          { title: 'Interaction Flow', description: 'Figure 2: Interaction flow from arrival → gesture → response → reset' },
          { title: 'Participant Reaction', description: 'Figure 3: Example participant reaction to robotic gesture' }
        ]
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
              {project.slug === 'ar-motion-guidance' ? (
                <motion.div
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gray-500 text-white font-medium rounded-xl border-2 border-gray-400 cursor-not-allowed opacity-60"
                >
                  <span className="relative z-10 text-lg">Coming Soon</span>
                  <motion.svg 
                    className="w-5 h-5 relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </motion.svg>
                </motion.div>
              ) : (
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
              )}
            </div>
          )}
          
          {/* Project Details Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Year</h3>
              <p className="text-xl font-semibold text-white">{project.year}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Role</h3>
              <p className="text-xl font-semibold text-white">{project.role}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Duration</h3>
              <p className="text-xl font-semibold text-white">{project.duration}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
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
              className="px-6 py-3 bg-white/10 text-white rounded-full border border-white/20"
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
              <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
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
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
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
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-3">Participant A</h4>
                    <p className="text-gray-300 text-sm mb-4">Experienced wheelchair and walker user, service animal handler, deeply involved in accessibility advocacy.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
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
                <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
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
                <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
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
                <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
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
                <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
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
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Accessibility Info</h3>
                  <p className="text-gray-300 text-sm">Visual and verbal route information</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Rating System</h3>
                  <p className="text-gray-300 text-sm">1-5 star ratings for routes and locations</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Community Support</h3>
                  <p className="text-gray-300 text-sm">Live chats and route reviews</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Personalization</h3>
                  <p className="text-gray-300 text-sm">Customized experience for individual needs</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Quick Settings</h3>
                  <p className="text-gray-300 text-sm">Accessibility toggles and preferences</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">AR Navigation</h3>
                  <p className="text-gray-300 text-sm">Guided navigation with alternative routes</p>
                </div>
              </div>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
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
                  <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
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
                    <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
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
                  <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
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
                    <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
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
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Sign In</h3>
                  <p className="text-gray-300 text-sm">Google sign-in, profile creation for personalization</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Profile Customization</h3>
                  <p className="text-gray-300 text-sm">Accessibility settings, route history, audio/visual aids</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Street View Planning</h3>
                  <p className="text-gray-300 text-sm">Assess route pain points via images and AR warnings</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Location Details</h3>
                  <p className="text-gray-300 text-sm">Annotated building accessibility information</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Directions with Stars</h3>
                  <p className="text-gray-300 text-sm">Segment-based accessibility ratings</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Edit Route</h3>
                  <p className="text-gray-300 text-sm">Modify routes based on obstacles and share custom paths</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Navigation Go</h3>
                  <p className="text-gray-300 text-sm">AR-guided navigation with alternative route options</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Route Rating</h3>
                  <p className="text-gray-300 text-sm">Post-route feedback system with comments, tags, and star ratings</p>
                </div>
              </div>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
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

      {/* Project-Specific Sections for Oasis */}
      {projectName === 'oasis' && (
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
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.a
                  href="https://devpost.com/sriyakasumarthi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-beige-500 text-white font-medium rounded-xl border-2 border-beige-400 overflow-hidden shadow-lg hover:shadow-2xl hover:border-beige-300 transition-all duration-500 cursor-hover group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 text-lg">View Devpost</span>
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
                  href="https://www.figma.com/proto/HjruOQE1DXCCx8iOYkN3Wy/menopause-app?type=design&node-id=48-21221&t=bpYreXVedSGX7o8G-1&scaling=scale-down&page-id=48%3A21173&starting-point-node-id=48%3A21221&show-proto-sidebar=1"
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </motion.svg>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-beige-400 to-beige-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.a>
              </div>
              
              {/* Logo Section */}
              <div className="bg-white/5 rounded-xl p-8 border border-white/10 mb-8 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/oasis/oasislogo.png`}
                    alt="Oasis Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-gray-400">Oasis Logo</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white">Oasis</h3>
                <p className="text-gray-300 mt-2">Health & Wellness Ecosystem</p>
              </div>
              
              {/* Scenario Card */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Scenario</h3>
                <p className="text-gray-300 leading-relaxed">
                  Over 50 million people are navigating menopause in the United States alone, and their experience is clouded by confusion and fear.
                </p>
              </div>

              {/* Tasks Card */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Tasks</h3>
                <p className="text-gray-300 leading-relaxed">
                  Design an accessible ecosystem of health and wellness products for women navigating menopause.
                </p>
              </div>

              {/* Actions and Results - Horizontal Layout */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Actions</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">User Research and Interviews</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Competitive Analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Prototyping features</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Results</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    High-Fidelity Prototype of Phone and VR App, Google Home Conversation design, Ring design
                  </p>
                </div>
              </div>

              {/* My Responsibilities - Grid Layout */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">My Responsibilities</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-gray-300 text-sm">Competitive Analysis</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-gray-300 text-sm">User Interviews</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-gray-300 text-sm">Prototyping UX features and user flow</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-gray-300 text-sm">VR App High-fidelity prototype</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-gray-300 text-sm">Google Home Conversation design</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-gray-300 text-sm">Design System</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-gray-300 text-sm">Ring Design</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-gray-300 text-sm">Logo Design</span>
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
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                  Identifying the Problem Space
                </h3>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
                  <p className="text-gray-300 italic text-lg leading-relaxed">
                    "Efforts are being taken to mitigate the medicalization of menopause, by designing for menopausal [people's] overall well-being rather than a specific physiological or psychological symptom." – Thiruvenkatanathan Et al.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                  User Research
                </h3>
                
                <div className="bg-white/5 rounded-xl p-8 border border-white/10 mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Competitive Analysis</h4>
                  <p className="text-gray-300 mb-6">Analysis of existing menopause and wellness solutions to understand market gaps and opportunities.</p>
                  
                  <div className="w-full rounded-lg overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}images/oasis/competitiveanalysis.png`}
                      alt="Competitive Analysis"
                      className="w-full h-auto object-contain rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-96 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-gray-400">Competitive Analysis</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">User interviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Competitive Analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Proof of Concept: Oura</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* System Overview & Prototypes */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                System Overview & Prototypes
              </h2>
              
              <div className="mb-12">
                <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                  4-Part Ecosystem
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-4">Ring Wearable</h4>
                    <p className="text-gray-300">Monitors physiological changes</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-4">Phone App</h4>
                    <p className="text-gray-300">Symptom tracking, advice, community</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-4">Google Nest</h4>
                    <p className="text-gray-300">Voice Assistant, Accessibility</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-4">Virtual Reality</h4>
                    <p className="text-gray-300">Immersive relaxation</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-6">
                  Prototypes & Proof of Concept
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
                    <div className="w-full rounded-lg overflow-hidden">
                      <img 
                        src={`${import.meta.env.BASE_URL}images/oasis/oasisapp.png`}
                        alt="Oasis Phone App Prototype"
                        className="w-full h-auto object-contain rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-64 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-gray-400">Phone App Prototype</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mt-4">Phone App</h4>
                    <p className="text-gray-300 text-sm mt-2">Mobile application for symptom tracking and community support</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
                    <div className="w-full rounded-lg overflow-hidden">
                      <img 
                        src={`${import.meta.env.BASE_URL}images/oasis/oasisvr.png`}
                        alt="Oasis VR App Design"
                        className="w-full h-auto object-contain rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-64 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-gray-400">VR App Design</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mt-4">VR App</h4>
                    <p className="text-gray-300 text-sm mt-2">Immersive relaxation and wellness experiences</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
                    <div className="w-full rounded-lg overflow-hidden">
                      <img 
                        src={`${import.meta.env.BASE_URL}images/oasis/oasisring.png`}
                        alt="Oasis Ring Design"
                        className="w-full h-auto object-contain rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-64 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-gray-400">Ring Design</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mt-4">Ring Design</h4>
                    <p className="text-gray-300 text-sm mt-2">Wearable device for physiological monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* UX Design Goals */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                UX Design Goals
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">User-Centered Design</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Clear Medical Explanations</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Menopause Specific Symptoms</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Voice Accessible</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">AI Analytics and Insights</h3>
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
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Symptom logging</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">In-app Shop for Supplies</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Medication Reminders</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">In-app Appointment Booking</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Stress Reduction Techniques</h3>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Sensitive Notifications</h3>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Lessons Learned */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Lessons Learned
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">The importance of empathy</h3>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Menopause is often misunderstood and characterized by physical and emotional changes</h3>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Menopause is interdisciplinary; therefore its solutions must be holistic</h3>
                </div>
              </div>
            </div>
          </motion.section>
        </>
      )}

      {/* Project-Specific Sections for Robotic Gestures */}
      {projectName === 'robotic-gestures' && (
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
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.a
                  href={`${import.meta.env.BASE_URL}images/robotic-gestures/Robotics Augmented Web Conferencing.docx.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-beige-500 text-white font-medium rounded-xl border-2 border-beige-400 overflow-hidden shadow-lg hover:shadow-2xl hover:border-beige-300 transition-all duration-500 cursor-hover group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 text-lg">View Research Paper</span>
                  <motion.svg
                    className="w-5 h-5 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </motion.svg>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-beige-400 to-beige-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.a>

                <motion.button
                  onClick={() => setIsVideoModalOpen(true)}
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
                </motion.button>
              </div>
              
              <div className="bg-white/5 rounded-xl p-8 border border-white/10 mb-8">
                <p className="text-lg text-gray-300 leading-relaxed font-space-grotesk">
                  Remote communication often lacks the social cues that make in-person interactions engaging. This project investigates how robotic gestures can improve engagement, comfort, and social presence in virtual meetings.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Role & Tools */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Role & Tools
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-2xl font-semibold font-orbitron text-white mb-4">Role</h3>
                  <p className="text-gray-300 font-space-grotesk">UX Researcher & Human-Robot Interaction Designer</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-2xl font-semibold font-orbitron text-white mb-4">Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 font-space-grotesk">UFactory xArm robotic arm</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 font-space-grotesk">Zoom</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 font-space-grotesk">VS Code</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
                <h3 className="text-2xl font-semibold font-orbitron text-white mb-4">Collaboration</h3>
                <p className="text-gray-300 font-space-grotesk">Worked with a robotics engineer to implement gestures</p>
              </div>
            </div>
          </motion.section>

          {/* Approach */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Approach
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold font-orbitron text-white mb-4">Gesture Design</h3>
                  <p className="text-gray-300 font-space-grotesk">Designed robotic gestures to mirror natural human movements.</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold font-orbitron text-white mb-4">Pilot Study</h3>
                  <p className="text-gray-300 font-space-grotesk">Conducted a pilot study with 4 participants using a Wizard of Oz setup to control the robot in real time.</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold font-orbitron text-white mb-4">Data Collection</h3>
                  <p className="text-gray-300 font-space-grotesk">Collected qualitative and quantitative feedback via group debrief and surveys.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Key Design Considerations */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Key Design Considerations
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold font-orbitron text-white mb-4">Ergonomics</h3>
                  <p className="text-gray-300 font-space-grotesk">Gestures positioned at natural human heights (handshake/fist bump at chest, high five at head, wave slightly higher).</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold font-orbitron text-white mb-4">Safety</h3>
                  <p className="text-gray-300 font-space-grotesk">Robot moves slowly; handshake grip kept light to avoid pinching.</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold font-orbitron text-white mb-4">Social Presence</h3>
                  <p className="text-gray-300 font-space-grotesk">Synchronization with on-screen researcher to reinforce telepresence.</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold font-orbitron text-white mb-4">Intuitiveness</h3>
                  <p className="text-gray-300 font-space-grotesk">Multi-step gestures broken into clear phases for smooth interaction.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Findings & Insights */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Findings & Insights
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold font-orbitron text-white mb-4">Trust Building</h3>
                  <p className="text-gray-300 font-space-grotesk">Consistent gestures build trust and reduce awkwardness.</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold font-orbitron text-white mb-4">Naturalness</h3>
                  <p className="text-gray-300 font-space-grotesk">Adaptive gesture speed and responsiveness can improve perceived naturalness.</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold font-orbitron text-white mb-4">Applications</h3>
                  <p className="text-gray-300 font-space-grotesk">Potential applications: professional meetings, virtual classrooms, telemedicine, and remote assistance.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Visuals */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Visuals
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side - Vertical image */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-full rounded-lg overflow-hidden mb-4">
                    <img
                      src={`${import.meta.env.BASE_URL}images/robotic-gestures/setup.JPG`}
                      alt="Figure 1: Robotic arm setup relative to participant and laptop"
                      className="w-full h-auto object-contain rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-64 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-gray-400">Figure 1: Robotic arm setup</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold font-orbitron text-white mb-2">Figure 1</h3>
                  <p className="text-gray-300 font-space-grotesk text-sm">Robotic arm setup relative to participant and laptop</p>
                </div>
                
                {/* Right side - Two horizontal images stacked */}
                <div className="space-y-8">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                    <div className="w-full rounded-lg overflow-hidden mb-4">
                      <img
                        src={`${import.meta.env.BASE_URL}images/robotic-gestures/moresetup.JPG`}
                        alt="Figure 2: Additional robotic arm setup and configuration"
                        className="w-full h-auto object-contain rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-64 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-gray-400">Figure 2: Additional setup</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold font-orbitron text-white mb-2">Figure 2</h3>
                    <p className="text-gray-300 font-space-grotesk text-sm">Additional robotic arm setup and configuration</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                    <div className="w-full rounded-lg overflow-hidden mb-4">
                      <img
                        src={`${import.meta.env.BASE_URL}images/robotic-gestures/participantreaction.png`}
                        alt="Figure 3: Example participant reaction to robotic gesture"
                        className="w-full h-auto object-contain rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-64 bg-gray-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-gray-400">Figure 3: Participant reaction</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold font-orbitron text-white mb-2">Figure 3</h3>
                    <p className="text-gray-300 font-space-grotesk text-sm">Example participant reaction to robotic gesture</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Outcome */}
          <motion.section 
            className="mb-24"
            style={{ y: textY }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
                Outcome
              </h2>
              
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <p className="text-lg text-gray-300 leading-relaxed font-space-grotesk">
                  Demonstrated that robotic gestures can meaningfully enhance engagement in virtual meetings. Provides actionable insights for future HRI systems in professional and educational remote contexts.
                </p>
              </div>
            </div>
          </motion.section>
        </>
      )}

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc={`${import.meta.env.BASE_URL}images/robotic-gestures/Testing.MOV`}
        videoType="video/quicktime"
      />

    </ProjectLayout>
  );
};

export default ProjectDetail;