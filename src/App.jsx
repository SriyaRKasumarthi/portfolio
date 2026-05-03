import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import {
  TweaksPanel,
  TweakSection,
  TweakSlider,
  TweakColor,
  TweakRadio,
} from './components/TweaksPanel';
import { TWEAK_DEFAULTS, useTweaks } from './hooks/useTweaks';
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
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--paper-top', t.paperTop);
    r.setProperty('--paper-bot', t.paperBottom);
    r.setProperty('--paper-bottom', t.paperBottom);
    r.setProperty('--ink', t.ink);
    r.setProperty('--burgundy', t.accent);
    r.setProperty('--grain-opacity', String(t.grain));
    document.body.style.fontSize = `${t.bodySize}px`;
    r.setProperty('--headline-weight', t.headlineWeight === 'bold' ? '900' : '700');
  }, [t]);

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
        <TweaksPanel title="Tweaks">
          <TweakSection label="Paper" />
          <TweakColor label="Top tone" value={t.paperTop} onChange={(v) => setTweak('paperTop', v)} />
          <TweakColor
            label="Bottom tone"
            value={t.paperBottom}
            onChange={(v) => setTweak('paperBottom', v)}
          />
          <TweakSlider
            label="Grain"
            value={t.grain}
            min={0}
            max={1}
            step={0.05}
            onChange={(v) => setTweak('grain', v)}
          />
          <TweakSection label="Ink" />
          <TweakColor label="Body ink" value={t.ink} onChange={(v) => setTweak('ink', v)} />
          <TweakColor label="Accent" value={t.accent} onChange={(v) => setTweak('accent', v)} />
          <TweakSection label="Type" />
          <TweakSlider
            label="Body size"
            value={t.bodySize}
            min={14}
            max={22}
            step={1}
            unit="px"
            onChange={(v) => setTweak('bodySize', v)}
          />
          <TweakRadio
            label="Headline"
            value={t.headlineWeight}
            options={['regular', 'bold']}
            onChange={(v) => setTweak('headlineWeight', v)}
          />
        </TweaksPanel>
      </div>
    </div>
  );
}

export default App;
