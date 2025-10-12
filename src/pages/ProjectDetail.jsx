import React from 'react';
import { useParams } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectLayout from '../components/ProjectLayout';

const ProjectDetail = () => {
  const { projectName } = useParams();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 1000], [0, -200]);
  const textY = useTransform(scrollY, [0, 1200], [0, -30]);

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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
            Project Overview
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-12">
            {project.description}
          </p>
          
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
