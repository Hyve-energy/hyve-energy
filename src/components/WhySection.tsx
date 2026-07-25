import { whyHyve } from "@/lib/site";
import { RevealGroup, RevealItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WhySection() {
  return (
    <section className="border-t border-hyve-line py-28">
      <div className="container-hyve">
        <SectionHeading
          eyebrow="Why Hyve"
          title="An engineering partner, not a parts catalog."
          description="We built Hyve around the belief that demanding applications deserve batteries designed for them specifically — engineered, validated, and documented to withstand what the field actually does to hardware."
        />
        <RevealGroup className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyHyve.map((item) => (
            <RevealItem key={item.title} className="border-t border-hyve-accent/40 pt-6">
              <h3 className="text-lg font-display font-semibold text-hyve-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-hyve-fog">{item.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
