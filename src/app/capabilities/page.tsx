import type { Metadata } from "next";
import { CapabilityCard } from "@/components/CapabilityCard";
import { ContactCTA } from "@/components/ContactCTA";
import { Reveal } from "@/components/Reveal";
import { CornerFrame } from "@/components/CornerFrame";
import { capabilities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Full-stack battery engineering capabilities: battery design, mechanical design, electrical integration, thermal management, DFMEA, validation, testing, manufacturing support, rapid prototyping, and certification support.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hyve-line">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-50" />
        <div className="container-hyve relative py-20 lg:py-28">
          <Reveal>
            <span className="eyebrow">Capabilities</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-display-1 font-display font-semibold text-balance text-hyve-white">
              Ten disciplines. One engineering thread.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hyve-fog">
              We don&apos;t outsource the hard parts. Battery design, mechanical and electrical
              integration, thermal engineering, failure analysis, validation, and manufacturing
              support all happen under one engineering organization — so nothing gets lost in
              translation between vendors.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hyve-line py-24">
        <div className="container-hyve grid grid-cols-1 gap-6 lg:grid-cols-2">
          {capabilities.map((capability) => (
            <Reveal key={capability.id}>
              <CapabilityCard capability={capability} expanded />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-hyve-line py-24">
        <div className="container-hyve">
          <Reveal>
            <span className="eyebrow">Engineering Governance</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-2xl text-display-2 font-display font-semibold text-balance text-hyve-white">
              Every program runs against a formal requirements document.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="relative mt-12 border border-hyve-line bg-hyve-coal p-10 lg:p-14">
              <CornerFrame tone="accent" label="SRD REV 1.0" />
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
                {["SYS", "CEL", "BMS", "MEC", "THE", "ELE", "COM", "P&C", "MAI", "DAT"].map((cat) => (
                  <div key={cat} className="font-mono text-sm text-hyve-fog">
                    <span className="text-hyve-accent">/</span> {cat}
                  </div>
                ))}
              </div>
              <p className="mt-10 max-w-2xl text-sm leading-relaxed text-hyve-fog">
                Requirements span system architecture, cell selection, BMS, mechanical, thermal,
                electrical, communications, protection &amp; control, maintainability, and data —
                tracked to closure before design freeze, not after.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
