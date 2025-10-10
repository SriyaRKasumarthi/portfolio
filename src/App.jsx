import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import CaseStudy from './pages/CaseStudy';
import Publications from './pages/Publications';
import Photography from './pages/Photography';
import ProjectDetail from './pages/ProjectDetail';
import Cursor from './components/Cursor';

function App() {
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

  return (
    <div className="App min-h-screen gradient-bg">
      <Cursor />
      <Header />
      
      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
      >
        <Routes>
          <Route path="/" element={
            <>
              <Intro />
              <Projects />
            </>
          } />
          <Route path="/publications" element={<Publications />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/project/:id" element={<CaseStudy />} />
          <Route path="/projects/:projectName" element={<ProjectDetail />} />
        </Routes>
      </motion.main>

      {/* Enhanced Footer */}
      <motion.footer
        className="py-16 px-6 bg-gradient-to-t from-beige-100 to-transparent relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-beige-200 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-beige-300 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            className="flex justify-center space-x-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:hello@yourname.com"
              className="text-beige-600 hover:text-beige-800 transition-colors duration-500 group"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-12 h-12 bg-beige-100 rounded-full flex items-center justify-center group-hover:bg-beige-200 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              className="text-beige-600 hover:text-beige-800 transition-colors duration-500 group"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-12 h-12 bg-beige-100 rounded-full flex items-center justify-center group-hover:bg-beige-200 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </motion.a>
            <motion.a
              href="https://dribbble.com/yourprofile"
              className="text-beige-600 hover:text-beige-800 transition-colors duration-500 group"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-12 h-12 bg-beige-100 rounded-full flex items-center justify-center group-hover:bg-beige-200 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm6.568 8.16c-.169 1.858-.896 3.305-2.05 4.234-.52.4-1.1.715-1.73.944-.64.23-1.31.35-2 .35-.69 0-1.36-.12-2-.35-.63-.229-1.21-.544-1.73-.944-1.154-.929-1.881-2.376-2.05-4.234-.169-1.858.169-3.715 1.154-5.362.985-1.647 2.46-2.94 4.425-3.878 1.965-.938 4.12-.938 6.085 0 1.965.938 3.44 2.231 4.425 3.878.985 1.647 1.323 3.504 1.154 5.362z"/>
                </svg>
              </div>
            </motion.a>
            <motion.a
              href="https://github.com/yourprofile"
              className="text-beige-600 hover:text-beige-800 transition-colors duration-500 group"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-12 h-12 bg-beige-100 rounded-full flex items-center justify-center group-hover:bg-beige-200 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </motion.a>
          </motion.div>
          
          <motion.div
            className="border-t border-beige-200 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-sm mb-4">
              © 2024 UX Designer Portfolio. Crafted with React, Vite, Tailwind CSS, and Framer Motion.
            </p>
            <p className="text-xs text-gray-500">
              Inspired by modern design principles and built for the future of web experiences.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;