type Spec = { label: string; value: string };

export function SpecStrip({ specs, className = "" }: { specs: Spec[]; className?: string }) {
  return (
    <div className={`border-y border-hyve-line ${className}`}>
      <div className="container-hyve grid grid-cols-2 gap-x-6 gap-y-6 py-8 sm:grid-cols-4">
        {specs.map((spec) => (
          <div key={spec.label} className="flex flex-col gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-hyve-ash">
              {spec.label}
            </span>
            <span className="font-mono text-xl text-hyve-white sm:text-2xl">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
