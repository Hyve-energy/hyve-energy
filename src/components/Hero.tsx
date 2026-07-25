"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { HeroDiagram } from "./HeroDiagram";
import { CornerFrame } from "./CornerFrame";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hyve-line">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-hyve-accent/[0.07] blur-[120px]" />

      <div className="container-hyve relative grid grid-cols-1 items-center gap-16 pb-20 pt-16 lg:grid-cols-12 lg:pb-28 lg:pt-24">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow inline-block"
          >
            Custom Battery Systems / NRE Engineering
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-display-1 font-display font-semibold text-balance text-hyve-white"
          >
            Engineering
            <br />
            Rugged <span className="text-hyve-accent">Electrification</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-hyve-fog"
          >
            Hyve Energy designs and manufactures rugged lithium battery systems for construction,
            mining, marine, defense, robotics, and autonomous platforms — engineered to your
            application, not pulled from a catalog.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact/">Start a Program</Button>
            <Button href="/capabilities/" variant="secondary">
              Explore Capabilities
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-square w-full border border-hyve-line bg-hyve-coal/60">
            <CornerFrame label="FIG. 01" tone="accent" />
            <HeroDiagram className="h-full w-full p-8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
