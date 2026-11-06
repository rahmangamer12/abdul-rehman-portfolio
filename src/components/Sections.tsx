import Image from "next/image";
import Link from "next/link";
import { caseStudies, moreProjects, services, stackGroups, steps, profile } from "@/lib/data";
import { Arrow, Reveal, SpotlightCard } from "./ui";

function hostOf(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

function SectionHead({ id, eyebrow, title, accent, sub }: { id: string; eyebrow: string; title: string; accent: string; sub?: string }) {
  return (
    <Reveal className="mb-12 max-w-3xl sm:mb-16">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 id={id} className="text-[clamp(2.2rem,5.5vw,4rem)] leading-[0.98] font-semibold tracking-[-0.035em]">
        {title} <span className="serif-i text-accent">{accent}</span>
      </h2>
      {sub && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{sub}</p>}
    </Reveal>
  );
}

export function StackMarquee() {
  const items = stackGroups.flatMap((g) => g.items);
  const row = [...items, ...items];
  return (
    <div className="marquee border-y border-line py-5" aria-hidden>
      <div className="marquee-track gap-10">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-10 text-lg whitespace-nowrap text-muted">
            {s}
            <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="work-title" id="work">
      <div className="container-x">
        <SectionHead
          id="work-title"
          eyebrow="Selected work"
          title="Real products,"
          accent="live on the web."
          sub="Six builds I am proud of: the problem, what I built and the stack. Every one is live, so you can open it and click around."
        />
        <div className="flex flex-col gap-8 sm:gap-10">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug}>
              <SpotlightCard className="overflow-hidden p-3 sm:p-4">
                <article className={`grid items-center gap-6 lg:grid-cols-2 lg:gap-10 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden rounded-[18px] border border-line bg-bg-2"
                    aria-label={`Open ${c.name} live site (opens in a new tab)`}
                  >
                    <div className="flex h-8 items-center gap-1.5 border-b border-line px-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                      <span className="ml-3 truncate font-mono text-[11px] text-faint">{hostOf(c.url)}</span>
                    </div>
                    <Image
                      src={c.image}
                      alt={`Screenshot of ${c.name}`}
                      width={1440}
                      height={900}
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                    />
                  </a>
                  <div className="px-2 pb-4 sm:px-4 lg:py-6">
                    <p className="eyebrow mb-3 text-accent">
                      {String(i + 1).padStart(2, "0")} · {c.kicker}
                    </p>
                    <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{c.name}</h3>
                    <p className="mt-4 leading-relaxed text-muted">
                      <span className="font-medium text-ink">Problem. </span>
                      {c.problem}
                    </p>
                    <p className="mt-4 mb-2 text-sm font-medium">What I built</p>
                    <ul className="space-y-2">
                      {c.built.map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Stack">
                      {c.stack.map((s) => (
                        <li key={s} className="chip !text-[12px]">
                          {s}
                        </li>
                      ))}
                    </ul>
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-6 !h-11">
                      Visit {hostOf(c.url)} <Arrow />
                    </a>
                  </div>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MoreProjects() {
  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="more-title">
      <div className="container-x">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">More projects</p>
            <h2 id="more-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Stores, tools and <span className="serif-i text-accent">experiments</span>
            </h2>
          </div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline">
            More on GitHub →
          </a>
        </Reveal>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card spotlight flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:border-line-2"
                >
                  <div className="overflow-hidden border-b border-line bg-bg-2">
                    <Image
                      src={p.image}
                      alt={`Screenshot of ${p.name}`}
                      width={1440}
                      height={900}
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                      className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                      <Arrow className="mt-1 shrink-0 text-faint transition group-hover:text-accent" />
                    </div>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{p.blurb}</p>
                    <p className="mt-4 font-mono text-[11px] tracking-wide text-faint">{p.tags.join(" · ")}</p>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const serviceIcons = [
  <path key="a" d="M12 3v3m0 12v3M3 12h3m12 0h3M6.3 6.3l2.1 2.1m7.2 7.2 2.1 2.1M6.3 17.7l2.1-2.1m7.2-7.2 2.1-2.1M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />,
  <path key="b" d="M4 5h16v11H4zM8 20h8M12 16v4M8 9l-2 2 2 2m8-4 2 2-2 2" />,
  <path key="c" d="M5 7h14l-1.5 12h-11L5 7Zm4 0a3 3 0 0 1 6 0" />,
  <path key="d" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7.5 6.5 4.5 11m10.5-11-4 11M7 6.5h10L12 21" />,
];

export function Services() {
  return (
    <section className="border-t border-line bg-bg-2/40 py-24 sm:py-32" aria-labelledby="services-title" id="services">
      <div className="container-x">
        <SectionHead id="services-title" eyebrow="Services" title="What I can build" accent="for you." />
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08} className="h-full">
              <SpotlightCard className="h-full p-7 sm:p-9">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft text-accent">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {serviceIcons[i]}
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="chip">
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

export function Stack() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="stack-title" id="stack">
      <div className="container-x">
        <SectionHead
          id="stack-title"
          eyebrow="Stack & skills"
          title="Modern tools,"
          accent="used in production."
          sub="The stack behind the projects above. I pick what fits the job and the budget, not what is fashionable."
        />
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {stackGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05} className="bg-bg p-6">
              <p className="eyebrow mb-5 text-accent">{g.label}</p>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="text-[15px] font-medium">
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="border-t border-line bg-bg-2/40 py-24 sm:py-32" aria-labelledby="process-title" id="process">
      <div className="container-x">
        <SectionHead id="process-title" eyebrow="How I work" title="From first message" accent="to live URL." />
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="card relative h-full overflow-hidden p-7">
                  <span className="serif-i absolute -top-4 right-3 text-[96px] leading-none text-accent/15 select-none" aria-hidden>
                    {s.n}
                  </span>
                  <p className="eyebrow text-accent">Step {s.n}</p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function About() {
  const facts = [
    ["Role", "Co-Founder, Undercraft Studio"],
    ["Brand", "Founder, Velcarro"],
    ["Learning", "PIAIC / Panaversity Agentic AI, Forward Deployed Engineer track"],
    ["Based in", "Karachi, Pakistan"],
    ["Clients", "Qatar & the Gulf"],
    ["Languages", "English, Urdu"],
  ];
  return (
    <section className="py-24 sm:py-32" aria-labelledby="about-title" id="about">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-[28px] border border-line lg:sticky lg:top-28">
            <Image
              src="/abdul-rehman.jpg"
              alt="Abdul Rehman"
              width={900}
              height={900}
              sizes="(min-width: 1024px) 400px, 90vw"
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>
        <div>
          <SectionHead id="about-title" eyebrow="About" title="Builder first," accent="always shipping." />
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I am <span className="text-ink">Abdul Rehman</span>, an AI web developer and agentic AI engineer from Karachi. I build
              complete products: the interface, the database, the login and payments, the AI behind it and the deploy that puts it
              online.
            </p>
            <p>
              As Co-Founder of <a className="text-ink underline decoration-accent underline-offset-4" href={profile.undercraft} target="_blank" rel="noopener noreferrer">Undercraft Studio</a>{" "}
              I work with businesses in Qatar and the Gulf, and I run my own store,{" "}
              <a className="text-ink underline decoration-accent underline-offset-4" href={profile.velcarro} target="_blank" rel="noopener noreferrer">Velcarro</a>. I am also
              following the PIAIC / Panaversity Agentic AI path on the Forward Deployed Engineer track, so the AI work you see here is
              built on agents, tools and MCP, not just a chat box.
            </p>
            <p>
              I care about honest work: real content, no fake numbers, and products that load fast on a normal phone.
            </p>
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
          <div className="noise relative overflow-hidden rounded-[32px] border border-line bg-card p-8 sm:p-14">
            <div className="aurora opacity-50" aria-hidden>
              <span className="a2" />
            </div>
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="eyebrow mb-3">Curriculum vitae</p>
                <h2 id="cv-title" className="text-3xl font-semibold tracking-tight sm:text-5xl">
                  The short version, <span className="serif-i text-accent">on paper.</span>
                </h2>
                <p className="mt-4 max-w-lg text-muted">A clean, one-page-style CV with skills, roles and selected projects with live links.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/cv" className="btn btn-primary">
                  View CV <Arrow />
                </Link>
                <a href="/Abdul-Rehman-CV.pdf" download className="btn btn-ghost">
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
