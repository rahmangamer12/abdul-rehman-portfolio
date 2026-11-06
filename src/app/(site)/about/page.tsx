import type { Metadata } from "next";
import { About, CvBlock, PageHeader } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About",
  description: "Abdul Rehman: AI web developer and agentic AI engineer in Karachi, Co-Founder of Undercraft Studio and founder of Velcarro.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Builder first," accent="always shipping." />
      <div className="-mt-10 sm:-mt-16">
        <About head={false} />
      </div>
      <CvBlock />
    </>
  );
}
