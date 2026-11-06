import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hire Abdul Rehman for an AI agent, a Next.js SaaS, an e-commerce store or a WordPress site.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="aurora opacity-70" aria-hidden>
        <span className="a1" />
        <span className="a2" />
      </div>
      <div className="relative">
        <Contact page />
      </div>
    </div>
  );
}
