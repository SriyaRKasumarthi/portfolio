import React from 'react';
import { motion } from 'framer-motion';

const FilterBar = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'design', label: 'Design Projects' },
    { id: 'publications', label: 'Publications' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
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
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-6 mb-16 px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {filters.map((filter, index) => (
        <motion.button
          key={filter.id}
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => onFilterChange(filter.id)}
          className={`group relative px-8 py-4 rounded-full text-sm font-medium transition-all duration-500 border-2 overflow-hidden ${
            activeFilter === filter.id
              ? 'bg-beige-500 text-white border-beige-500 shadow-lg'
              : 'text-beige-600 border-beige-300 hover:border-beige-400 hover:bg-beige-50 hover:shadow-md'
          }`}
          style={{
            animationDelay: `${index * 0.1}s`
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            {filter.label}
            {activeFilter === filter.id && (
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </span>
          
          {/* Glowing effect for active state */}
          {activeFilter === filter.id && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: '0 0 20px rgba(184, 164, 122, 0.4)'
              }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(184, 164, 122, 0.4)',
                  '0 0 30px rgba(184, 164, 122, 0.6)',
                  '0 0 20px rgba(184, 164, 122, 0.4)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
          
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          
          {/* Underline animation */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-beige-500"
            initial={{ width: 0 }}
            animate={{ 
              width: activeFilter === filter.id ? '100%' : '0%' 
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.button>
      ))}
    </motion.div>
  );
};

export default FilterBar;