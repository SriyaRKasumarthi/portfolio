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
        {/* Enhanced profile image with gradient overlay */}
        <div className="w-full h-full bg-gradient-to-br from-beige-400 via-beige-500 to-beige-600 flex items-center justify-center relative overflow-hidden">
          <span className="text-white font-bold text-xl font-orbitron relative z-10">
            UX
          </span>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          
          {/* Home indicator - only show when not on home page */}
          {location.pathname !== '/' && (
            <motion.div
              className="absolute top-1 right-1 w-3 h-3 bg-white/90 rounded-full flex items-center justify-center"
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