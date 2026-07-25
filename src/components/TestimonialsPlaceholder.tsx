import { Reveal } from "./Reveal";

export function TestimonialsPlaceholder() {
  return (
    <section className="border-t border-hyve-line py-28">
      <div className="container-hyve">
        <Reveal>
          <span className="eyebrow">Field Feedback</span>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 border border-dashed border-hyve-line p-12 text-center sm:p-20">
            <p className="mx-auto max-w-xl text-2xl font-display leading-snug text-hyve-fog">
              Program partner testimonials will appear here as our first engineering programs
              reach the field.
            </p>
            <span className="mt-6 inline-block font-mono text-[10px] uppercase tracking-widest2 text-hyve-ash">
              Reserved for validated customer programs
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
