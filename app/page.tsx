"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { HeroSpotlight } from "@/components/blocks/HeroSpotlight";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { GalleryMasonry } from "@/components/blocks/GalleryMasonry";
import { StatsCounter } from "@/components/blocks/StatsCounter";
import { TestimonialsAnimated } from "@/components/blocks/TestimonialsAnimated";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
} as const;

export default function HomePage() {
  return (
    <div className="bg-[color:var(--background)]">
      {/* HERO (with required white text + dark overlay on image) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="La Reine Watches hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative">
          <HeroSpotlight
            badge="The Regal Horizon"
            headline="The Art of Permanence."
            subheadline="La Reine Watches curates royal-inspired timepieces—modern minimalism, deep navy silence, and gold precision. $3,000–$10,000."
            primaryCta={{ label: "Explore the Collection", href: "/portfolio" }}
            secondaryCta={{ label: "Speak to Concierge", href: "/contact" }}
          />
        </div>
      </section>

      <motion.section {...sectionAnim}>
        <FeaturesGrid
          badge="Craft"
          headline="Designed like an heirloom. Built like an instrument."
          subheadline="Editorial elegance meets technical clarity—every detail is intentional."
          features={[
            {
              icon: "Crown",
              title: "Royal-Inspired Design Language",
              description:
                "A restrained silhouette with gilded accents—regal without excess."
            },
            {
              icon: "Dial",
              title: "Precision-First Finishing",
              description:
                "Tight tolerances, crisp indices, and a calm, legible dial architecture."
            },
            {
              icon: "Case",
              title: "Gallery-Grade Presence",
              description:
                "A collection presented like a horology exhibition—quiet, confident, and rare."
            },
            {
              icon: "Service",
              title: "Concierge Ownership",
              description:
                "White-glove guidance from first browse to long-term care."
            }
          ]}
        />
      </motion.section>

      <motion.section {...sectionAnim}>
        <StatsCounter
          bgColor="bg-[color:var(--primary)] text-[color:var(--primary-foreground)]"
          stats={[
            { label: "Price Range", value: "$3k–$10k" },
            { label: "Design North Star", value: "Regal Horizon" },
            { label: "Finish Standard", value: "High" },
            { label: "Ownership Model", value: "Concierge" }
          ]}
        />
      </motion.section>

      <motion.section {...sectionAnim}>
        <GalleryMasonry
          headline="A curated collection—presented as a gallery."
          subheadline="Explore signature pieces and details. Tap to view."
          images={[
            { url: "/images/product-1.png", alt: "Watch product 1", caption: "La Reine — Nocturne Gold" },
            { url: "/images/product-2.png", alt: "Watch product 2", caption: "La Reine — Sovereign Steel" },
            { url: "/images/product-3.png", alt: "Watch product 3", caption: "La Reine — Horizon Blue" },
            { url: "/images/product-3.png", alt: "Watch product 4", caption: "La Reine — Crownline" },
            { url: "/images/product-2.png", alt: "Watch product 5", caption: "La Reine — Atelier Edition" },
            { url: "/images/product-2.png", alt: "Watch product 6", caption: "La Reine — Midnight Complication" }
          ]}
        />
      </motion.section>

      <motion.section {...sectionAnim}>
        <TestimonialsAnimated
          headline="Trusted by collectors who prefer quiet confidence."
          subheadline="Proof without noise—just the experience."
          testimonials={[
            {
              quote:
                "The finishing is immaculate—everything feels deliberate, from the dial spacing to the weight on wrist.",
              name: "Private Collector",
              designation: "Client",
              src: "/images/product-2.png"
            },
            {
              quote:
                "It reads like an editorial spread, not a storefront. The brand feels rare before you even click.",
              name: "Design Director",
              designation: "Buyer",
              src: "/images/product-3.png"
            },
            {
              quote:
                "Concierge support is exactly what luxury should feel like—calm, fast, and precise.",
              name: "Boutique Partner",
              designation: "Retail",
              src: "/images/product-1.png"
            }
          ]}
          autoplay
        />
      </motion.section>

      <motion.section {...sectionAnim}>
        <FAQAccordion
          headline="Questions, answered with precision."
          subheadline="Everything you need before you inquire."
          items={[
            {
              question: "What is the price range?",
              answer:
                "La Reine Watches are positioned from $3,000 to $10,000 depending on materials, finishing, and complexity."
            },
            {
              question: "Do you offer servicing and care?",
              answer:
                "Yes—concierge-led care guidance and service coordination are available through our contact page."
            },
            {
              question: "Is the catalog available online?",
              answer:
                "Yes—browse the collection in Portfolio (Catalog) and inquire for availability and allocation."
            }
          ]}
        />
      </motion.section>

      <motion.section {...sectionAnim}>
        <CTAGlass
          headline="Enter the collection."
          description="Explore the catalog, then request availability through our concierge."
          ctaLabel="Browse Catalog"
          ctaHref="/portfolio"
          secondaryCtaLabel="Contact Concierge"
          secondaryCtaHref="/contact"
        />
      </motion.section>
    </div>
  );
}
