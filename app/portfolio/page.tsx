"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { BentoGrid } from "@/components/ui/effects/BentoGrid";
import { HoverEffect } from "@/components/ui/effects/HoverEffect";
import { GalleryMasonry } from "@/components/blocks/GalleryMasonry";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
} as const;

export default function PortfolioPage() {
  return (
    <div className="bg-[color:var(--background)]">
      <section className="container mx-auto max-w-7xl px-4 py-14 md:py-20">
        <motion.div {...sectionAnim} className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-[color:var(--secondary)] uppercase tracking-[0.22em] text-xs">
              Portfolio / Catalog
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white">
              The collection, curated.
            </h1>
            <p className="mt-5 text-white/80 leading-relaxed">
              Browse signature pieces and inquire for availability and allocation.
            </p>
          </div>

          <div className="relative h-[340px] w-full overflow-hidden rounded-2xl bg-[color:var(--card)]">
            <Image
              src="/images/product-2.png"
              alt="Catalog hero"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
        </motion.div>
      </section>

      <motion.section {...sectionAnim} className="container mx-auto max-w-7xl px-4 pb-6">
        <BentoGrid className="max-w-7xl">
          {/* Using BentoGrid container for layout emphasis; items are provided by the component library */}
          <div className="md:col-span-2 rounded-2xl bg-[color:var(--card)] p-8">
            <p className="text-[color:var(--secondary)] text-xs uppercase tracking-[0.22em]">
              Signature
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
              Nocturne Gold
            </h2>
            <p className="mt-3 text-white/75">
              Deep navy contrast with a restrained gold presence—built for permanence.
            </p>
          </div>

          <div className="rounded-2xl bg-[color:var(--card)] p-8">
            <p className="text-[color:var(--secondary)] text-xs uppercase tracking-[0.22em]">
              Core
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Sovereign Steel</h2>
            <p className="mt-3 text-white/75">
              Crisp legibility and quiet confidence for daily wear.
            </p>
          </div>

          <div className="rounded-2xl bg-[color:var(--card)] p-8">
            <p className="text-[color:var(--secondary)] text-xs uppercase tracking-[0.22em]">
              Atelier
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Horizon Blue</h2>
            <p className="mt-3 text-white/75">
              Tonal depth and editorial composition—minimal, regal, modern.
            </p>
          </div>
        </BentoGrid>
      </motion.section>

      <motion.section {...sectionAnim} className="container mx-auto max-w-7xl px-4">
        <HoverEffect
          items={[
            {
              title: "Request availability",
              description: "Send the piece name and preferred configuration to concierge.",
              link: "/contact"
            },
            {
              title: "Curated recommendations",
              description: "Share your style and use case; we’ll shortlist options.",
              link: "/services"
            },
            {
              title: "Pricing positioning",
              description: "Explore tiers across $3,000–$10,000.",
              link: "/pricing"
            }
          ]}
        />
      </motion.section>

      <motion.section {...sectionAnim}>
        <GalleryMasonry
          headline="Catalog gallery"
          subheadline="Tap any image to view."
          images={[
            { url: "/images/product-1.png", alt: "Catalog item 1", caption: "Nocturne Gold" },
            { url: "/images/product-2.png", alt: "Catalog item 2", caption: "Sovereign Steel" },
            { url: "/images/product-3.png", alt: "Catalog item 3", caption: "Horizon Blue" },
            { url: "/images/product-3.png", alt: "Catalog item 4", caption: "Crownline" },
            { url: "/images/product-3.png", alt: "Catalog item 5", caption: "Atelier Edition" },
            { url: "/images/product-2.png", alt: "Catalog item 6", caption: "Midnight Complication" }
          ]}
        />
      </motion.section>

      <motion.section {...sectionAnim}>
        <CTAGlass
          headline="Ready to inquire?"
          description="Concierge can confirm availability and guide allocation."
          ctaLabel="Contact Concierge"
          ctaHref="/contact"
          secondaryCtaLabel="About La Reine"
          secondaryCtaHref="/about"
        />
      </motion.section>
    </div>
  );
}
