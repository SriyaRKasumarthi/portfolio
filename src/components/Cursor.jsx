import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState([]);
  const isTouchDevice = useRef(false);

  // Detect touch device
  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  // Manage custom cursor body class
  useEffect(() => {
    if (isTouchDevice.current) return;
    document.body.classList.add('custom-cursor-active');
    return () => {
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  // Desktop cursor effect (only for non-touch devices)
  useEffect(() => {
    // Skip desktop cursor setup if touch device
    if (isTouchDevice.current) return;

    let animationFrame;

    const updatePosition = (event) => {
      cancelAnimationFrame(animationFrame);
      const { clientX, clientY } = event;
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({ x: clientX, y: clientY });
        setIsVisible(true);
      });
    };

    const handleMouseMove = (event) => {
      updatePosition(event);
    };

    const handleMouseEnterDocument = () => {
      setIsVisible(true);
    };

    const handleMouseLeaveDocument = (event) => {
      if (!event.relatedTarget || event.relatedTarget.nodeName === 'HTML') {
        setIsVisible(false);
        setIsHovering(false);
      }
    };

    const handleHoverEnter = () => setIsHovering(true);
    const handleHoverLeave = () => setIsHovering(false);

    const interactiveSelectors = 'button, a, [role="button"], .cursor-hover';
    const addHoverListeners = () => {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.addEventListener('mouseenter', handleHoverEnter);
        el.addEventListener('mouseleave', handleHoverLeave);
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnterDocument);
    document.addEventListener('mouseleave', handleMouseLeaveDocument);
    window.addEventListener('blur', handleMouseLeaveDocument);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnterDocument);
      document.removeEventListener('mouseleave', handleMouseLeaveDocument);
      window.removeEventListener('blur', handleMouseLeaveDocument);
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
    };
  }, []);

  // Mobile ripple effect (only for touch devices)
  useEffect(() => {
    // Skip mobile ripple setup if not touch device
    if (!isTouchDevice.current) return;

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      if (touch) {
        const newRipple = {
          id: Date.now(),
          x: touch.clientX,
          y: touch.clientY,
        };
        setRipples(prev => [...prev, newRipple]);
        
        // Remove ripple after animation completes
        setTimeout(() => {
          setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
        }, 300);
      }
    };

    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  // Don't render desktop cursor on touch devices
  if (isTouchDevice.current) {
    return (
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="fixed pointer-events-none z-50 rounded-full border-2 border-white/60"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 60,
              height: 60,
              x: '-50%',
              y: '-50%',
            }}
            initial={{
              scale: 0,
              opacity: 0.7,
            }}
            animate={{
              scale: 2.5,
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
          />
        ))}
      </AnimatePresence>
    );
  }

  // Desktop cursor (only rendered on non-touch devices)
  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.9 : 0.6,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white/10 pointer-events-none z-40 mix-blend-difference"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.6 : 0.2,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />

      {/* Hover effect dot */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-50 mix-blend-difference"
          style={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </>
  );
};

export default Cursor;
