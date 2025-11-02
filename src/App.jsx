import React, { useEffect, useRef } from 'react';
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
  const previousPathRef = useRef(location.pathname);
  const isInitialMount = useRef(true);

  // Immediate scroll-to-top on initial mount (handles reloads/direct visits)
  useEffect(() => {
    // Check if this is a reload
    let isReload = false;
    try {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        isReload = navEntries[0].type === 'reload';
      }
    } catch (e) {
      // Ignore errors
    }
    
    // On reload or initial mount - immediately scroll to top and clear saved position
    if (isReload || isInitialMount.current) {
      // Clear any hash that might cause auto-scroll
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
      sessionStorage.removeItem('homeScrollPosition');
      // Prevent browser from restoring scroll position
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    }
  }, []);

  // Save scroll position when leaving home page
  useEffect(() => {
    const previousPath = previousPathRef.current;
    
    if (previousPath === '/' && location.pathname !== '/') {
      // Save scroll position when leaving home page
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      sessionStorage.setItem('homeScrollPosition', scrollPosition.toString());
    }
    
    // Update ref after checking
    previousPathRef.current = location.pathname;
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
  }, [location.pathname]);

  // Scroll to top on route change, or to projects section if coming from nav click
  useEffect(() => {
    const state = location.state;
    const previousPath = previousPathRef.current;
    
    // Listen for navigateToProjects event
    const handleNavigateToProjects = () => {
      // Hide scrollbar during transition
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      // Wait for page to render
      const attemptScroll = (retryCount = 0) => {
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
          const headerHeight = 80;
          const elementPosition = projectsSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Restore scrollbar and trigger fade-in after scroll completes
          setTimeout(() => {
            document.body.style.overflow = originalOverflow || 'auto';
            window.dispatchEvent(new CustomEvent('scrollToProjects'));
          }, 800);
        } else if (retryCount < 3) {
          // If element not found, try again after a short delay (max 3 retries)
          setTimeout(() => attemptScroll(retryCount + 1), 200);
        } else {
          // If still not found after retries, restore scrollbar
          document.body.style.overflow = originalOverflow || 'auto';
        }
      };
      
      setTimeout(() => attemptScroll(), 150);
    };

    window.addEventListener('navigateToProjects', handleNavigateToProjects);

    // Check if this is a reload or direct visit
    let isReload = false;
    let isDirectVisit = false;
    try {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        const navType = navEntries[0].type;
        isReload = navType === 'reload';
        isDirectVisit = navType === 'navigate' && !state && isInitialMount.current;
      } else {
        // Fallback: if no state and initial mount, assume direct visit
        isDirectVisit = !state && isInitialMount.current;
      }
    } catch (e) {
      // Fallback: if no state and initial mount, assume direct visit
      isDirectVisit = !state && isInitialMount.current;
    }

    // On reload or direct visit - ALWAYS start at top, clear all saved state
    if (isReload || isDirectVisit) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      sessionStorage.removeItem('homeScrollPosition');
    } else if (location.pathname === '/') {
      // On home page (not reload, not direct visit)
      // Only auto-scroll to projects if explicitly from Projects nav click
      // Check both state flags to ensure this is ONLY from Projects nav button
      const isFromProjectsNav = state?.scrollToProjects === true && state?.fromProjectsNav === true;
      
      if (isFromProjectsNav) {
        // Coming from Projects nav click - scroll to projects section
        handleNavigateToProjects();
      } else {
        // Check if we should restore scroll position
        const savedScrollPosition = sessionStorage.getItem('homeScrollPosition');
        
        // Only restore if we came from a different page (not initial mount and previous path was not home)
        const cameFromDifferentPage = !isInitialMount.current && previousPath !== '/';
        
        if (savedScrollPosition && cameFromDifferentPage) {
          // Restore scroll position after a short delay for page render
          setTimeout(() => {
            const scrollPosition = parseInt(savedScrollPosition, 10);
            window.scrollTo({
              top: scrollPosition,
              behavior: 'auto'
            });
            // Clear the saved position after restoring
            sessionStorage.removeItem('homeScrollPosition');
          }, 150);
        } else {
          // No saved position or didn't come from different page - start at top
          window.scrollTo({ top: 0, behavior: 'instant' });
          sessionStorage.removeItem('homeScrollPosition');
        }
      }
    } else {
      // On other pages - scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    return () => {
      window.removeEventListener('navigateToProjects', handleNavigateToProjects);
      // Ensure scrollbar is restored on cleanup
      document.body.style.overflow = 'auto';
    };
  }, [location.pathname, location.state]);
  
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