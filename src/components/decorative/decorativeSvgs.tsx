import React from 'react';

interface DotGridProps {
  className?: string;
}

export const DotGrid: React.FC<DotGridProps> = ({ className }) => {
  const id = 'dm-dot-grid';
  return (
    <svg className={className} width="240" height="240" aria-hidden="true">
      <defs>
        <pattern id={id} width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="240" height="240" fill={`url(#${id})`} className="animate-pulse-slow" />
    </svg>
  );
};

interface CornerMarksProps {
  className?: string;
}

export const CornerMarks: React.FC<CornerMarksProps> = ({ className }) => (
  <svg
    className={className}
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    aria-hidden="true">
    <g className="animate-pulse-slow">
      <path d="M0 32 V0 H32" stroke="currentColor" strokeWidth="1" />
      <path d="M88 0 H120 V32" stroke="currentColor" strokeWidth="1" />
      <path d="M120 88 V120 H88" stroke="currentColor" strokeWidth="1" />
      <path d="M32 120 H0 V88" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

interface LineArtProps {
  className?: string;
}

export const LineArt: React.FC<LineArtProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 800 160"
    fill="none"
    preserveAspectRatio="none"
    aria-hidden="true">
    <path
      d="M0 120 L80 120 L120 40 L160 140 L220 20 L280 100 L340 60 L400 130 L460 30 L520 110 L580 50 L640 120 L700 40 L800 90"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeDasharray="1200"
      className="animate-draw"
    />
  </svg>
);
