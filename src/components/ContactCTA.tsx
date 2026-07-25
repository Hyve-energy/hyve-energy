import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden border-t border-hyve-line bg-hyve-graphite py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="container-hyve relative flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Start a Program</span>
          <h2 className="mt-4 text-display-2 font-display font-semibold text-balance text-hyve-white">
            Tell us what your application demands.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-hyve-fog">
            Send us your voltage, capacity, and application requirements and our engineering team
            will respond with next steps — typically within two business days.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
          <Button href="/contact/">Start a Program</Button>
          <a
            href={`mailto:${site.emails.sales}`}
            className="text-sm text-hyve-fog transition-colors hover:text-hyve-accent"
          >
            {site.emails.sales}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
