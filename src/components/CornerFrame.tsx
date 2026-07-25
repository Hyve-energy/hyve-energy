type CornerFrameProps = {
  className?: string;
  label?: string;
  tone?: "default" | "accent";
};

/**
 * Signature decorative element: corner registration marks styled after
 * engineering datasheet / optical-alignment reticles. Used to frame
 * imagery, cards, and diagrams throughout the site to reinforce the
 * "engineered, measured, precise" brand quality — without resorting to
 * generic battery iconography.
 */
export function CornerFrame({ className = "", label, tone = "default" }: CornerFrameProps) {
  const strokeColor = tone === "accent" ? "#F04D23" : "rgba(242,241,238,0.35)";
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 22 22" className="absolute -left-px -top-px">
        <path d="M1 9V1H9" stroke={strokeColor} strokeWidth="1.4" fill="none" />
      </svg>
      <svg width="22" height="22" viewBox="0 0 22 22" className="absolute -right-px -top-px">
        <path d="M13 1H21V9" stroke={strokeColor} strokeWidth="1.4" fill="none" />
      </svg>
      <svg width="22" height="22" viewBox="0 0 22 22" className="absolute -bottom-px -left-px">
        <path d="M1 13V21H9" stroke={strokeColor} strokeWidth="1.4" fill="none" />
      </svg>
      <svg width="22" height="22" viewBox="0 0 22 22" className="absolute -bottom-px -right-px">
        <path d="M13 21H21V13" stroke={strokeColor} strokeWidth="1.4" fill="none" />
      </svg>
      {label ? (
        <span className="absolute right-3 top-3 font-mono text-[10px] tracking-widest2 text-hyve-ash">
          {label}
        </span>
      ) : null}
    </div>
  );
}
