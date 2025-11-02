import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Intro = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  
  // Obys-style scroll motion
  const textY = useTransform(scrollY, [0, 800], [0, -100]);
  const titleY = useTransform(scrollY, [0, 600], [0, -80]);
  const subtitleY = useTransform(scrollY, [0, 400], [0, -60]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { 
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    tap: { scale: 0.98 }
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="min-h-screen flex items-end justify-start px-6 relative overflow-hidden pb-20 md:pb-24 pt-[3vh] md:pt-[4vh]">
      {/* Enhanced parallax background */}
      <motion.div 
        className="absolute inset-0 parallax-bg"
        style={{ y, opacity }}
      />
      
      {/* 2025 Modern Portfolio Hero Layout */}
      <div className="w-full flex items-end justify-start px-4 sm:px-8 md:px-16 py-8 z-10">
        <motion.div
          className="w-full max-w-none"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Editorial-style heading with scroll motion */}
          <motion.div variants={itemVariants} className="mb-12" style={{ y: textY }}>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold font-orbitron text-text mb-8 leading-[0.85] tracking-tight w-full break-words"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: titleY }}
            >
              Sriya Kasumarthi
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-text/80 font-space-grotesk leading-relaxed w-full max-w-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: subtitleY }}
            >
              UX Designer redefining how humans connect with technology—from web experiences to XR, AI, and robotics interfaces. Great design starts with listening. Purposeful products can only be built after a true understanding of the problem. My goal is simple: make technology enhance human capabilities rather than replacing what makes them human, freeing people to pursue what truly matters to them.
            </motion.p>
          </motion.div>

          {/* Action Buttons positioned bottom-left */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleLinkClick('https://linkedin.com/in/sriya-kasumarthi')}
              className="group relative px-10 py-5 bg-white text-beige-600 font-medium rounded-xl border-2 border-beige-300 overflow-hidden shadow-lg hover:shadow-2xl hover:border-beige-500 transition-all duration-500 cursor-hover"
            >
              <span className="relative z-10 flex items-center gap-4 text-lg">
                <motion.svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </motion.svg>
                LinkedIn
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-beige-50 to-beige-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleLinkClick('https://interfacingtomorrow.substack.com/')}
              className="group relative px-10 py-5 bg-white text-beige-600 font-medium rounded-xl border-2 border-beige-300 overflow-hidden shadow-lg hover:shadow-2xl hover:border-beige-500 transition-all duration-500 cursor-hover"
            >
              <span className="relative z-10 flex items-center gap-4 text-lg">
                <motion.svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </motion.svg>
                Blog
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-beige-50 to-beige-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleLinkClick(`${import.meta.env.BASE_URL}Resume/resume.pdf`)}
              className="group relative px-10 py-5 bg-white text-beige-600 font-medium rounded-xl border-2 border-beige-300 overflow-hidden shadow-lg hover:shadow-2xl hover:border-beige-500 transition-all duration-500 cursor-hover"
            >
              <span className="relative z-10 flex items-center gap-4 text-lg">
                <motion.svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </motion.svg>
                Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-beige-50 to-beige-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;