"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { ContactForm } from "@/components/blocks/ContactForm";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
} as const;

export default function ContactPage() {
  return (
    <div className="bg-[color:var(--background)]">
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/product-1.png"
            alt="Contact La Reine Watches"
            fill
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative container mx-auto max-w-7xl px-4">
          <motion.div {...sectionAnim} className="max-w-3xl">
            <p className="text-[color:var(--secondary)] uppercase tracking-[0.22em] text-xs">
              Contact
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white">
              Concierge inquiry.
            </h1>
            <p className="mt-5 text-white/80 leading-relaxed">
              Request availability, recommendations, or ownership support.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section {...sectionAnim}>
        <ContactForm
          headline="Send a message"
          subheadline="We’ll respond with availability, next steps, and curated options."
          contactInfo={[
            { icon: "Email", label: "Email", value: "concierge@lareinewatches.com" },
            { icon: "Phone", label: "Phone", value: "+1 (000) 000-0000" },
            { icon: "Hours", label: "Hours", value: "Mon–Fri, 9:00–18:00" }
          ]}
        />
      </motion.section>

      <motion.section {...sectionAnim}>
        <CTAGlass
          headline="Prefer to browse first?"
          description="Explore the catalog, then inquire with the piece name."
          ctaLabel="Browse Catalog"
          ctaHref="/portfolio"
          secondaryCtaLabel="About La Reine"
          secondaryCtaHref="/about"
        />
      </motion.section>
    </div>
  );
}
