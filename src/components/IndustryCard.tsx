import { CornerFrame } from "./CornerFrame";
import type { Industry } from "@/lib/site";

export function IndustryCard({ industry, expanded = false }: { industry: Industry; expanded?: boolean }) {
  return (
    <div className="group relative flex flex-col border border-hyve-line bg-hyve-coal">
      <CornerFrame />
      <div className="relative flex h-40 items-end overflow-hidden border-b border-hyve-line bg-hyve-graphite p-6">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-hyve-coal via-transparent to-transparent" />
        <span className="relative font-mono text-[10px] uppercase tracking-widest2 text-hyve-accent">
          {industry.eyebrow}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-8">
        <h3 className="text-xl font-display font-semibold text-hyve-white">{industry.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-hyve-fog">{industry.problem}</p>
        {expanded && (
          <>
            <div className="mt-6 border-t border-hyve-line pt-6">
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-hyve-ash">
                Hyve Solution
              </span>
              <p className="mt-3 text-sm leading-relaxed text-hyve-fog">{industry.solution}</p>
            </div>
            <ul className="mt-6 flex flex-col gap-2.5 border-t border-hyve-line pt-6">
              {industry.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 text-sm text-hyve-fog">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-hyve-accent" />
                  {benefit}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
