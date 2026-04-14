"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTAGlass } from "@/components/blocks/CTAGlass";
import { MovingBorder } from "@/components/ui/effects/MovingBorder";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
} as const;

export default function ServicesPage() {
  return (
    <div className="bg-[color:var(--background)]">
      <section className="container mx-auto max-w-7xl px-4 py-14 md:py-20">
        <motion.div {...sectionAnim} className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="text-[color:var(--secondary)] uppercase tracking-[0.22em] text-xs">
              Services
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white">
              Concierge, care, and collector support.
            </h1>
            <p className="mt-5 text-white/80 leading-relaxed">
              A luxury experience should feel effortless—before and after purchase.
            </p>
          </div>

          <MovingBorder containerClassName="rounded-2xl" className="rounded-2xl">
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-[color:var(--card)]">
              <Image
                src="/images/product-3.png"
                alt="Concierge services"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 hero-overlay" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium">White-glove guidance</p>
                <p className="text-white/75 text-sm">
                  From discovery to long-term ownership.
                </p>
              </div>
            </div>
          </MovingBorder>
        </motion.div>
      </section>

      <motion.section {...sectionAnim}>
        <FeaturesGrid
          badge="Concierge"
          headline="Ownership, elevated."
          subheadline="Services designed for a $3,000–$10,000 luxury segment."
          features={[
            {
              icon: "Availability",
              title: "Availability & Allocation",
              description:
                "Request availability, reserve pieces, and receive guided recommendations."
            },
            {
              icon: "Care",
              title: "Care Guidance",
              description:
                "Storage, wear, and maintenance guidance to preserve finish and performance."
            },
            {
              icon: "Service",
              title: "Service Coordination",
              description:
                "Concierge-led service intake and updates—clear, calm, and precise."
            },
            {
              icon: "Gifting",
              title: "Gifting & Presentation",
              description:
                "Premium presentation support for milestones and formal gifting."
            }
          ]}
        />
      </motion.section>

      <motion.section {...sectionAnim}>
        <FAQAccordion
          headline="Service details"
          items={[
            {
              question: "How do I request availability?",
              answer:
                "Browse the catalog in Portfolio and contact concierge with the piece name for current availability."
            },
            {
              question: "Do you support long-term servicing?",
              answer:
                "Yes—concierge can coordinate service and provide care guidance for ownership longevity."
            },
            {
              question: "Can I get recommendations based on style?",
              answer:
                "Yes—share your preferences (size, dial tone, strap, use case) and we’ll curate options."
            }
          ]}
        />
      </motion.section>

      <motion.section {...sectionAnim}>
        <CTAGlass
          headline="Start with a concierge inquiry."
          description="Tell us what you’re looking for—we’ll curate the right pieces."
          ctaLabel="Contact Concierge"
          ctaHref="/contact"
          secondaryCtaLabel="Browse Catalog"
          secondaryCtaHref="/portfolio"
        />
      </motion.section>
    </div>
  );
}
