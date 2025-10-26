import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FilterBar from './FilterBar';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  // Obys-style scroll motion
  const { scrollY } = useScroll();
  const sectionY = useTransform(scrollY, [0, 1000], [0, -50]);
  const titleY = useTransform(scrollY, [0, 800], [0, -30]);

  // Enhanced project data with more details
  const projects = [
    {
      id: 1,
      slug: 'ecommerce-app',
      title: 'E-Commerce Mobile App',
      category: 'design',
      description: 'Redesigned shopping experience with focus on accessibility and user flow optimization.',
      details: 'A comprehensive redesign of a mobile e-commerce application focusing on improving user experience, accessibility, and conversion rates. The project involved extensive user research, wireframing, prototyping, and usability testing.',
      technologies: ['Figma', 'Principle', 'Sketch', 'InVision'],
      year: '2024',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      slug: 'healthcare-dashboard',
      title: 'Healthcare Dashboard',
      category: 'design',
      description: 'Complex data visualization interface for medical professionals.',
      details: 'Designed an intuitive dashboard for healthcare professionals to manage patient data, appointments, and medical records. The interface prioritizes clarity and efficiency in high-stress medical environments.',
      technologies: ['Figma', 'Adobe XD', 'React', 'D3.js'],
      year: '2023',
      liveUrl: 'https://example.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      slug: 'ar-motion-guidance',
      title: 'Designing Visual Encodings for AR Motion',
      fullTitle: 'Investigating Encodings Type and Frame of Reference for Augmented Reality Body Motion Guidance',
      category: 'publications',
      description: 'Research on designing effective visual encodings and perspectives for AR motion guidance systems.',
      details: `Augmented reality (AR) offers promising opportunities to support movement-based activities, such as personal training or physical therapy, with real-time, spatially-situated visual cues. While many approaches leverage AR to guide motion, existing design guidelines focus on simple, upper-body movements within the user's field of view. We lack evidence-based design recommendations for guiding more diverse scenarios involving movements with varying levels of visibility and direction. We conducted an experiment to investigate how different visual encodings and perspectives affect motion guidance performance and usability, using three exercises that varied in visibility and planes of motion. Our findings reveal significant differences in preference and performance across designs. Notably, the best perspective varied depending on motion visibility and showing more information about the overall motion did not necessarily improve motion execution. We provide empirically-grounded guidelines for designing immersive, interactive visualizations for motion guidance to support more effective AR systems.`,
      technologies: ['Augmented Reality', 'Human-Computer Interaction', 'Experimental Design', 'Data Visualization', 'User Study'],
      year: '2025',
      liveUrl: 'https://example.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      slug: 'injury-recovery-ar',
      title: 'Injury Recovery AR Study',
      fullTitle: 'Understanding User Needs for Injury Recovery with Augmented Reality',
      category: 'publications',
      description: 'User-centered design research for AR-enhanced physical therapy and in-home injury recovery.',
      details: `Physical therapy (PT) plays a crucial role in muscle injury recovery, but people struggle to adhere to and perform PT exercises correctly from home. To support challenges faced with in-home PT, augmented reality (AR) holds promise in enhancing patient's engagement and accuracy through immersive interactive visualizations. However, effectively leveraging AR requires a better understanding of patient needs during injury recovery. Through interviews with six individuals undergoing physical therapy, this paper introduces user-centered design considerations integrating AR and body motion data to enhance in-home PT for injury recovery. Our findings identify key challenges and propose design variables for future body-based visualizations of body motion data for PT.`,
      technologies: ['Augmented Reality', 'Physical Therapy', 'User Research', 'Human-Computer Interaction', 'Body Motion Visualization'],
      year: '2025',
      liveUrl: 'https://example.com',
      paperUrl: 'https://0fbd1968-4f2d-4bdb-bce8-e3134bc377d6.filesusr.com/ugd/2e35d5_5b337e2fedf44fa08271f4571a847906.pdf',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      slug: 'physical-therapy-mr',
      title: 'Physical Therapy MR Study',
      fullTitle: 'Understanding Physical Therapy Challenges for Older Adults through Mixed Reality',
      category: 'publications',
      description: 'Research on using mixed reality to address physical therapy challenges for older adults.',
      details: `Physical therapy (PT) is crucial in helping older adults manage chronic conditions and weakening muscles, but older adults face increasing challenges that can impact their PT experience, including increased fatigue, memory loss, and mobility and travel constraints. While current technology attempts to facilitate remote care, they have limitations and are used in-practice infrequently. Mixed reality (MR) technology shows promise for addressing these challenges by creating immersive, context-aware environments remotely that previously could only be achieved in clinical settings. To bridge the gap between MR's potential and its practical application in geriatric PT, we conducted in-depth interviews with three PT clinicians and six older adult patients to understand challenges with PT care and adherence that MR may address. Our findings inform design considerations for supporting older adults' needs through MR and outline technical requirements for practical implementation.`,
      technologies: ['Healthcare', 'Augmented Reality', 'Visualization'],
      year: '2025',
      liveUrl: 'https://example.com',
      paperUrl: 'https://arxiv.org/html/2509.14514v1#abstract',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      slug: 'fintech-banking',
      title: 'Fintech Mobile Banking',
      category: 'design',
      description: 'Secure and intuitive banking experience for digital-first users.',
      details: 'Designed a mobile banking application with a focus on security, accessibility, and user trust. The project involved complex financial workflows and regulatory compliance considerations.',
      technologies: ['Figma', 'Principle', 'React Native', 'Security'],
      year: '2024',
      liveUrl: 'https://example.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: 7,
      slug: 'inclusive-mobility-navigation',
      title: 'Inclusive Mobility Navigation App',
      category: 'design',
      description: 'Design an inclusive navigation app with mobility-friendly features for Chapel Hill.',
      details: 'Designed an inclusive navigation app with mobility-friendly features for Chapel Hill, inspired by Google and Apple Maps. The goal was to enhance accessibility for users with physical disabilities—temporary or permanent—by integrating assistive navigation into widely used platforms.',
      technologies: ['Figma', 'Whimsical Research Boards', 'Interviews', 'UX Research', 'Wireframing', 'Prototyping', 'Inclusive Design', 'Accessibility', 'Usability Testing'],
      year: '2024',
      liveUrl: 'https://example.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: 8,
      slug: 'luminary-ar',
      title: 'Luminary AR',
      category: 'design',
      description: 'Accessible Navigation for Real Mobility Needs',
      details: 'Luminary AR is a campus navigation system designed to prioritize accessibility. By combining real-time routing, accessibility ratings, obstacle reporting, and community support, Luminary AR helps students with mobility impairments navigate efficiently and safely.',
      technologies: ['Product Design', 'UX Research', 'HCI Research', 'Figma', 'Prototyping', 'User Testing', 'Accessibility', 'AR Design'],
      year: '2024',
      liveUrl: 'https://example.com',
      image: '/api/placeholder/400/300'
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleProjectClick = (project) => {
    navigate(`/projects/${project.slug}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.9,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 30,
      transition: { duration: 0.4 }
    }
  };


  return (
    <>
      <motion.section 
        id="projects-section" 
        className="py-24 px-6 bg-gradient-to-b from-beige-50 to-white relative overflow-hidden -mt-8 pt-8"
        style={{ y: sectionY }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-beige-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-beige-300 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold font-orbitron text-text mb-8"
              style={{ y: titleY }}
            >
              Featured Work
            </motion.h2>
            <p className="text-xl text-gray-600 font-space-grotesk max-w-3xl mx-auto leading-relaxed">
              A collection of design projects, publications, and creative explorations that showcase my approach to user-centered design
            </p>
          </motion.div>

          <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                    rotateY: 2,
                    transition: { 
                      duration: 0.4, 
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }}
                  className="group cursor-pointer cursor-hover"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="project-card h-full">
                    {/* Enhanced Project Image */}
                    <div className="h-56 bg-gradient-to-br from-beige-100 to-beige-200 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          className="w-20 h-20 bg-beige-300 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-beige-700 font-bold text-2xl font-orbitron">
                            {project.title.charAt(0)}
                          </span>
                        </motion.div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Hover overlay with project info */}
                      <div className="absolute inset-0 bg-beige-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <motion.div
                          className="text-white text-center"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm font-medium">Click to view details</p>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Enhanced Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-medium text-beige-600 uppercase tracking-wider bg-beige-100 px-3 py-1.5 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold font-space-grotesk text-text mb-3 group-hover:text-beige-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Technology tags */}
                      {project.technologies && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 bg-beige-50 text-beige-600 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-beige-50 text-beige-600 rounded-full">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </motion.section>

    </>
  );
};

export default Projects;