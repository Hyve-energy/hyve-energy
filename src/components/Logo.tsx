export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/hyve-logo.svg" alt="Hyve Energy" className={className} />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-semibold tracking-tight ${className}`}>
      HYVE<span className="text-hyve-accent">.</span>
    </span>
  );
}
