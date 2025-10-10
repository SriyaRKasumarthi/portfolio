import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterBar from './FilterBar';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Enhanced project data with more details
  const projects = [
    {
      id: 1,
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
      title: 'UX Research Methods',
      category: 'publications',
      description: 'Comprehensive guide to modern user research techniques and methodologies.',
      details: 'A detailed publication covering various user research methods, when to use them, and how to implement them effectively in design projects. Includes case studies and practical examples.',
      technologies: ['Research', 'Writing', 'Data Analysis'],
      year: '2024',
      liveUrl: 'https://example.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Design System Documentation',
      category: 'publications',
      description: 'Creating scalable design systems for enterprise applications.',
      details: 'Comprehensive documentation and guidelines for implementing design systems in large-scale applications. Covers component libraries, design tokens, and governance processes.',
      technologies: ['Figma', 'Storybook', 'Documentation'],
      year: '2023',
      liveUrl: 'https://example.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'Urban Photography Series',
      category: 'photography',
      description: 'Exploring the intersection of technology and human interaction in urban spaces.',
      details: 'A photographic exploration of how technology shapes human interaction in urban environments. The series examines the relationship between digital and physical spaces.',
      technologies: ['Photography', 'Post-Processing', 'Concept Development'],
      year: '2024',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'Minimalist Product Shots',
      category: 'photography',
      description: 'Clean, focused photography highlighting product design details.',
      details: 'Professional product photography focusing on clean, minimalist compositions that highlight design details and material textures. Used for various client projects and portfolio work.',
      technologies: ['Photography', 'Lighting', 'Post-Processing'],
      year: '2023',
      image: '/api/placeholder/400/300'
    },
    {
      id: 7,
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
      id: 8,
      title: 'Design Thinking Workshop',
      category: 'publications',
      description: 'Interactive workshop materials for teaching design thinking principles.',
      details: 'Developed comprehensive workshop materials and activities for teaching design thinking methodologies. Includes facilitation guides, templates, and interactive exercises.',
      technologies: ['Workshop Design', 'Facilitation', 'Education'],
      year: '2023',
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
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
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
      <section id="projects-section" className="py-24 px-6 bg-gradient-to-b from-beige-50 to-white relative overflow-hidden -mt-32 pt-32">
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
            <h2 className="text-5xl md:text-6xl font-bold font-orbitron text-gradient mb-8">
              Featured Work
            </h2>
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
                  className="group cursor-pointer"
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
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Projects;