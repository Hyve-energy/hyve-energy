import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { CornerFrame } from "@/components/CornerFrame";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hyve Energy is an engineering-first battery company building rugged lithium battery systems for demanding industrial applications.",
};

const values = [
  {
    title: "Engineering Rigor",
    description:
      "Design decisions are backed by analysis and test data, not assumption. DFMEA and validation are part of the process, not a checkbox at the end of it.",
  },
  {
    title: "Built For The Field",
    description:
      "We design to the environment the product will actually operate in — not a lab bench and not a datasheet's idealized conditions.",
  },
  {
    title: "Radical Transparency",
    description:
      "Customers see our requirements, our test data, and our failure analysis. Trust is built on documentation, not marketing claims.",
  },
  {
    title: "Own The Hard Problems",
    description:
      "Thermal management, safety architecture, and mechanical integration are the parts of battery engineering that are easy to outsource and expensive to get wrong. We keep them in-house.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hyve-line">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-50" />
        <div className="container-hyve relative py-20 lg:py-28">
          <Reveal>
            <span className="eyebrow">About Hyve</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-display-1 font-display font-semibold text-balance text-hyve-white">
              An engineering culture, applied to electrification.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hyve-fog">
              Hyve Energy exists because demanding industrial applications kept getting offered
              the same commodity battery packs built for consumer electronics and light EVs. We
              build differently — starting from the application, not the cell.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hyve-line py-24">
        <div className="container-hyve grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full border border-hyve-line bg-hyve-coal p-10">
              <CornerFrame />
              <span className="eyebrow">Mission</span>
              <p className="mt-5 text-2xl font-display font-medium leading-snug text-hyve-white">
                Design and manufacture rugged lithium battery systems for demanding industrial
                applications.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative h-full border border-hyve-line bg-hyve-coal p-10">
              <CornerFrame />
              <span className="eyebrow">Vision</span>
              <p className="mt-5 text-2xl font-display font-medium leading-snug text-hyve-white">
                To be the engineering partner demanding industries call first — before the
                battery is a problem, not after.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hyve-line py-24">
        <div className="container-hyve">
          <Reveal>
            <span className="eyebrow">Core Values</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-2xl text-display-2 font-display font-semibold text-balance text-hyve-white">
              What we hold ourselves to.
            </h2>
          </Reveal>
          <RevealGroup className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <RevealItem key={value.title} className="border-t border-hyve-accent/40 pt-6">
                <h3 className="text-lg font-display font-semibold text-hyve-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-hyve-fog">{value.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-b border-hyve-line py-24">
        <div className="container-hyve">
          <Reveal>
            <span className="eyebrow">The Future</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-2xl text-display-2 font-display font-semibold text-balance text-hyve-white">
              Where we&apos;re headed.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hyve-fog">
              We&apos;re building Hyve as a platform company: a common battery architecture that
              scales across industries and voltage classes, backed by validation and
              manufacturing infrastructure that lets us take on harder, higher-stakes programs
              over time — from single-unit prototypes toward fielded fleets.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
