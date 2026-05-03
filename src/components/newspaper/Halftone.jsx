import { useMemo } from 'react';

const TONES = {
  ink: { bg: '#1a1612', fg: '#f4ede0', dot: '#f4ede0' },
  moss: { bg: '#2c3a2e', fg: '#e8dfc9', dot: '#e8dfc9' },
  rust: { bg: '#4a2418', fg: '#f4ede0', dot: '#f4ede0' },
  ochre: { bg: '#6b4a1f', fg: '#f4ede0', dot: '#f4ede0' },
  burgundy: { bg: '#5a1818', fg: '#f4ede0', dot: '#f4ede0' },
};

export default function Halftone({
  tone = 'ink',
  caption,
  seed = 1,
  className = '',
  aspect,
}) {
  const t = TONES[tone] || TONES.ink;
  const dots = useMemo(() => {
    const out = [];
    let s = seed * 9301 + 49297;
    const rand = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    for (let y = 0; y < 14; y++)
      for (let x = 0; x < 22; x++) {
        const r = 0.6 + rand() * 4.2;
        out.push({
          x: x * 16 + 8 + (rand() - 0.5) * 4,
          y: y * 16 + 8 + (rand() - 0.5) * 4,
          r,
        });
      }
    return out;
  }, [seed]);

  return (
    <div
      className={`halftone ${className}`}
      style={{
        background: t.bg,
        color: t.fg,
        ...(aspect ? { aspectRatio: aspect } : {}),
      }}
    >
      <svg viewBox="0 0 360 224" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id={`vg-${seed}`} cx="50%" cy="40%" r="75%">
            <stop offset="0%" stopColor={t.fg} stopOpacity="0.12" />
            <stop offset="100%" stopColor={t.fg} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="360" height="224" fill={`url(#vg-${seed})`} />
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={t.dot} opacity={0.55} />
        ))}
      </svg>
      {caption && (
        <div className="halftone-caption">
          <span className="hc-bullet">●</span>
          <span>{caption}</span>
        </div>
      )}
    </div>
  );
}
