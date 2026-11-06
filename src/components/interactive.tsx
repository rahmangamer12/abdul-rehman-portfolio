"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import type { Project } from "@/lib/data";
import { steps } from "@/lib/data";
import { Arrow } from "./ui";
import { AiBadge } from "./ai";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      className="no-print fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-accent via-violet to-accent"
      style={{ scaleX }}
    />
  );
}

const filters = ["All", "WordPress", "Store", "Web app"] as const;
const labels: Record<(typeof filters)[number], string> = { All: "All", WordPress: "WordPress", Store: "Stores", "Web app": "Web apps" };

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const shown = f === "All" ? projects : projects.filter((p) => p.category === f);
  return (
    <>
      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {filters.map((k) => {
          const count = k === "All" ? projects.length : projects.filter((p) => p.category === k).length;
          const active = f === k;
          return (
            <button
              key={k}
              type="button"
              aria-pressed={active}
              onClick={() => setF(k)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition ${active ? "text-accent-ink" : "text-muted hover:text-ink"}`}
            >
              {active && (
                <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-accent" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
              )}
              <span className="relative">
                {labels[k]} <span className="opacity-60">{count}</span>
              </span>
            </button>
          );
        })}
      </div>
      <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.li
              key={p.name}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:border-line-2 hover:shadow-[var(--shadow)]"
              >
                <div className="relative overflow-hidden border-b border-line bg-bg-2">
                  <Image
                    src={p.image}
                    alt={`Screenshot of ${p.name}`}
                    width={1440}
                    height={900}
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.05]"
                  />
                  <span className="absolute top-3 left-3 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                    {p.category}
                  </span>
                  <span className="absolute top-3 right-3 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-accent text-accent-ink opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    <Arrow />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                    {p.ai && <AiBadge ai={p.ai} />}
                  </div>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{p.blurb}</p>
                  {p.ai && <p className="mt-3 text-[13px] leading-relaxed text-faint">{p.ai.job}</p>}
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}

export function ProcessTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <ol ref={ref} className="relative grid gap-6 lg:grid-cols-4 lg:gap-5">
      <div aria-hidden className="absolute top-[27px] right-[12%] left-[12%] hidden h-[2px] bg-line lg:block">
        <motion.div className="h-full origin-left bg-gradient-to-r from-accent to-violet" style={{ scaleX: reduce ? 1 : fill }} />
      </div>
      <div aria-hidden className="absolute top-2 bottom-2 left-[27px] w-[2px] bg-line lg:hidden">
        <motion.div className="w-full origin-top bg-gradient-to-b from-accent to-violet" style={{ scaleY: reduce ? 1 : fill, height: "100%" }} />
      </div>
      {steps.map((s, i) => (
        <motion.li
          key={s.n}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
          className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center"
        >
          <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-line bg-card font-mono text-sm font-semibold text-accent shadow-[var(--shadow)]">
            {s.n}
          </span>
          <div className="card flex-1 p-6 lg:w-full">
            <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
