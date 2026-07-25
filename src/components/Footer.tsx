import Link from "next/link";
import { LogoMark, Wordmark } from "./Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-hyve-line bg-hyve-black">
      <div className="container-hyve py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 text-hyve-white">
              <LogoMark />
              <Wordmark className="text-lg" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-hyve-ash">
              {site.tagline}. Rugged lithium battery systems engineered for construction, mining,
              marine, defense, robotics, and industrial equipment.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-hyve-ash">
              Navigate
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-hyve-fog transition-colors hover:text-hyve-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-hyve-ash">
              Contact
            </span>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-hyve-fog">
              <li>
                <a href={`mailto:${site.emails.sales}`} className="transition-colors hover:text-hyve-accent">
                  {site.emails.sales}
                </a>
                <span className="ml-2 text-hyve-ash">— Sales</span>
              </li>
              <li>
                <a href={`mailto:${site.emails.contact}`} className="transition-colors hover:text-hyve-accent">
                  {site.emails.contact}
                </a>
                <span className="ml-2 text-hyve-ash">— General</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hyve-line pt-8 text-xs text-hyve-ash sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
          <span className="font-mono tracking-widest2">ENGINEERED FOR THE FIELD</span>
        </div>
      </div>
    </footer>
  );
}
