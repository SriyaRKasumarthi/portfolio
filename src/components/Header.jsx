import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  // Check if we're on a project page
  const isProjectPage = location.pathname.startsWith('/projects/');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isProjectPage ? 'bg-black' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-start">
        {/* Home Button */}
        <motion.button
          onClick={handleHomeClick}
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
      </div>
    </header>
  );
};

export default Header;