import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { caseStudies, highlights, moreProjects, profile, services, skillGroups } from "@/lib/data";
import { Arrow, Reveal, SpotlightCard } from "./ui";
import { Logo, brandColor } from "./Logo";
import { ProcessTimeline, ProjectGrid } from "./interactive";
import { TiltPhoto } from "./Hero";

function hostOf(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

function SectionHead({ id, eyebrow, title, accent, sub, center }: { id: string; eyebrow: string; title: string; accent: string; sub?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-12 max-w-3xl sm:mb-16 ${center ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow mb-4 inline-flex items-center gap-2 ${center ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-[clamp(2.3rem,5.8vw,4.4rem)] leading-[0.98] font-semibold tracking-[-0.04em]">
        {title} <span className="serif-i text-accent">{accent}</span>
      </h2>
      {sub && <p className={`mt-5 max-w-2xl text-lg leading-relaxed text-muted ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </Reveal>
  );
}

const allSkills = skillGroups.flatMap((g) => g.items);

function LogoRow({ reverse = false, items }: { reverse?: boolean; items: typeof allSkills }) {
  const row = [...items, ...items];
  return (
    <div className="marquee py-2">
      <div className={`marquee-track gap-4 ${reverse ? "marquee-rev" : ""}`}>
        {row.map((s, i) => (
          <div key={i} className="logo-tile" aria-hidden={i >= items.length}>
            <span className="skill-icon !h-12 !w-12" style={{ "--brand": brandColor(s.icon) } as CSSProperties}>
              <Logo name={s.icon} size={26} />
            </span>
            <span className="text-lg font-semibold tracking-tight">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StackMarquee() {
  const half = Math.ceil(allSkills.length / 2);
  return (
    <div className="space-y-3 border-y border-line bg-bg-2/40 py-6" aria-label="Technologies I use">
      <LogoRow items={allSkills.slice(0, half)} />
      <LogoRow items={allSkills.slice(half)} reverse />
    </div>
  );
}

export function Highlights({ liveCount }: { liveCount: number }) {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="why-title" id="why">
      <div className="container-x">
        <SectionHead id="why-title" eyebrow="Why work with me" title="One developer," accent="the whole product." />
        <div className="grid gap-5 lg:grid-cols-6">
          <Reveal className="lg:col-span-4">
            <SpotlightCard className="border-grad h-full overflow-hidden p-7 sm:p-9">
              <p className="eyebrow text-accent">End to end</p>
              <h3 className="mt-3 max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">From the first screen to the live URL, I build every layer.</h3>
              <div className="pipe mt-10 overflow-hidden" style={{ "--pipe-w": "900px" } as CSSProperties}>
                <ol className="relative z-10 flex flex-wrap items-center gap-2 sm:flex-nowrap sm:justify-between">
                  {highlights.pipeline.map((p, i) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="rounded-xl border border-line bg-card-2 px-3.5 py-2 text-sm font-medium">{p}</span>
                      {i < highlights.pipeline.length - 1 && <span className="hidden h-px w-6 bg-line-2 sm:block" aria-hidden />}
                    </li>
                  ))}
                </ol>
              </div>
              <p className="mt-8 max-w-lg text-muted">No hand-offs between five freelancers. One person who understands the design, the data and the deploy.</p>
            </SpotlightCard>
          </Reveal>
          <Reveal className="lg:col-span-2" delay={0.08}>
            <SpotlightCard className="flex h-full flex-col justify-between p-7 sm:p-9">
              <p className="eyebrow text-accent">Proof</p>
              <div>
                <p className="text-gradient text-[96px] leading-none font-semibold tracking-[-0.06em]">{liveCount}</p>
                <p className="mt-2 text-lg font-medium">live builds you can open right now</p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal className="lg:col-span-2" delay={0.04}>
            <SpotlightCard className="h-full p-7 sm:p-9">
              <p className="eyebrow text-accent">Gulf-ready</p>
              <p dir="rtl" lang="ar" className="mt-5 text-5xl font-semibold">
                عربي · اردو
              </p>
              <p className="mt-5 text-muted">Arabic and Urdu with full right-to-left layout, next to English. Velcarro runs in 12 languages.</p>
            </SpotlightCard>
          </Reveal>
          <Reveal className="lg:col-span-2" delay={0.08}>
            <SpotlightCard className="h-full p-7 sm:p-9">
              <p className="eyebrow text-accent">AI-native</p>
              <div className="mt-5 flex -space-x-2">
                {["claude", "openai", "mcp", "gemini", "groq"].map((l) => (
                  <span key={l} className="skill-icon !h-12 !w-12 ring-4 ring-[var(--card)]" style={{ "--brand": brandColor(l) } as CSSProperties}>
                    <Logo name={l} size={24} />
                  </span>
                ))}
              </div>
              <p className="mt-5 text-muted">Agents with tools and MCP, and several AI providers with automatic fallback so features keep working.</p>
            </SpotlightCard>
          </Reveal>
          <Reveal className="lg:col-span-2" delay={0.12}>
            <SpotlightCard className="h-full p-7 sm:p-9">
              <p className="eyebrow text-accent">Built to last</p>
              <p className="mt-4 text-5xl font-semibold tracking-tight">1,500+</p>
              <p className="mt-3 text-muted">automated tests in AutoReview AI. Typed code, real auth, real databases.</p>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section className="pt-8 pb-24 sm:pb-32" aria-label="Case studies" id="work">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:gap-0">
          {caseStudies.map((c, i) => (
            <div key={c.slug} className="lg:sticky lg:pb-10" style={{ top: `${96 + i * 18}px` }}>
              <Reveal>
                <article className="card overflow-hidden shadow-[var(--shadow)]">
                  <div className="grid lg:grid-cols-[1.15fr_1fr]">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block overflow-hidden border-b border-line bg-bg-2 p-4 sm:p-6 lg:border-r lg:border-b-0"
                      aria-label={`Open ${c.name} live site (opens in a new tab)`}
                    >
                      <div className="aurora !inset-0 opacity-40" aria-hidden>
                        <span className="a1" />
                      </div>
                      <div className="relative overflow-hidden rounded-xl border border-line bg-bg shadow-[var(--shadow)]">
                        <div className="flex h-8 items-center gap-1.5 border-b border-line px-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                          <span className="ml-3 truncate rounded-md bg-card-2 px-2 py-0.5 font-mono text-[11px] text-faint">{hostOf(c.url)}</span>
                        </div>
                        <Image
                          src={c.image}
                          alt={`Screenshot of ${c.name}`}
                          width={1440}
                          height={900}
                          sizes="(min-width: 1024px) 620px, 100vw"
                          className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                      <span className="absolute right-8 bottom-8 hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink opacity-0 transition group-hover:opacity-100 sm:inline-flex">
                        Open live site <Arrow />
                      </span>
                    </a>
                    <div className="flex flex-col p-6 sm:p-8">
                      <div className="flex items-center justify-between gap-4">
                        <p className="eyebrow text-accent">{c.kicker}</p>
                        <span className="outline-text font-mono text-5xl font-bold" aria-hidden>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">{c.name}</h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-muted">
                        <span className="font-semibold text-ink">The problem: </span>
                        {c.problem}
                      </p>
                      <ul className="mt-5 space-y-2.5">
                        {c.built.map((b) => (
                          <li key={b} className="flex gap-3 text-[15px] leading-relaxed">
                            <svg className="mt-1 shrink-0 text-accent" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                              <path d="M5 12.5 10 17 19 7" />
                            </svg>
                            <span className="text-muted">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                        {c.stack.map((s) => (
                          <li key={s} className="chip !text-[12px]">
                            {s}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto flex flex-wrap gap-3 pt-7">
                        <Link href={`/work/${c.slug}`} className="btn btn-primary !h-11">
                          Read case study <Arrow />
                        </Link>
                        <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !h-11">
                          Live site
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MoreProjects() {
  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="more-title" id="projects">
      <div className="container-x">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-accent" />
              More projects
            </p>
            <h2 id="more-title" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Websites, stores <span className="serif-i text-accent">and more</span>
            </h2>
          </div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline">
            More on GitHub →
          </a>
        </Reveal>
        <ProjectGrid projects={moreProjects} />
      </div>
    </section>
  );
}

export function Services({ head = true }: { head?: boolean }) {
  return (
    <section className="border-t border-line bg-bg-2/40 py-24 sm:py-32" aria-label="Services" id="services">
      <div className="container-x">
        {head && (<SectionHead id="services-title" eyebrow="Services" title="What I can build" accent="for you." />)}
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08} className="h-full">
              <SpotlightCard className="border-grad group h-full p-7 sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex -space-x-2">
                    {s.logos.map((l) => (
                      <span
                        key={l}
                        className="skill-icon !h-14 !w-14 ring-4 ring-[var(--card)] transition group-hover:!rotate-0"
                        style={{ "--brand": brandColor(l) } as CSSProperties}
                      >
                        <Logo name={l} size={28} />
                      </span>
                    ))}
                  </div>
                  <span className="outline-text font-mono text-5xl font-bold" aria-hidden>
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 rounded-xl border border-line bg-card-2 px-3 py-2.5 text-[13px] font-medium">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stack({ head = true }: { head?: boolean }) {
  return (
    <section className="py-24 sm:py-32" aria-label="Stack and skills" id="stack">
      <div className="container-x">
        {head && (<SectionHead
          id="stack-title"
          eyebrow="Stack & skills"
          title="The tools behind"
          accent="every build."
          sub="Used in production on the projects above, not just tutorials."
        />)}
        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.label} delay={(gi % 2) * 0.08} className={gi === 0 ? "lg:col-span-2" : ""}>
              <div className="card h-full p-6 sm:p-8">
                <div className="mb-6 flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight">{g.label}</h3>
                  <p className="text-sm text-muted">{g.blurb}</p>
                </div>
                <ul className={`grid grid-cols-2 gap-3 ${gi === 0 ? "lg:grid-cols-3" : ""}`}>
                  {g.items.map((s) => (
                    <li key={s.name} className="skill-tile" style={{ "--brand": brandColor(s.icon) } as CSSProperties}>
                      <span className="skill-icon">
                        <Logo name={s.icon} size={30} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[17px] font-semibold tracking-tight">{s.name}</span>
                        <span className="block truncate text-[13px] text-muted">{s.note}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process({ head = true }: { head?: boolean }) {
  return (
    <section className="border-t border-line bg-bg-2/40 py-24 sm:py-32" aria-label="How I work" id="process">
      <div className="container-x">
        {head && (<SectionHead id="process-title" eyebrow="How I work" title="From first message" accent="to live URL." />)}
        <ProcessTimeline />
      </div>
    </section>
  );
}

export function About({ head = true }: { head?: boolean }) {
  const facts = [
    ["Role", "Co-Founder, Undercraft Studio"],
    ["Brand", "Founder, Velcarro"],
    ["Learning", "PIAIC / Panaversity Agentic AI, Forward Deployed Engineer track"],
    ["Based in", "Karachi, Pakistan"],
    ["Clients", "Qatar & the Gulf"],
    ["Languages", "English, Urdu"],
  ];
  return (
    <section className="py-24 sm:py-32" aria-label="About" id="about">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <TiltPhoto className="mx-auto max-w-sm">
            <div className="ring-glow absolute -inset-[2px] rounded-[30px] opacity-70" aria-hidden />
            <div className="relative overflow-hidden rounded-[28px] bg-card">
              <Image
                src="/abdul-rehman-glasses.jpg"
                alt="Abdul Rehman"
                width={900}
                height={900}
                sizes="(min-width: 1024px) 400px, 90vw"
                className="aspect-[4/5] w-full object-cover object-[50%_20%]"
              />
            </div>
          </TiltPhoto>
        </Reveal>
        <div>
          {head && (<SectionHead id="about-title" eyebrow="About" title="Builder first," accent="always shipping." />)}
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I am <span className="font-medium text-ink">Abdul Rehman</span>, an AI web developer and agentic AI engineer from Karachi. I build
              complete products: the interface, the database, the login and payments, the AI behind it and the deploy that puts it online.
            </p>
            <p>
              As Co-Founder of{" "}
              <a className="text-ink underline decoration-accent underline-offset-4" href={profile.undercraft} target="_blank" rel="noopener noreferrer">
                Undercraft Studio
              </a>{" "}
              I work with businesses in Qatar and the Gulf, and I run my own store,{" "}
              <a className="text-ink underline decoration-accent underline-offset-4" href={profile.velcarro} target="_blank" rel="noopener noreferrer">
                Velcarro
              </a>
              . I am also following the PIAIC / Panaversity Agentic AI path on the Forward Deployed Engineer track, so the AI work you see here
              is built on agents, tools and MCP, not just a chat box.
            </p>
          </Reveal>
          <Reveal>
            <blockquote className="serif-i mt-10 border-l-2 border-accent pl-6 text-3xl leading-snug text-ink sm:text-4xl">
              Real content, no fake numbers, and products that load fast on a normal phone.
            </blockquote>
          </Reveal>
          <Reveal>
            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {facts.map(([k, v]) => (
                <div key={k} className="bg-bg p-5">
                  <dt className="eyebrow !text-[11px]">{k}</dt>
                  <dd className="mt-1.5 font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CvBlock() {
  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="cv-title" id="cv">
      <div className="container-x">
        <Reveal>
          <div className="noise border-grad relative overflow-hidden rounded-[32px] border border-line bg-card p-8 sm:p-14">
            <div className="aurora opacity-60" aria-hidden>
              <span className="a2" />
              <span className="a1" />
            </div>
            <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="eyebrow mb-3">Curriculum vitae</p>
                <h2 id="cv-title" className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  The short version, <span className="serif-i text-accent">on paper.</span>
                </h2>
                <p className="mt-4 max-w-lg text-muted">Two A4 pages: summary, roles, selected projects with live links, skills and training. Ready to forward.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/cv" className="btn btn-primary">
                    View CV <Arrow />
                  </Link>
                  <a href="/Abdul-Rehman-CV.pdf" download className="btn btn-ghost">
                    Download PDF
                  </a>
                </div>
              </div>
              <Link href="/cv" aria-label="Open the CV" className="group relative mx-auto block w-full max-w-[300px]">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-2xl border border-line bg-card-2" aria-hidden />
                <div className="relative -rotate-2 rounded-2xl bg-white p-5 shadow-[var(--shadow)] transition duration-500 group-hover:rotate-0">
                  <div className="flex items-center gap-3">
                    <Image src="/abdul-rehman-glasses.jpg" alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-bold text-[#111]">Abdul Rehman</p>
                      <p className="text-[10px] font-semibold text-[#4f7a00]">AI Web Developer & Agentic AI Engineer</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1.5" aria-hidden>
                    {[100, 92, 96, 70, 0, 85, 98, 60, 0, 90, 75].map((w, i) =>
                      w ? <div key={i} className="h-1.5 rounded bg-[#e6e6e6]" style={{ width: `${w}%` }} /> : <div key={i} className="h-2 w-1/3 rounded bg-[#c8ff4d]" />,
                    )}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


export function PageHeader({ eyebrow, title, accent, sub, children }: { eyebrow: string; title: string; accent: string; sub?: string; children?: React.ReactNode }) {
  return (
    <section className="noise relative overflow-hidden pt-36 pb-14 sm:pt-44 sm:pb-20">
      <div className="aurora opacity-80" aria-hidden>
        <span className="a1" />
        <span className="a2" />
      </div>
      <div className="grid-bg" aria-hidden />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow mb-5 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-accent" />
            {eyebrow}
          </p>
          <h1 className="max-w-5xl text-[clamp(2.8rem,8vw,6.4rem)] leading-[0.92] font-semibold tracking-[-0.045em]">
            {title} <span className="serif-i text-gradient">{accent}</span>
          </h1>
          {sub && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{sub}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function FeaturedWork() {
  return (
    <section className="border-t border-line py-24 sm:py-32" aria-labelledby="featured-title">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-x-6">
          <SectionHead id="featured-title" eyebrow="Selected work" title="Real products," accent="live on the web." />
          <Reveal className="mb-12 sm:mb-16">
            <Link href="/work" className="btn btn-ghost">
              All projects <Arrow />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
              <Link
                href={`/work/${c.slug}`}
                className="group card relative block h-full overflow-hidden transition duration-300 hover:border-line-2 hover:shadow-[var(--shadow)]"
              >
                <div className={`grid h-full ${i === 0 ? "lg:grid-cols-[1.4fr_1fr]" : ""}`}>
                  <div className="relative overflow-hidden bg-bg-2">
                    <Image
                      src={c.image}
                      alt={`Screenshot of ${c.name}`}
                      width={1440}
                      height={900}
                      sizes={i === 0 ? "(min-width: 1024px) 700px, 100vw" : "(min-width: 768px) 600px, 100vw"}
                      className="aspect-[16/10] h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
                    <div>
                      <p className="eyebrow text-accent">{c.kicker}</p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{c.name}</h3>
                      <p className="mt-3 leading-relaxed text-muted">{c.summary}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm text-muted">
                        <span className="text-xl font-semibold text-ink">{c.facts[0].value}</span> {c.facts[0].label}
                      </p>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line transition group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                        <Arrow />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="border-t border-line bg-bg-2/40 py-24 sm:py-32" aria-labelledby="sp-title">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-x-6">
          <SectionHead id="sp-title" eyebrow="Services" title="What I can build" accent="for you." />
          <Reveal className="mb-12 sm:mb-16">
            <Link href="/services" className="btn btn-ghost">
              All services <Arrow />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className="h-full">
              <Link
                href="/services"
                className="group card border-grad flex h-full flex-col p-6 transition hover:-translate-y-1.5 hover:shadow-[var(--shadow)]"
              >
                <div className="flex -space-x-2">
                  {s.logos.slice(0, 3).map((l) => (
                    <span key={l} className="skill-icon !h-12 !w-12 ring-4 ring-[var(--card)]" style={{ "--brand": brandColor(l) } as CSSProperties}>
                      <Logo name={l} size={24} />
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{s.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Learn more <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="cta-title">
      <div className="container-x">
        <Reveal>
          <div className="noise border-grad relative overflow-hidden rounded-[36px] border border-line bg-card px-7 py-16 text-center sm:px-14 sm:py-24">
            <div className="aurora" aria-hidden>
              <span className="a1" />
              <span className="a2" />
              <span className="a3" />
            </div>
            <div className="relative">
              <p className="eyebrow">Have a project in mind?</p>
              <h2 id="cta-title" className="mx-auto mt-5 max-w-4xl text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.95] font-semibold tracking-[-0.045em]">
                Let&apos;s build something <span className="serif-i text-gradient">people use.</span>
              </h2>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn btn-primary shadow-[0_10px_40px_-10px_var(--accent)]">
                  Start a project <Arrow />
                </Link>
                <Link href="/work" className="btn btn-ghost">
                  See the work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
