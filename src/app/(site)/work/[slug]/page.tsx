import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { Reveal } from "@/components/ui";
import { Logo, brandColor } from "@/components/Logo";
import { CtaBand } from "@/components/Sections";
import { AiBadge } from "@/components/ai";

const host = (u: string) => new URL(u).hostname.replace(/^www\./, "");

/** Map a stack label like "Neon Postgres" or "Next.js 16" to a logo key. */
const logoFor = (label: string) => {
  const l = label.toLowerCase();
  const table: [string, string][] = [
    ["next", "nextjs"],
    ["react", "react"],
    ["typescript", "typescript"],
    ["tailwind", "tailwind"],
    ["clerk", "clerk"],
    ["prisma", "prisma"],
    ["neon", "neon"],
    ["supabase", "supabase"],
    ["drizzle", "drizzle"],
    ["better auth", "betterauth"],
    ["polar", "polar"],
    ["vercel", "vercel"],
    ["claude", "claude"],
    ["gemini", "gemini"],
    ["groq", "groq"],
    ["pg_cron", "postgres"],
  ];
  return table.find(([k]) => l.includes(k))?.[1];
};

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.name} case study`,
    description: c.summary,
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: { images: [{ url: c.image, width: 1440, height: 900, alt: `Screenshot of ${c.name}` }] },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = caseStudies.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const c = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <div className="aurora opacity-80" aria-hidden>
          <span className="a1" />
          <span className="a2" />
        </div>
        <div className="container-x relative">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
              <Link href="/work" className="hover:text-ink">
                Work
              </Link>
              <span className="mx-2 text-faint">/</span>
              <span className="text-ink">{c.name}</span>
            </nav>
            <h1 className="text-[clamp(3rem,9vw,7rem)] leading-[0.9] font-semibold tracking-[-0.05em]">{c.name}</h1>
            <p className="mt-4 text-lg font-medium text-accent">
              Case study {String(index + 1).padStart(2, "0")}: {c.kicker}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{c.summary}</p>
            {c.ai && (
              <div className="mt-6 flex max-w-2xl flex-wrap items-center gap-3 rounded-2xl border border-line bg-card p-4">
                <AiBadge ai={c.ai} />
                <p className="text-[15px] text-muted">
                  <span className="font-medium text-ink">{c.ai.kind === "worker" ? "The job it owns: " : "What the AI does: "}</span>
                  {c.ai.job}
                </p>
              </div>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit {host(c.url)}
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Build something like this
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative mt-14 sm:mt-20">
            <figure className="relative mr-0 overflow-hidden rounded-2xl border border-line bg-bg shadow-[var(--shadow)] sm:mr-24 lg:mr-40">
              <Image
                src={c.image}
                alt={`${c.name} on desktop`}
                width={1440}
                height={900}
                priority
                sizes="(min-width: 1200px) 1000px, 100vw"
                className="w-full"
              />
              <figcaption className="border-t border-line bg-card px-4 py-2.5 text-[14px] text-muted">{host(c.url)}</figcaption>
            </figure>
            <div className="absolute right-0 -bottom-10 hidden w-[200px] overflow-hidden rounded-[30px] border-[6px] border-device bg-device shadow-[var(--shadow)] sm:block lg:w-[240px]">
              <Image src={c.mobile} alt={`${c.name} on a phone`} width={780} height={1688} sizes="240px" className="w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pt-16 pb-20 sm:pt-24" aria-label="Key facts">
        <div className="container-x">
          <dl className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
            {c.facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.06} className="bg-card p-7 sm:p-9">
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="block text-4xl font-semibold tracking-tight text-accent sm:text-5xl">{f.value}</span>
                  <span className="mt-2 block text-muted">{f.label}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="pb-24 sm:pb-32" aria-label="Project details">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <h2 className="mb-4 max-w-none border-t border-line pt-5 text-xl font-semibold tracking-tight">The problem</h2>
            <p className="serif-i text-3xl leading-snug sm:text-4xl">{c.problem}</p>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="mb-6 max-w-none border-t border-line pt-5 text-xl font-semibold tracking-tight">What I built</h2>
            </Reveal>
            <ol className="space-y-4">
              {c.built.map((b, i) => (
                <Reveal key={b} delay={i * 0.06}>
                  <li className="card flex gap-5 p-5 sm:p-6">
                    <span className="text-sm font-semibold text-accent tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[16px] leading-relaxed">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal>
              <h2 className="mt-12 mb-5 max-w-none border-t border-line pt-5 text-xl font-semibold tracking-tight">Stack</h2>
              <ul className="flex flex-wrap gap-3">
                {c.stack.map((s) => {
                  const key = logoFor(s);
                  return (
                    <li
                      key={s}
                      className="skill-tile !py-2.5 !pr-4 !pl-2.5"
                      style={{ "--brand": key ? brandColor(key) : "var(--accent)" } as CSSProperties}
                    >
                      {key && (
                        <span className="skill-icon !h-9 !w-9 !rounded-xl">
                          <Logo name={key} size={18} />
                        </span>
                      )}
                      <span className="text-[15px] font-medium">{s}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32" aria-label="Next case study">
        <div className="container-x">
          <Link href={`/work/${next.slug}`} className="group card relative grid overflow-hidden transition hover:border-line-2 md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="eyebrow">Next case study</p>
              <p className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{next.name}</p>
              <p className="mt-3 text-muted">{next.summary}</p>
              <span className="mt-8 font-medium text-accent underline-offset-4 group-hover:underline">Read it</span>
            </div>
            <div className="overflow-hidden bg-bg-2">
              <Image
                src={next.image}
                alt=""
                width={1440}
                height={900}
                sizes="(min-width: 768px) 600px, 100vw"
                className="aspect-[16/10] h-full w-full object-cover object-top"
              />
            </div>
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
