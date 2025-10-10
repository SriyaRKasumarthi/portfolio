import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock project data - in a real app, this would come from an API
  const project = {
    id: 1,
    title: 'E-Commerce Mobile App',
    category: 'design',
    description: 'Redesigned shopping experience with focus on accessibility and user flow optimization.',
    details: 'A comprehensive redesign of a mobile e-commerce application focusing on improving user experience, accessibility, and conversion rates. The project involved extensive user research, wireframing, prototyping, and usability testing.',
    technologies: ['Figma', 'Principle', 'Sketch', 'InVision', 'React Native'],
    year: '2024',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    challenges: [
      'Improving conversion rates by 25%',
      'Reducing cart abandonment by 40%',
      'Ensuring WCAG 2.1 AA compliance',
      'Creating a seamless mobile experience'
    ],
    process: [
      'User Research & Analysis',
      'Wireframing & Information Architecture',
      'Visual Design & Prototyping',
      'Usability Testing & Iteration',
      'Development Handoff & Support'
    ],
    results: [
      '25% increase in conversion rates',
      '40% reduction in cart abandonment',
      '95% user satisfaction score',
      'Full WCAG 2.1 AA compliance'
    ]
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    out: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-beige-50 to-white"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      {/* Header */}
      <motion.header
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-beige-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-beige-600 hover:text-beige-800 transition-colors duration-300 group"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">Back to Portfolio</span>
          </motion.button>
        </div>
      </motion.header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-beige-100 text-beige-600 text-sm font-medium rounded-full">
                {project.category}
              </span>
              <span className="text-sm text-gray-500">{project.year}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold font-orbitron text-gradient mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-600 font-space-grotesk leading-relaxed max-w-4xl mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-beige-500 text-white font-medium rounded-lg hover:bg-beige-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-beige-500 text-beige-600 font-medium rounded-lg hover:bg-beige-500 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  View Code
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div 
            variants={itemVariants}
            className="mb-16 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="h-96 bg-gradient-to-br from-beige-100 to-beige-200 flex items-center justify-center">
              <div className="w-32 h-32 bg-beige-300 rounded-full flex items-center justify-center">
                <span className="text-beige-700 font-bold text-4xl font-orbitron">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold font-orbitron text-text mb-6">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.details}
              </p>
              
              <h3 className="text-xl font-semibold font-space-grotesk text-text mb-4">Technologies Used</h3>
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

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold font-orbitron text-text mb-6">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-beige-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Process Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold font-orbitron text-text mb-8">Design Process</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {project.process.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-beige-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-text mb-2">{step}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold font-orbitron text-text mb-8">Results</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gradient-to-br from-beige-50 to-beige-100 rounded-xl text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600 font-medium">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center p-12 bg-gradient-to-r from-beige-100 to-beige-200 rounded-3xl"
          >
            <h2 className="text-3xl font-bold font-orbitron text-text mb-4">
              Interested in working together?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create amazing user experiences together.
            </p>
            <motion.a
              href="mailto:hello@yourname.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-beige-500 text-white font-medium rounded-lg hover:bg-beige-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudy;
