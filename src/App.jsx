import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import StickyMasthead from './components/newspaper/StickyMasthead';
import ColophonFooter from './components/newspaper/ColophonFooter';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CaseStudy from './pages/CaseStudy';
import ResumeRedirect from './pages/ResumeRedirect';
import Publications from './pages/Publications';
import Photography from './pages/Photography';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="paper newspaper-app">
      <ScrollToTop />
      <CustomCursor />
      <StickyMasthead />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="/resume" element={<ResumeRedirect />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <ColophonFooter />
      </div>
    </div>
  );
}

export default App;
