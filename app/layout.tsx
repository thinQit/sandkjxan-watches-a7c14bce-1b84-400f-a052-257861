import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif, Manrope } from "next/font/google";

import { NavbarGlass } from "@/components/blocks/NavbarGlass";
import { FooterMultiColumn } from "@/components/blocks/FooterMultiColumn";

const heading = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "La Reine Watches",
  description: "Royal-inspired luxury timepieces from $3,000–$10,000."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <NavbarGlass
            logo="La Reine Watches"
            navItems={[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
              { label: "Portfolio", href: "/portfolio" }
            ]}
            ctaLabel="View Catalog"
            ctaHref="/portfolio"
          />
        </div>

        <main className="pt-20">{children}</main>

        <FooterMultiColumn
          brand="La Reine Watches"
          description="A modern horology gallery—deep navy, gold precision, and uncompromising craft."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "Home", href: "/" },
                { label: "Portfolio / Catalog", href: "/portfolio" },
                { label: "About", href: "/about" }
              ]
            },
            {
              title: "Concierge",
              links: [
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" }
              ]
            },
            {
              title: "Policies",
              links: [
                { label: "Warranty", href: "/services" },
                { label: "Care & Service", href: "/services" },
                { label: "Inquiries", href: "/contact" }
              ]
            }
          ]}
          copyright="© 2026 La Reine Watches. All rights reserved."
        />
      </body>
    </html>
  );
}
