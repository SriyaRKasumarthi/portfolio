import { useEffect, useRef, useState } from 'react';

/**
 * Newspaper magnifying-glass cursor from the Selected Works design.
 */
export default function CustomCursor() {
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    document.body.classList.add('newspaper-cursor-active');
    return () => document.body.classList.remove('newspaper-cursor-active');
  }, []);

  useEffect(() => {
    let x = typeof innerWidth === 'number' ? innerWidth / 2 : 0;
    let y = typeof innerHeight === 'number' ? innerHeight / 2 : 0;
    let rx = x;
    let ry = y;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      const interactive =
        e.target.closest &&
        e.target.closest('button, a, input, textarea, [data-cursor="hover"]');
      setHovering(!!interactive);
    };

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      className={`cursor-ring ${hovering ? 'is-hover' : ''}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" width="24" height="24">
        <circle cx="20" cy="20" r="13" fill="none" stroke="#1a1612" strokeWidth="1.4" />
        <line
          x1="29.5"
          y1="29.5"
          x2="36"
          y2="36"
          stroke="#1a1612"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
