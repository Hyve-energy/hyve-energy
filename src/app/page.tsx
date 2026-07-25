import { Hero } from "@/components/Hero";
import { SpecStrip } from "@/components/SpecStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { CapabilityCard } from "@/components/CapabilityCard";
import { IndustryCard } from "@/components/IndustryCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { WhySection } from "@/components/WhySection";
import { TestimonialsPlaceholder } from "@/components/TestimonialsPlaceholder";
import { ContactCTA } from "@/components/ContactCTA";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { capabilities, industries } from "@/lib/site";

const heroSpecs = [
  { label: "Chemistries", value: "NMC / LFP / LTO" },
  { label: "Ingress Rating", value: "IP66 – IP68" },
  { label: "Env. Qualification", value: "MIL-STD-810H" },
  { label: "BMS Protocol", value: "CAN / J1939" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <SpecStrip specs={heroSpecs} />

      <section className="border-b border-hyve-line py-28">
        <div className="container-hyve">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Capabilities"
              title="Full-stack battery engineering, under one roof."
              description="From chemistry selection through certification support — we own the engineering, not just the assembly."
            />
            <Button href="/capabilities/" variant="ghost" className="shrink-0">
              View all capabilities
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.slice(0, 6).map((capability) => (
              <Reveal key={capability.id}>
                <CapabilityCard capability={capability} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hyve-line py-28">
        <div className="container-hyve">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Industries"
              title="Built for the environments that break commodity batteries."
              description="Every industry we serve has its own failure modes. Our platforms are engineered around them."
            />
            <Button href="/industries/" variant="ghost" className="shrink-0">
              View all industries
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.slice(0, 4).map((industry) => (
              <Reveal key={industry.id}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hyve-line py-28">
        <div className="container-hyve">
          <SectionHeading
            eyebrow="Engineering Process"
            title="A disciplined path from requirement to fielded hardware."
            description="Six gates, one continuous engineering thread — from the first requirements conversation to a supported production unit."
          />
          <ProcessTimeline />
        </div>
      </section>

      <section className="border-b border-hyve-line py-28">
        <div className="container-hyve grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Technology"
              title="A modular platform that scales with your program."
              description="One architecture, engineered once and validated hard, that scales across voltage and capacity — so a custom program doesn't mean starting from a blank sheet."
            />
            <div className="mt-8">
              <Button href="/technology/" variant="secondary">
                Explore the technology
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-px overflow-hidden border border-hyve-line bg-hyve-line">
                {[
                  { label: "Cell Format", value: "21700" },
                  { label: "Module Config", value: "12S × 8P" },
                  { label: "BMS Architecture", value: "Distributed" },
                  { label: "Protection", value: "IP67 / IP68" },
                ].map((item) => (
                  <div key={item.label} className="bg-hyve-black p-6">
                    <span className="font-mono text-[10px] uppercase tracking-widest2 text-hyve-ash">
                      {item.label}
                    </span>
                    <p className="mt-2 font-mono text-lg text-hyve-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WhySection />
      <TestimonialsPlaceholder />
      <ContactCTA />
    </>
  );
}
