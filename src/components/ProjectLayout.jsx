import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectLayout = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  children 
}) => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
  const titleY = useTransform(scrollY, [0, 500], [0, -100]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Parallax Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <div 
            className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Project Title and Subtitle */}
        <motion.div
          className="absolute bottom-16 left-16 max-w-2xl z-10"
          style={{ y: titleY }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold font-orbitron mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-space-grotesk leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
        className="relative z-10 bg-black"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-6xl mx-auto px-8 py-24">
          {children}
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectLayout;
