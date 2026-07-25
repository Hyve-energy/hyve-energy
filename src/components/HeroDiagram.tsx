export function HeroDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Technical diagram of a modular battery pack cross-section"
    >
      <circle cx="320" cy="320" r="280" stroke="rgba(242,241,238,0.06)" strokeWidth="1" />
      <circle cx="320" cy="320" r="220" stroke="rgba(242,241,238,0.06)" strokeWidth="1" />

      {/* Cell grid — hexagonal cutaway pack cross-section */}
      <g stroke="rgba(242,241,238,0.5)" strokeWidth="1.2">
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => {
            const cx = 200 + col * 60 + (row % 2 === 1 ? 30 : 0);
            const cy = 200 + row * 52;
            if (Math.hypot(cx - 320, cy - 320) > 190) return null;
            return <circle key={`${row}-${col}`} cx={cx} cy={cy} r="19" />;
          })
        )}
      </g>

      {/* Accent highlighted cell */}
      <circle cx="320" cy="330" r="19" stroke="#F04D23" strokeWidth="2" />
      <circle cx="320" cy="330" r="4" fill="#F04D23" />

      {/* Bounding module frame */}
      <rect
        x="140"
        y="140"
        width="360"
        height="360"
        stroke="rgba(242,241,238,0.22)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />

      {/* Dimension lines */}
      <g stroke="rgba(242,241,238,0.35)" strokeWidth="1">
        <line x1="140" y1="524" x2="500" y2="524" />
        <line x1="140" y1="516" x2="140" y2="532" />
        <line x1="500" y1="516" x2="500" y2="532" />
        <line x1="524" y1="140" x2="524" y2="500" />
        <line x1="516" y1="140" x2="532" y2="140" />
        <line x1="516" y1="500" x2="532" y2="500" />
      </g>

      <text x="320" y="546" textAnchor="middle" fontFamily="var(--font-geist-mono)" fontSize="11" fill="rgba(184,184,188,0.9)" letterSpacing="1">
        360.0 MM
      </text>
      <text x="556" y="324" textAnchor="middle" fontFamily="var(--font-geist-mono)" fontSize="11" fill="rgba(184,184,188,0.9)" letterSpacing="1" transform="rotate(90 556 324)">
        360.0 MM
      </text>

      <text x="150" y="130" fontFamily="var(--font-geist-mono)" fontSize="10" fill="rgba(138,138,143,0.9)" letterSpacing="2">
        MODULE-X / REV 2.4
      </text>
      <text x="150" y="586" fontFamily="var(--font-geist-mono)" fontSize="10" fill="rgba(138,138,143,0.9)" letterSpacing="2">
        SEC A—A · 21700 · 12S8P
      </text>
    </svg>
  );
}
