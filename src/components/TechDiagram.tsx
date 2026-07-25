type Variant = "architecture" | "thermal" | "safety" | "bms";

export function TechDiagram({ variant, className = "" }: { variant: Variant; className?: string }) {
  if (variant === "architecture") {
    return (
      <svg viewBox="0 0 560 320" className={className} role="img" aria-label="Modular battery architecture diagram scaling from cell to pack">
        <g stroke="rgba(242,241,238,0.4)" strokeWidth="1" fontFamily="var(--font-geist-mono)" fontSize="10" fill="rgba(184,184,188,0.9)">
          <rect x="20" y="130" width="60" height="60" fill="none" />
          <circle cx="50" cy="160" r="14" stroke="#F04D23" strokeWidth="1.4" />
          <text x="20" y="210" letterSpacing="1">CELL</text>

          <path d="M84 160H130" markerEnd="url(#arrow)" />
          <rect x="140" y="110" width="110" height="100" fill="none" />
          {Array.from({ length: 3 }).map((_, r) =>
            Array.from({ length: 4 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={160 + c * 24} cy={140 + r * 26} r="8" />
            ))
          )}
          <text x="140" y="228" letterSpacing="1">MINI-MODULE</text>

          <path d="M254 160H300" markerEnd="url(#arrow)" />
          <rect x="310" y="90" width="130" height="140" fill="none" />
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x="322" y={100 + i * 21} width="106" height="14" fill="none" stroke="rgba(242,241,238,0.5)" />
          ))}
          <text x="310" y="248" letterSpacing="1">MAIN MODULE</text>

          <path d="M444 160H490" markerEnd="url(#arrow)" />
          <rect x="500" y="70" width="50" height="180" fill="none" stroke="#F04D23" strokeWidth="1.4" />
          <text x="480" y="268" letterSpacing="1">PACK</text>
        </g>
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0 0L8 4L0 8Z" fill="rgba(242,241,238,0.5)" />
          </marker>
        </defs>
      </svg>
    );
  }

  if (variant === "thermal") {
    return (
      <svg viewBox="0 0 560 280" className={className} role="img" aria-label="Thermal management cross-section diagram">
        <rect x="60" y="60" width="440" height="160" stroke="rgba(242,241,238,0.4)" strokeWidth="1" fill="none" />
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x={80 + i * 68} y="80" width="48" height="120" stroke="rgba(242,241,238,0.45)" strokeWidth="1" fill="none" />
        ))}
        <rect x="60" y="228" width="440" height="14" fill="none" stroke="#F04D23" strokeWidth="1.4" />
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d={`M${90 + i * 52} 228 V206`}
            stroke="#F04D23"
            strokeWidth="1.2"
            markerEnd="url(#arrowT)"
          />
        ))}
        <text x="60" y="46" fontFamily="var(--font-geist-mono)" fontSize="10" fill="rgba(184,184,188,0.9)" letterSpacing="1">
          CELL ARRAY
        </text>
        <text x="60" y="258" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#F04D23" letterSpacing="1">
          COLD PLATE — LIQUID / AIR PATH
        </text>
        <defs>
          <marker id="arrowT" markerWidth="8" markerHeight="8" refX="4" refY="7" orient="auto">
            <path d="M0 8L4 0L8 8Z" fill="#F04D23" />
          </marker>
        </defs>
      </svg>
    );
  }

  if (variant === "safety") {
    return (
      <svg viewBox="0 0 560 280" className={className} role="img" aria-label="Cell propagation safety barrier diagram">
        <g stroke="rgba(242,241,238,0.45)" strokeWidth="1" fill="none">
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx={110 + i * 110} cy="140" r="34" />
          ))}
        </g>
        <circle cx="220" cy="140" r="34" stroke="#F04D23" strokeWidth="1.8" />
        {[1, 2].map((i) => (
          <rect
            key={i}
            x={165 + i * 55}
            y="90"
            width="10"
            height="100"
            fill="rgba(240,77,35,0.12)"
            stroke="#F04D23"
            strokeWidth="1"
          />
        ))}
        <text x="60" y="220" fontFamily="var(--font-geist-mono)" fontSize="10" fill="rgba(184,184,188,0.9)" letterSpacing="1">
          THERMAL EVENT — CELL 2
        </text>
        <text x="60" y="238" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#F04D23" letterSpacing="1">
          INTUMESCENT BARRIER — PROPAGATION CONTAINED
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 560 200" className={className} role="img" aria-label="Battery management system block diagram">
      <g stroke="rgba(242,241,238,0.45)" strokeWidth="1" fontFamily="var(--font-geist-mono)" fontSize="10" fill="rgba(184,184,188,0.9)">
        <rect x="20" y="70" width="110" height="60" fill="none" />
        <text x="34" y="105" letterSpacing="1">CELL GROUP</text>

        <path d="M130 100H190" markerEnd="url(#arrowB)" />
        <rect x="200" y="60" width="130" height="80" fill="none" stroke="#F04D23" strokeWidth="1.4" />
        <text x="216" y="105" fill="#F04D23" letterSpacing="1">BMS CORE</text>

        <path d="M330 100H390" markerEnd="url(#arrowB)" />
        <rect x="400" y="70" width="140" height="60" fill="none" />
        <text x="416" y="98" letterSpacing="1">CAN / J1939</text>
        <text x="416" y="114" letterSpacing="1">VEHICLE ECU</text>
      </g>
      <defs>
        <marker id="arrowB" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0L8 4L0 8Z" fill="rgba(242,241,238,0.5)" />
        </marker>
      </defs>
    </svg>
  );
}
