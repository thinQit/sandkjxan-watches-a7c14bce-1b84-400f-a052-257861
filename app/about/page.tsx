"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { TracingBeam } from "@/components/ui/effects/TracingBeam";
import { StatsCounter } from "@/components/blocks/StatsCounter";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
} as const;

export default function AboutPage() {
  return (
    <TracingBeam>
      <div className="bg-[color:var(--background)]">
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0">
            <Image
              src="/images/product-1.png"
              alt="About La Reine Watches"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>

          <div className="relative container mx-auto max-w-7xl px-4">
            <motion.div {...sectionAnim} className="max-w-3xl">
              <p className="text-[color:var(--secondary)] uppercase tracking-[0.22em] text-xs">
                About
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white">
                Royal restraint. Modern clarity.
              </h1>
              <p className="mt-5 text-white/80 leading-relaxed">
                La Reine Watches is built around a simple idea: luxury should feel
                inevitable. Deep navy surfaces, gold precision, and a gallery-like
                presentation—crafted for collectors who value permanence.
              </p>
            </motion.div>
          </div>
        </section>

        <motion.section {...sectionAnim}>
          <StatsCounter
            bgColor="bg-[color:var(--muted)] text-[color:var(--foreground)]"
            stats={[
              { label: "Positioning", value: "Luxury" },
              { label: "Aesthetic", value: "Modern Regal" },
              { label: "Palette", value: "Navy & Gold" },
              { label: "Focus", value: "Permanence" }
            ]}
          />
        </motion.section>

        <motion.section {...sectionAnim}>
          <TeamGrid
            headline="The atelier mindset."
            subheadline="A small team, a high standard—designed to feel like an editorial house."
            members={[
              {
                name: "Creative Direction",
                title: "Brand & Editorial",
                bio: "Sets the visual language: intentional asymmetry, quiet luxury, and tonal depth.",
                imageUrl: "/images/product-1.png"
              },
              {
                name: "Product & Craft",
                title: "Design & Finishing",
                bio: "Obsessed with legibility, proportion, and the tactile feel of every surface.",
                imageUrl: "/images/product-2.png"
              },
              {
                name: "Concierge",
                title: "Client Experience",
                bio: "Guides discovery, availability, and ownership care with calm precision.",
                imageUrl: "/images/product-2.png"
              }
            ]}
          />
        </motion.section>

        <motion.section {...sectionAnim}>
          <CTAGlass
            headline="Discover the collection."
            description="Browse the catalog and request availability through concierge."
            ctaLabel="View Catalog"
            ctaHref="/portfolio"
            secondaryCtaLabel="Contact"
            secondaryCtaHref="/contact"
          />
        </motion.section>
      </div>
    </TracingBeam>
  );
}
