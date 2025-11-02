import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import CaseStudy from './pages/CaseStudy';
import Publications from './pages/Publications';
import Photography from './pages/Photography';
import ProjectDetail from './pages/ProjectDetail';
import Cursor from './components/Cursor';

function App() {
  const location = useLocation();

  // Scroll to top on route change and initial load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);
  
  const pageVariants = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    in: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    out: { 
      opacity: 0, 
      y: -20,
      scale: 1.02,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="App min-h-screen gradient-bg">
      <Cursor />
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="in"
          exit="out"
          className="pt-[3vh] md:pt-[4vh]"
        >
          <Routes location={location}>
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
            <Route path="*" element={
              <>
                <Intro />
                <Projects />
              </>
            } />
          </Routes>
        </motion.main>
      </AnimatePresence>

      {/* Enhanced Footer */}
      <motion.footer
        className="py-16 px-6 bg-gradient-to-t from-beige-100 to-transparent relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto text-center text-text/70 font-space-grotesk">
          <p>&copy; {new Date().getFullYear()} Sriya Kasumarthi. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ and Code 🚀</p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;