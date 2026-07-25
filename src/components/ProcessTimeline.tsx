import { processSteps } from "@/lib/site";
import { RevealGroup, RevealItem } from "./Reveal";

export function ProcessTimeline() {
  return (
    <RevealGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-hyve-line bg-hyve-line sm:grid-cols-2 lg:grid-cols-3">
      {processSteps.map((item) => (
        <RevealItem key={item.step} className="flex flex-col gap-4 bg-hyve-black p-8">
          <span className="font-mono text-sm text-hyve-accent">{item.step}</span>
          <h3 className="text-lg font-display font-semibold text-hyve-white">{item.title}</h3>
          <p className="text-sm leading-relaxed text-hyve-fog">{item.description}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
