import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a battery engineering program with Hyve Energy. Tell us your voltage, capacity, application, and timeline.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hyve-line">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-50" />
        <div className="container-hyve relative py-20 lg:py-28">
          <Reveal>
            <span className="eyebrow">Contact</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-display-1 font-display font-semibold text-balance text-hyve-white">
              Let&apos;s engineer your power system.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hyve-fog">
              Share your application requirements below, or reach our team directly. We typically
              respond within two business days.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-hyve grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="border border-hyve-line bg-hyve-coal p-8">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-hyve-ash">
                  Direct Contact
                </span>
                <ul className="mt-5 flex flex-col gap-4 text-sm">
                  <li className="flex flex-col gap-1">
                    <span className="text-hyve-ash">Sales</span>
                    <a
                      href={`mailto:${site.emails.sales}`}
                      className="text-hyve-bone transition-colors hover:text-hyve-accent"
                    >
                      {site.emails.sales}
                    </a>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-hyve-ash">General Inquiries</span>
                    <a
                      href={`mailto:${site.emails.contact}`}
                      className="text-hyve-bone transition-colors hover:text-hyve-accent"
                    >
                      {site.emails.contact}
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.16} className="flex-1">
              <MapPlaceholder />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
