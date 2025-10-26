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

  return (
    <header className="fixed top-8 left-8 z-50">
      <motion.div
        className="w-14 h-14 rounded-full overflow-hidden cursor-pointer group cursor-hover"
        onClick={handleHomeClick}
        title={location.pathname !== '/' ? "Go to Home" : "Home"}
        whileHover={{ 
          scale: 1.15, 
          rotate: 8,
          transition: { 
            duration: 0.6, 
            ease: [0.16, 1, 0.3, 1],
            type: "spring",
            stiffness: 300,
            damping: 20
          }
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -30, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { 
            duration: 0.8, 
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1]
          }
        }}
      >
        {/* Profile image with hover effects */}
        <div className="w-full h-full relative overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}images/profile/Headshot.jpg`}
            alt="Sriya Kasumarthi"
            className="w-full h-full object-cover"
          />
          
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Subtle dark gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* Home indicator - only show when not on home page */}
          {location.pathname !== '/' && (
            <motion.div
              className="absolute top-1 right-1 w-3 h-3 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-1.5 h-1.5 bg-beige-600 rounded-full" />
            </motion.div>
          )}
        </div>
        
        {/* Glowing ring effect on hover */}
        <div className="absolute inset-0 rounded-full border-2 border-beige-500 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
             style={{ boxShadow: '0 0 20px rgba(184, 164, 122, 0.4)' }} />
      </motion.div>
    </header>
  );
};

export default Header;