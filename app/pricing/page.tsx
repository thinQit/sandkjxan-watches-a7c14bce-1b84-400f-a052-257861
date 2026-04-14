"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { PricingTable } from "@/components/blocks/PricingTable";
import { StatsCounter } from "@/components/blocks/StatsCounter";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
} as const;

export default function PricingPage() {
  return (
    <div className="bg-[color:var(--background)]">
      <section className="container mx-auto max-w-7xl px-4 py-14 md:py-20">
        <motion.div {...sectionAnim} className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="text-[color:var(--secondary)] uppercase tracking-[0.22em] text-xs">
              Pricing
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white">
              Luxury, clearly positioned.
            </h1>
            <p className="mt-5 text-white/80 leading-relaxed">
              La Reine Watches are curated within a $3,000–$10,000 range.
            </p>
          </div>
          <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-[color:var(--card)]">
            <Image
              src="/images/product-3.png"
              alt="Pricing visual"
              fill
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
        </motion.div>
      </section>

      <motion.section {...sectionAnim}>
        <StatsCounter
          bgColor="bg-[color:var(--primary)] text-[color:var(--primary-foreground)]"
          stats={[
            { label: "Entry", value: "$3,000" },
            { label: "Core", value: "$5,500" },
            { label: "Complications", value: "$10,000" },
            { label: "Support", value: "Concierge" }
          ]}
        />
      </motion.section>

      <motion.section {...sectionAnim}>
        <PricingTable
          headline="Collection tiers"
          subheadline="Choose a tier, then confirm availability with concierge."
          tiers={[
            {
              name: "Essentials",
              price: "$3,000",
              period: "from",
              description: "Signature design language with refined finishing.",
              features: [
                "Royal-inspired silhouette",
                "Gallery-grade presentation",
                "Concierge inquiry support"
              ],
              ctaLabel: "Inquire",
              ctaHref: "/contact"
            },
            {
              name: "Signature",
              price: "$5,500",
              period: "from",
              description: "Elevated materials and deeper dial architecture.",
              features: [
                "Enhanced finishing details",
                "Curated recommendations",
                "Priority concierge support"
              ],
              ctaLabel: "Inquire",
              ctaHref: "/contact",
              highlighted: true
            },
            {
              name: "Complications",
              price: "$10,000",
              period: "up to",
              description: "Top-tier pieces with standout presence and complexity.",
              features: [
                "Statement-level finishing",
                "Allocation guidance",
                "Ownership care coordination"
              ],
              ctaLabel: "Inquire",
              ctaHref: "/contact"
            }
          ]}
        />
      </motion.section>

      <motion.section {...sectionAnim}>
        <CTAGlass
          headline="Request availability."
          description="Tell us which piece you’re considering and your preferred configuration."
          ctaLabel="Contact Concierge"
          ctaHref="/contact"
          secondaryCtaLabel="Browse Catalog"
          secondaryCtaHref="/portfolio"
        />
      </motion.section>
    </div>
  );
}
