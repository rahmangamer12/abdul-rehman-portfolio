import type { Metadata } from "next";
import { CtaBand, PageHeader, Stack, StackMarquee } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Skills",
  description: "The stack Abdul Rehman uses in production: Next.js, React, TypeScript, Tailwind, Node, Python, Postgres, Neon, Supabase, OpenAI Agents SDK, Claude, MCP, Clerk, Vercel, WordPress.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        title="The tools behind"
        accent="every build."
        sub="Used in production on the projects in my work, not just in tutorials."
      />
      <StackMarquee />
      <Stack head={false} />
      <CtaBand />
    </>
  );
}
