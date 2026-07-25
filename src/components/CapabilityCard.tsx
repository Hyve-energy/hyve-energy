import { CornerFrame } from "./CornerFrame";
import type { Capability } from "@/lib/site";

export function CapabilityCard({ capability, expanded = false }: { capability: Capability; expanded?: boolean }) {
  return (
    <div className="group relative border border-hyve-line bg-hyve-coal p-8 transition-colors duration-300 hover:border-hyve-steel">
      <CornerFrame />
      <span className="font-mono text-xs text-hyve-ash">{capability.index}</span>
      <h3 className="mt-4 text-xl font-display font-semibold text-hyve-white">{capability.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-hyve-fog">{capability.summary}</p>
      {expanded && (
        <ul className="mt-6 flex flex-col gap-2.5 border-t border-hyve-line pt-6">
          {capability.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-hyve-fog">
              <span className="mt-2 h-1 w-1 shrink-0 bg-hyve-accent" />
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
