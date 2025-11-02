import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FilterBar from './FilterBar';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);
  const navigate = useNavigate();
  
  // Obys-style scroll motion
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Reduce parallax intensity on mobile
  const parallaxMultiplier = isMobile ? 0.3 : 1;
  const sectionY = useTransform(scrollY, [0, 1000], [0, -50 * parallaxMultiplier]);
  const titleY = useTransform(scrollY, [0, 800], [0, -30 * parallaxMultiplier]);

  // Enhanced project data with more details
  const projects = [
    {
      id: 1,
      slug: 'ar-motion-guidance',
      title: 'Designing Visual Encodings for AR Motion',
      fullTitle: 'Investigating Encodings Type and Frame of Reference for Augmented Reality Body Motion Guidance',
      category: 'publications',
      description: 'Research on designing effective visual encodings and perspectives for AR motion guidance systems.',
      details: `Augmented reality (AR) offers promising opportunities to support movement-based activities, such as personal training or physical therapy, with real-time, spatially-situated visual cues. While many approaches leverage AR to guide motion, existing design guidelines focus on simple, upper-body movements within the user's field of view. We lack evidence-based design recommendations for guiding more diverse scenarios involving movements with varying levels of visibility and direction. We conducted an experiment to investigate how different visual encodings and perspectives affect motion guidance performance and usability, using three exercises that varied in visibility and planes of motion. Our findings reveal significant differences in preference and performance across designs. Notably, the best perspective varied depending on motion visibility and showing more information about the overall motion did not necessarily improve motion execution. We provide empirically-grounded guidelines for designing immersive, interactive visualizations for motion guidance to support more effective AR systems.`,
      technologies: ['Augmented Reality', 'Human-Computer Interaction', 'Experimental Design', 'Data Visualization', 'User Study'],
      year: '2025',
      liveUrl: 'https://example.com',
      image: `${import.meta.env.BASE_URL}images/publications/designing visualencodingsforarmotion.png`
    },
    {
      id: 2,
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
      image: `${import.meta.env.BASE_URL}images/publications/injuryrecoveryarstudy.png`
    },
    {
      id: 3,
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
      image: `${import.meta.env.BASE_URL}images/publications/ptmrstudy.png`
    },
    {
      id: 4,
      slug: 'luminary-ar',
      title: 'Luminary AR',
      category: 'design',
      description: 'Accessible Navigation for Real Mobility Needs',
      details: 'Luminary AR is a campus navigation system designed to prioritize accessibility. By combining real-time routing, accessibility ratings, obstacle reporting, and community support, Luminary AR helps students with mobility impairments navigate efficiently and safely.',
      technologies: ['Product Design', 'UX Research', 'HCI Research', 'Figma', 'Prototyping', 'User Testing', 'Accessibility', 'AR Design'],
      year: '2024',
      liveUrl: 'https://example.com',
      image: `${import.meta.env.BASE_URL}images/personas/luminaryhero.jpg`
    },
    {
      id: 5,
      slug: 'oasis',
      title: 'Oasis',
      category: 'design',
      description: 'An accessible ecosystem of health and wellness products for menopausal people',
      details: 'Designing an accessible ecosystem of health and wellness products for women navigating menopause. A comprehensive system including ring wearable, phone app, Google Nest integration, and VR relaxation experiences.',
      technologies: ['UX Research', 'Competitive Analysis', 'Prototyping', 'VR Design', 'Voice Design', 'Wearable Design', 'Design System', 'Logo Design'],
      year: '2024',
      liveUrl: 'https://example.com',
      image: `${import.meta.env.BASE_URL}images/oasis/oasisapp.png`
    },
    {
      id: 6,
      slug: 'robotic-gestures',
      title: 'Robotic Gestures for Enhanced Virtual Meetings',
      category: 'publications',
      description: 'Exploring how robotic gestures—handshakes, waves, fist bumps, and high fives—can augment web conferencing to enhance social presence, comfort, and engagement.',
      details: 'Remote communication often lacks the social cues that make in-person interactions engaging. This project investigates how robotic gestures can improve engagement, comfort, and social presence in virtual meetings through a pilot study with 4 participants using a Wizard of Oz setup.',
      technologies: ['Human-Robot Interaction', 'UX Research', 'Robotics', 'Virtual Meetings', 'Social Presence'],
      year: '2024',
      liveUrl: 'https://example.com',
      image: `${import.meta.env.BASE_URL}images/robotic-gestures/participantreaction.png`
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  // Intersection Observer for visibility
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

  // Listen for scrollToProjects event to trigger fade-in animation
  useEffect(() => {
    const handleScrollToProjects = () => {
      setShouldAnimateIn(true);
      // Reset after animation completes
      setTimeout(() => {
        setShouldAnimateIn(false);
      }, 1000);
    };

    window.addEventListener('scrollToProjects', handleScrollToProjects);
    
    return () => {
      window.removeEventListener('scrollToProjects', handleScrollToProjects);
    };
  }, []);

  const handleProjectClick = (project) => {
    navigate(`/projects/${project.slug}`);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: shouldAnimateIn ? 0.2 : 0.1
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: shouldAnimateIn ? 0.1 : 0.3,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
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
        className="py-24 px-6 bg-gradient-to-b from-beige-50 to-white relative overflow-hidden -mt-8 pt-8 will-change-transform"
        style={{ 
          y: sectionY,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
        variants={sectionVariants}
        initial="hidden"
        animate={shouldAnimateIn ? "visible" : isVisible ? "visible" : "hidden"}
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
              className="text-5xl md:text-6xl font-bold font-orbitron text-text mb-8 will-change-transform"
              style={{ 
                y: titleY,
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            >
              Featured Work
            </motion.h2>
            <p className="text-xl text-gray-600 font-space-grotesk max-w-3xl mx-auto leading-relaxed">
              A collection of design projects, publications, and creative explorations that showcase my approach to user-centered design
            </p>
          </motion.div>

          <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={shouldAnimateIn ? "visible" : isVisible ? "visible" : "hidden"}
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
                    y: -4,
                    transition: { 
                      duration: 0.25, 
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { duration: 0.15 }
                  }}
                  className="group cursor-pointer cursor-hover min-h-[280px] sm:min-h-[300px]"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  <article 
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-gray-100 hover:border-beige-200/60 transition-all duration-300 flex flex-col h-full"
                    aria-label={`View ${project.title} case study`}
                  >
                    {/* Thumbnail - 40-50% of card height */}
                    <div className="relative h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] bg-gradient-to-br from-beige-100 to-beige-200 overflow-hidden flex-shrink-0">
                      {project.image && project.image !== '/api/placeholder/400/300' ? (
                        <img 
                          src={project.image} 
                          alt={`${project.title} thumbnail`}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-beige-300 rounded-full flex items-center justify-center">
                            <span className="text-beige-700 font-bold text-xl font-orbitron">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Content Section - 50-60% of card height */}
                    <div className="p-4 md:p-5 flex-1 flex flex-col">
                      {/* Category Badge & Year */}
                      <div className="flex items-center justify-between mb-2.5">
                        <span 
                          className="text-[10px] sm:text-xs font-medium text-beige-600 uppercase tracking-wide bg-beige-50 px-2.5 py-1 rounded-full"
                          aria-label={`Category: ${project.category}`}
                        >
                          {project.category}
                        </span>
                        <span className="text-[10px] sm:text-xs text-gray-400 font-medium">
                          {project.year}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-base sm:text-lg md:text-xl font-bold font-space-grotesk text-text mb-2 group-hover:text-beige-600 transition-colors duration-300 leading-snug line-clamp-2">
                        {project.title}
                      </h3>
                      
                      {/* One-line Tagline */}
                      <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed line-clamp-1 mt-auto">
                        {project.description}
                      </p>
                    </div>
                  </article>
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