export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 8L16 2L30 8V24L16 30L2 24V8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        className="text-hyve-fog"
      />
      <path d="M16 2V30" stroke="currentColor" strokeWidth="1.6" className="text-hyve-line" />
      <path
        d="M9 12.5L16 16L23 12.5"
        stroke="#F04D23"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-semibold tracking-tight ${className}`}>
      HYVE<span className="text-hyve-accent">.</span>
    </span>
  );
}
