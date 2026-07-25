import { CornerFrame } from "./CornerFrame";

export function MapPlaceholder() {
  return (
    <div className="relative flex h-64 items-center justify-center overflow-hidden border border-dashed border-hyve-line bg-hyve-coal sm:h-full">
      <CornerFrame />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <span className="relative font-mono text-[10px] uppercase tracking-widest2 text-hyve-ash">
        Facility Map — Coming Soon
      </span>
    </div>
  );
}
