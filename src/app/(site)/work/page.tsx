import type { Metadata } from "next";
import { CtaBand, MoreProjects, PageHeader, Work } from "@/components/Sections";
import { caseStudies, moreProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies and live projects by Abdul Rehman: AI SaaS, web apps, multi-language e-commerce stores and WordPress sites.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        meta={`${caseStudies.length + moreProjects.length} live projects`}
        title="Real products,"
        accent="live on the web."
        sub="Six in-depth case studies, then more websites and stores. Every project is live, so open it and click around."
      />
      <Work />
      <MoreProjects />
      <CtaBand />
    </>
  );
}
