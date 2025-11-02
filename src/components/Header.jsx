import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      // Navigate to home - scroll position will be restored by App.jsx
      navigate('/');
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // On home page, smooth scroll to projects section
      scrollToProjectsSection();
    } else {
      // On other pages, navigate to home with explicit Projects nav flag
      // Clear saved scroll position so we scroll to projects instead
      sessionStorage.removeItem('homeScrollPosition');
      // Set explicit flag to indicate this is from Projects nav click
      navigate('/', { 
        state: { 
          scrollToProjects: true,
          fromProjectsNav: true 
        } 
      });
      // Dispatch custom event for scroll handling
      window.dispatchEvent(new CustomEvent('navigateToProjects'));
    }
  };

  // Helper function to scroll to projects section
  const scrollToProjectsSection = () => {
    // Hide scrollbar during animation
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      const headerHeight = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Restore scrollbar and trigger fade-in after scroll completes
      setTimeout(() => {
        document.body.style.overflow = originalOverflow || 'auto';
        window.dispatchEvent(new CustomEvent('scrollToProjects'));
      }, 800);
    } else {
      // If section not found, restore scrollbar immediately
      document.body.style.overflow = originalOverflow || 'auto';
    }
  };

  // Check if we're on a project page
  const isProjectPage = location.pathname.startsWith('/projects/');

  // Animation variants for navbar links
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isProjectPage ? 'bg-black' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Home Button */}
        <motion.button
          onClick={handleHomeClick}
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              transition: { 
                duration: 0.3, 
                ease: [0.16, 1, 0.3, 1]
              }
            }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/profile/Headshot.jpg`}
              alt="Sriya Kasumarthi"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.button>

        {/* Projects Link */}
        <motion.button
          onClick={handleProjectsClick}
          className={`font-space-grotesk text-sm md:text-base font-medium transition-colors duration-300 ${
            isProjectPage 
              ? 'text-beige-400 hover:text-beige-300' 
              : 'text-text hover:text-beige-600'
          }`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
        >
          Projects
        </motion.button>
      </div>
    </header>
  );
};

export default Header;