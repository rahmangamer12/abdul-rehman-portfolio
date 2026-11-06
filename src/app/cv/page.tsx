import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, caseStudies, moreProjects, profile } from "@/lib/data";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "CV",
  description: "CV of Abdul Rehman, AI Web Developer & Agentic AI Engineer. Co-Founder of Undercraft Studio, founder of Velcarro.",
  alternates: { canonical: "/cv" },
};

const host = (u: string) => new URL(u).hostname.replace(/^www\./, "");

const cvProjects = [
  ...caseStudies.filter((c) => c.slug !== "velcarro").map((c) => ({ name: c.name, url: c.url, line: c.built[0], stack: c.stack.join(", ") })),
  ...moreProjects
    .filter((p) => ["Renewlo", "Tarjuman", "Gap Atlas 2026"].includes(p.name))
    .map((p) => ({ name: p.name, url: p.url, line: p.blurb, stack: p.tags.join(", ") })),
];

const skills: [string, string][] = [
  ["Frontend", "Next.js (App Router), React 19, TypeScript, Tailwind CSS, Motion, responsive & accessible UI"],
  ["Backend & data", "Node.js, Python, REST APIs, Prisma, Drizzle, PostgreSQL / Neon, Supabase, cron & queues"],
  ["AI & agents", "OpenAI Agents SDK, Claude, MCP servers, Gemini, Groq, Whisper, multi-model fallback"],
  ["Auth & payments", "Clerk, Better Auth, Polar subscriptions, local payment flows (EasyPaisa / JazzCash), WhatsApp ordering"],
  ["Shipping & CMS", "Vercel, GitHub, Playwright testing, SEO, PWA, WordPress, Elementor, Divi, custom child themes"],
];

export default function CvPage() {
  return (
    <div className="min-h-screen bg-bg-2 py-6 sm:py-10 print:bg-white print:py-0">
      <div className="no-print mx-auto mb-5 flex max-w-[210mm] flex-wrap items-center justify-between gap-3 px-4">
        <Link href="/" className="btn btn-ghost !h-10 !text-sm">
          ← Back to portfolio
        </Link>
        <div className="flex gap-2">
          <PrintButton />
          <a href="/Abdul-Rehman-CV.pdf" download className="btn btn-primary !h-10 !text-sm">
            Download PDF
          </a>
        </div>
      </div>

      <article className="mx-auto max-w-[210mm] bg-white px-6 py-8 text-[13.5px] leading-[1.55] text-[#16171c] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)] sm:px-[16mm] sm:py-[14mm] print:max-w-none print:p-0 print:shadow-none">
        <header className="border-b-2 border-[#16171c] pb-4">
          <h1 className="text-[30px] leading-tight font-bold tracking-tight">Abdul Rehman</h1>
          <p className="mt-0.5 text-[16px] font-semibold text-[#3f6300]">{profile.title}</p>
          <p className="mt-2 text-[12.5px] text-[#444]">
            {profile.location} · <a href={`mailto:${profile.email}`}>{profile.email}</a> ·{" "}
            <a href={profile.linkedin}>linkedin.com/in/abdulrehman-undercraft</a> · <a href={profile.github}>github.com/rahmangamer12</a> ·{" "}
            <a href={SITE_URL}>{host(SITE_URL)}</a>
          </p>
        </header>

        <section className="mt-4">
          <h2 className="cv-h">Summary</h2>
          <p>
            AI web developer and agentic AI engineer who builds complete products end to end: interface, database, authentication,
            payments, AI features and deployment. Co-Founder of Undercraft Studio, working with businesses in Qatar and the Gulf, and
            founder of the Velcarro online store. Ships production Next.js apps, AI agents and automations, multi-language and
            Arabic right-to-left e-commerce, and WordPress sites. Following the PIAIC / Panaversity Agentic AI path (Forward Deployed
            Engineer track).
          </p>
        </section>

        <section className="mt-4">
          <h2 className="cv-h">Experience</h2>
          <div className="mt-1">
            <p className="font-semibold">
              Co-Founder · Undercraft Studio <span className="font-normal text-[#555]">· {host(profile.undercraft)}</span>
            </p>
            <ul className="cv-ul">
              <li>Design and build websites, web apps and AI solutions for businesses, with a focus on Qatar and the Gulf.</li>
              <li>Delivered e-commerce stores with admin panels and WhatsApp ordering (AD Online Store, MS Customize, K TECH Printing).</li>
              <li>Built a bilingual English / Arabic tailoring store with bookings and order tracking (Dar Al Zahra).</li>
              <li>Built WordPress restaurant sites with Elementor and custom child themes, including online pickup ordering.</li>
            </ul>
          </div>
          <div className="mt-3">
            <p className="font-semibold">
              Founder · Velcarro <span className="font-normal text-[#555]">· velcarro.com</span>
            </p>
            <ul className="cv-ul">
              <li>Built and run my own online store: catalogue, cart, checkout, accounts and admin, in 12 languages including Arabic and Urdu (RTL).</li>
              <li>Next.js 16, React 19, Tailwind CSS v4, Clerk, Supabase; continuous deployment on Vercel with a custom domain and email routing.</li>
            </ul>
          </div>
        </section>

        <section className="mt-4">
          <h2 className="cv-h">Selected projects</h2>
          <ul className="mt-1 space-y-1.5">
            {cvProjects.map((p) => (
              <li key={p.name} className="break-inside-avoid">
                <span className="font-semibold">{p.name}</span> <span className="text-[#555]">· {host(p.url)}</span>
                <br />
                <span>{p.line}{p.line.endsWith(".") ? "" : "."}</span> <span className="text-[12px] text-[#555]">Stack: {p.stack}.</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-4 break-inside-avoid">
          <h2 className="cv-h">Skills</h2>
          <dl className="mt-1 space-y-1">
            {skills.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[130px_1fr] gap-2">
                <dt className="font-semibold">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-4 grid gap-4 break-inside-avoid sm:grid-cols-2 print:grid-cols-2">
          <div>
            <h2 className="cv-h">Training</h2>
            <p>
              <span className="font-semibold">PIAIC / Panaversity</span>: Agentic AI path, Forward Deployed Engineer track (in
              progress).
            </p>
          </div>
          <div>
            <h2 className="cv-h">Languages</h2>
            <p>English · Urdu</p>
          </div>
        </section>
      </article>
    </div>
  );
}
