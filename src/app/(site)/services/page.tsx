import type { Metadata } from "next";
import { CtaBand, PageHeader, Process, Services } from "@/components/Sections";
import { AgentsVsWorkers } from "@/components/ai";

export const metadata: Metadata = {
  title: "Services",
  description: "AI agents and automations, Next.js SaaS and web apps, e-commerce stores and WordPress websites, built end to end by Abdul Rehman.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What I can build"
        accent="for you."
        sub="From an AI agent that answers your customers to a full store in Arabic and English: designed, built, tested and deployed by one person."
      />
      <Services head={false} />
      <AgentsVsWorkers id="agents-vs-workers" />
      <Process />
      <div className="pt-24 sm:pt-32">
        <CtaBand />
      </div>
    </>
  );
}
