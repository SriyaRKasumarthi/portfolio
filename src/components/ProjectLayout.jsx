import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectLayout = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  children 
}) => {
  const { scrollY } = useScroll();
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  // Parallax effects - reduced on mobile for better performance
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const parallaxMultiplier = isMobile ? 0.3 : 1;
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300 * parallaxMultiplier]);
  const titleY = useTransform(scrollY, [0, 500], [0, -100 * parallaxMultiplier]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50 * parallaxMultiplier]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Parallax Background */}
      <section className="relative h-[75vh] min-h-[500px] overflow-hidden pt-24 md:pt-28 lg:pt-32 scroll-mt-24">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ 
            y: backgroundY,
            transform: 'translateZ(0)'
          }}
        >
          <div 
            className="w-full h-[120%] bg-cover bg-center bg-no-repeat will-change-transform"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundAttachment: isDesktop ? 'fixed' : 'scroll'
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Project Title and Subtitle */}
        <motion.div
          className="absolute bottom-16 sm:bottom-24 md:bottom-32 left-4 sm:left-8 md:left-16 right-4 sm:right-8 md:right-16 max-w-6xl z-10 will-change-transform"
          style={{ 
            y: titleY,
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron mb-4 sm:mb-6 leading-tight will-change-transform"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-space-grotesk leading-relaxed max-w-4xl will-change-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <motion.section
        className="relative z-10 bg-black will-change-transform"
        style={{ 
          opacity: contentOpacity, 
          y: contentY,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
          {children}
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectLayout;
