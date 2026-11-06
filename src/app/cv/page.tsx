import type { Metadata } from "next";
import Image from "next/image";
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
  ...caseStudies
    .filter((c) => c.slug !== "velcarro")
    .map((c) => ({ name: c.name, kicker: c.kicker, url: c.url, points: c.built.slice(0, 2), stack: c.stack.join(" · ") })),
  ...moreProjects
    .filter((p) => p.name === "Renewlo")
    .map((p) => ({ name: p.name, kicker: "Web app · Document renewals", url: p.url, points: [p.blurb.replace(/\.$/, "")], stack: p.tags.join(" · ") })),
];

const skills: [string, string[]][] = [
  ["Frontend", ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Motion", "Three.js"]],
  ["Backend & data", ["Node.js", "Python", "PostgreSQL", "Neon", "Supabase", "Prisma", "Drizzle", "REST APIs"]],
  ["AI & agents", ["OpenAI Agents SDK", "Claude", "MCP", "Gemini", "Groq", "Whisper", "Multi-model fallback"]],
  ["Auth & payments", ["Clerk", "Better Auth", "Polar", "EasyPaisa / JazzCash flows", "WhatsApp ordering"]],
  ["Ship & CMS", ["Vercel", "GitHub", "Cloudflare", "Playwright", "SEO", "PWA", "WordPress", "Elementor", "Divi"]],
];

const strengths = [
  "End-to-end delivery: UI, database, auth, payments, AI and deploy",
  "Arabic & Urdu right-to-left interfaces",
  "AI features with provider fallback",
  "Clean, typed, tested code",
];

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2.5 flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#3f6300] uppercase">
      <span className="h-[3px] w-4 rounded bg-[#a6e22e]" />
      {children}
    </h2>
  );
}

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

      <article className="cv-sheet mx-auto max-w-[210mm] overflow-hidden bg-white text-[12.5px] leading-[1.5] text-[#1a1b20] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] print:max-w-none print:shadow-none">
        {/* Header band */}
        <header className="relative flex flex-col gap-5 overflow-hidden bg-[#0c0d12] px-7 py-7 text-white sm:flex-row sm:items-center sm:px-[12mm] print:flex-row print:items-center">
          <div className="absolute -top-20 -right-10 h-60 w-60 rounded-full bg-[#c8ff4d] opacity-20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-[#8a7dff] opacity-25 blur-3xl" aria-hidden />
          <Image
            src="/abdul-rehman-glasses.jpg"
            alt="Abdul Rehman"
            width={240}
            height={240}
            priority
            className="relative h-[92px] w-[92px] shrink-0 rounded-2xl border-2 border-[#c8ff4d] object-cover object-top"
          />
          <div className="relative min-w-0">
            <h1 className="text-[32px] leading-none font-bold tracking-tight">Abdul Rehman</h1>
            <p className="mt-1.5 text-[15px] font-semibold text-[#c8ff4d]">{profile.title}</p>
            <p className="mt-1 text-[12px] text-white/70">Co-Founder, Undercraft Studio · Founder, Velcarro · {profile.location}</p>
          </div>
        </header>

        {/* Contact strip */}
        <div className="flex flex-wrap gap-x-5 gap-y-1 border-b border-[#e8e8e8] bg-[#f6f7f2] px-7 py-2.5 text-[11.5px] sm:px-[12mm]">
          <a href={`mailto:${profile.email}`}><b className="font-semibold">Email</b> {profile.email}</a>
          <a href={profile.linkedin}><b className="font-semibold">LinkedIn</b> linkedin.com/in/abdulrehman-undercraft</a>
          <a href={profile.github}><b className="font-semibold">GitHub</b> github.com/rahmangamer12</a>
          <a href={SITE_URL}><b className="font-semibold">Web</b> {host(SITE_URL)}</a>
        </div>

        <div className="grid gap-7 px-7 py-6 sm:grid-cols-[1fr_62mm] sm:px-[12mm] print:grid-cols-[1fr_62mm]">
          {/* Main column */}
          <div className="min-w-0">
            <section>
              <H>Profile</H>
              <p>
                AI web developer and agentic AI engineer who builds complete products end to end: interface, database, authentication,
                payments, AI features and deployment. Co-Founder of Undercraft Studio, working with businesses in Qatar and the Gulf, and
                founder of the Velcarro online store. Ships production Next.js apps, AI agents and automations, multi-language and Arabic
                right-to-left e-commerce, and WordPress sites.
              </p>
            </section>

            <section className="mt-5">
              <H>Experience</H>
              <div className="border-l-2 border-[#e3e3e3] pl-4">
                <p className="text-[14px] font-bold">Co-Founder · Undercraft Studio</p>
                <p className="text-[11.5px] text-[#666]">{host(profile.undercraft)} · Websites, web apps & AI for businesses in Qatar and the Gulf</p>
                <ul className="cv-ul mt-1">
                  <li>Delivered e-commerce stores with admin panels and WhatsApp ordering (AD Online Store, MS Customize, K TECH Printing).</li>
                  <li>Built a bilingual English / Arabic tailoring store with bookings and order tracking (Dar Al Zahra).</li>
                  <li>Built WordPress restaurant sites with Elementor and custom child themes, including online pickup ordering (Diwan Golconda, Momocha Hibachi).</li>
                </ul>
                </div>
              <div className="mt-3 border-l-2 border-[#e3e3e3] pl-4">
                <p className="text-[14px] font-bold">Founder · Velcarro</p>
                <p className="text-[11.5px] text-[#666]">velcarro.com · Own online store</p>
                <ul className="cv-ul mt-1">
                  <li>Built and run the full store: catalogue, cart, checkout, accounts and admin, in 12 languages including Arabic and Urdu (RTL).</li>
                  <li>Next.js 16, React 19, Tailwind CSS v4, Clerk, Supabase; continuous deployment on Vercel with custom domain and email routing.</li>
                </ul>
              </div>
            </section>

            <section className="mt-5">
              <H>Selected projects</H>
              <div className="space-y-3">
                {cvProjects.map((p) => (
                  <div key={p.name} className="break-inside-avoid">
                    <p className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-[13.5px] font-bold">{p.name}</span>
                      <span className="text-[11px] text-[#666]">{p.kicker}</span>
                      <a href={p.url} className="ml-auto text-[11px] font-medium text-[#3f6300]">
                        {host(p.url)}
                      </a>
                    </p>
                    <ul className="cv-ul">
                      {p.points.map((x) => (
                        <li key={x}>{x}.</li>
                      ))}
                    </ul>
                    <p className="mt-0.5 text-[11px] text-[#666]">{p.stack}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="min-w-0 space-y-5 sm:border-l sm:border-[#ececec] sm:pl-6 print:border-l print:border-[#ececec] print:pl-6">
            <section>
              <H>Skills</H>
              <div className="space-y-3">
                {skills.map(([k, items]) => (
                  <div key={k} className="break-inside-avoid">
                    <p className="mb-1 text-[11.5px] font-bold">{k}</p>
                    <ul className="flex flex-wrap gap-1">
                      {items.map((s) => (
                        <li key={s} className="rounded-md bg-[#f1f3ea] px-1.5 py-0.5 text-[10.5px] text-[#2a2c22]">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            <section className="break-inside-avoid">
              <H>Strengths</H>
              <ul className="cv-ul">
                {strengths.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
            <section className="break-inside-avoid">
              <H>Training</H>
              <p className="font-bold">PIAIC / Panaversity</p>
              <p>Agentic AI path, Forward Deployed Engineer track (in progress)</p>
            </section>
            <section className="break-inside-avoid">
              <H>Languages</H>
              <p>English · Urdu</p>
            </section>
            <section className="break-inside-avoid">
              <H>Links</H>
              <ul className="space-y-0.5 text-[11.5px]">
                <li>
                  <a href={SITE_URL}>{host(SITE_URL)}</a>
                </li>
                <li>
                  <a href={profile.undercraft}>undercraftstudio.com</a>
                </li>
                <li>
                  <a href={profile.velcarro}>velcarro.com</a>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </article>
    </div>
  );
}
