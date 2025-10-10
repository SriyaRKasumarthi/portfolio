import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 modal-overlay"
            variants={overlayVariants}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-beige-100 hover:bg-beige-200 rounded-full flex items-center justify-center transition-colors duration-300"
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-5 h-5 text-beige-600" />
            </motion.button>

            {/* Project Image */}
            <motion.div 
              className="h-80 bg-gradient-to-br from-beige-100 to-beige-200 relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-beige-300 rounded-full flex items-center justify-center">
                  <span className="text-beige-700 font-bold text-4xl font-orbitron">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>

            {/* Project Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-2 bg-beige-100 text-beige-600 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {project.year || '2024'}
                  </span>
                </div>
              </motion.div>

              <motion.h2 
                className="text-3xl font-bold font-orbitron text-text mb-4"
                variants={itemVariants}
              >
                {project.title}
              </motion.h2>

              <motion.p 
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                {project.description}
              </motion.p>

              {project.details && (
                <motion.div variants={itemVariants} className="mb-6">
                  <h3 className="text-xl font-semibold font-space-grotesk text-text mb-3">
                    Project Details
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.details}
                  </p>
                </motion.div>
              )}

              {project.technologies && (
                <motion.div variants={itemVariants} className="mb-6">
                  <h3 className="text-xl font-semibold font-space-grotesk text-text mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-beige-100 text-beige-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div 
                className="flex gap-4"
                variants={itemVariants}
              >
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-beige-500 text-white font-medium rounded-lg hover:bg-beige-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-beige-500 text-beige-600 font-medium rounded-lg hover:bg-beige-500 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
