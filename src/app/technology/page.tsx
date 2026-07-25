import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CornerFrame } from "@/components/CornerFrame";
import { TechDiagram } from "@/components/TechDiagram";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Modular battery architecture, thermal engineering, battery safety, mechanical protection, BMS design, and scalable manufacturing at Hyve Energy.",
};

const sections = [
  {
    id: "architecture",
    eyebrow: "01 / Architecture",
    title: "Modular battery architecture",
    body: "A single cell-to-mini-module-to-main-module hierarchy scales cleanly from small robotics packs to large defense and marine platforms — the same validated building block, reconfigured, rather than a new design for every voltage and capacity target.",
    diagram: "architecture" as const,
  },
  {
    id: "thermal",
    eyebrow: "02 / Thermal Engineering",
    title: "Thermal engineering",
    body: "Air, cold-plate, and liquid thermal paths are modeled across the full duty cycle and selected to match chemistry and climate — keeping cells inside their performance and safety window from cold starts to sustained high-load operation.",
    diagram: "thermal" as const,
  },
  {
    id: "safety",
    eyebrow: "03 / Battery Safety",
    title: "Battery safety",
    body: "Propagation-safe design principles — intumescent barriers, cell-to-cell spacing, and venting strategy — are built into the mechanical architecture so a single-cell thermal event stays a single-cell event.",
    diagram: "safety" as const,
  },
  {
    id: "bms",
    eyebrow: "05 / Battery Management",
    title: "Battery management systems",
    body: "A distributed BMS architecture moves from CAN/J1939 monitoring and protection today toward cloud telemetry and predictive state-of-health modeling — giving operators visibility into pack condition before it becomes a failure.",
    diagram: "bms" as const,
  },
];

export default function TechnologyPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hyve-line">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-50" />
        <div className="container-hyve relative py-20 lg:py-28">
          <Reveal>
            <span className="eyebrow">Technology</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-display-1 font-display font-semibold text-balance text-hyve-white">
              The engineering behind the pack.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hyve-fog">
              A modular architecture, engineered thermal and safety systems, and a BMS platform
              built to scale — the technical foundation every Hyve program is built on.
            </p>
          </Reveal>
        </div>
      </section>

      {sections.map((section, i) => (
        <section
          key={section.id}
          className={`border-b border-hyve-line py-24 ${i % 2 === 1 ? "bg-hyve-coal/40" : ""}`}
        >
          <div className="container-hyve grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <Reveal>
                <span className="eyebrow">{section.eyebrow}</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-4 text-display-3 font-display font-semibold text-balance text-hyve-white">
                  {section.title}
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-5 text-base leading-relaxed text-hyve-fog">{section.body}</p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="relative border border-hyve-line bg-hyve-black p-6 sm:p-10">
                <CornerFrame />
                <TechDiagram variant={section.diagram} className="h-auto w-full" />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="border-b border-hyve-line py-24">
        <div className="container-hyve grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">04 / Mechanical Protection</span>
            <h2 className="mt-4 text-display-3 font-display font-semibold text-balance text-hyve-white">
              Mechanical protection
            </h2>
            <p className="mt-5 text-base leading-relaxed text-hyve-fog">
              Sealed enclosures rated to IP66–IP68, structural load paths validated by FEA, and
              shock and vibration testing aligned to off-highway and MIL-STD-810 practice — built
              for equipment that lives outdoors, not on a bench.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">06 / Scalable Design Philosophy</span>
            <h2 className="mt-4 text-display-3 font-display font-semibold text-balance text-hyve-white">
              Scalable design philosophy
            </h2>
            <p className="mt-5 text-base leading-relaxed text-hyve-fog">
              Every design decision is made against a platform, not a single program — so
              tooling, supply chain qualification, and validation data compound across customers
              instead of resetting with each new application.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hyve-line py-24">
        <div className="container-hyve">
          <Reveal>
            <span className="eyebrow">07 / Future Manufacturing</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-2xl text-display-2 font-display font-semibold text-balance text-hyve-white">
              A production path that scales from prototype to platform.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hyve-fog">
              Manufacturing readiness is designed in from the first prototype — qualified
              suppliers, process controls, and test infrastructure built to carry a program from
              A-sample through fielded production volume without a redesign.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
