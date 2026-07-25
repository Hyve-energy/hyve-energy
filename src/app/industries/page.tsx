import type { Metadata } from "next";
import { IndustryCard } from "@/components/IndustryCard";
import { ContactCTA } from "@/components/ContactCTA";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Rugged battery systems engineered for construction, mining, marine, robotics, defense, autonomous vehicles, and industrial automation.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hyve-line">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-50" />
        <div className="container-hyve relative py-20 lg:py-28">
          <Reveal>
            <span className="eyebrow">Industries</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-display-1 font-display font-semibold text-balance text-hyve-white">
              Seven industries. Zero compromises.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hyve-fog">
              Every operating environment has its own failure modes — heat, vibration, ingress,
              corrosion, unattended operation. We design to the ones your application actually
              faces.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hyve-line py-24">
        <div className="container-hyve grid grid-cols-1 gap-8 md:grid-cols-2">
          {industries.map((industry) => (
            <Reveal key={industry.id}>
              <IndustryCard industry={industry} expanded />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
