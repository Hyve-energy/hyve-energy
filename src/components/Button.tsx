import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-sm font-medium tracking-tight transition-all duration-300 ease-out";

const variants = {
  primary: "bg-hyve-accent text-hyve-black hover:bg-white",
  secondary: "border border-hyve-line text-hyve-bone hover:border-hyve-accent hover:bg-hyve-accent/5",
  ghost: "text-hyve-bone hover:text-hyve-accent",
};

export function Button({ href, children, variant = "primary", icon = true, className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          strokeWidth={2}
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
