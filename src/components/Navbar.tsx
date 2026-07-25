"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LogoMark, Wordmark } from "./Logo";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "border-b border-hyve-line bg-hyve-black/90 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-hyve flex h-20 items-center justify-between" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2.5 text-hyve-white" aria-label="Hyve Energy home">
          <LogoMark />
          <Wordmark className="text-lg" />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.slice(1, -1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-tight transition-colors duration-200 ${
                  pathname === link.href ? "text-hyve-accent" : "text-hyve-fog hover:text-hyve-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact/"
            className="inline-flex items-center rounded-sm border border-hyve-line px-5 py-2.5 text-sm font-medium text-hyve-bone transition-colors duration-200 hover:border-hyve-accent hover:text-hyve-accent"
          >
            Start a Program
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-hyve-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-hyve-line bg-hyve-black md:hidden">
          <ul className="container-hyve flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 text-2xl font-display tracking-tight ${
                    pathname === link.href ? "text-hyve-accent" : "text-hyve-bone"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
