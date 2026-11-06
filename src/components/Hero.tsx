"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/lib/data";
import { Arrow } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero({ liveCount }: { liveCount: number }) {
  const reduce = useReducedMotion();
  const up = (d: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease } };

  const first = "Abdul".split("");
  const last = "Rehman".split("");

  return (
    <section className="noise relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24" aria-labelledby="hero-title">
      <div className="aurora" aria-hidden>
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
      </div>
      <div className="grid-bg" aria-hidden />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          <div>
            <motion.div {...up(0.05)} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-card/60 py-1.5 pr-4 pl-2 backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="text-[13px] text-muted">Open to new projects · {profile.location}</span>
            </motion.div>

            <h1 id="hero-title" className="text-[clamp(3.4rem,11vw,8.4rem)] leading-[0.88] font-semibold tracking-[-0.045em]">
              <span className="sr-only">Abdul Rehman</span>
              <span aria-hidden className="block">
                {first.map((c, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={reduce ? false : { opacity: 0, y: "60%", rotate: 6 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.05, ease }}
                  >
                    {c}
                  </motion.span>
                ))}
              </span>
              <span aria-hidden className="block">
                {last.map((c, i) => (
                  <motion.span
                    key={i}
                    className="serif-i text-gradient inline-block pr-[0.04em]"
                    initial={reduce ? false : { opacity: 0, y: "60%", rotate: 6 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.9, delay: 0.35 + i * 0.05, ease }}
                  >
                    {c}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p {...up(0.75)} className="mt-7 text-xl font-medium tracking-tight sm:text-2xl">
              {profile.title}
            </motion.p>
            <motion.p {...up(0.85)} className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.valueProp} Co-Founder of Undercraft Studio, founder of Velcarro.
            </motion.p>

            <motion.div {...up(0.95)} className="mt-9 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-primary">
                Hire me <Arrow />
              </Link>
              <Link href="/#work" className="btn btn-ghost">
                View work
              </Link>
            </motion.div>

            <motion.dl {...up(1.05)} className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6">
              <div>
                <dt className="eyebrow !text-[11px]">Live builds</dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight">{liveCount}</dd>
              </div>
              <div>
                <dt className="eyebrow !text-[11px]">Focus</dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight">AI + Web</dd>
              </div>
              <div>
                <dt className="eyebrow !text-[11px]">Clients in</dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight">Gulf</dd>
              </div>
            </motion.dl>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease }}
            className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]"
          >
            <div className="ring-glow absolute -inset-[2px] rounded-[36px] opacity-80" aria-hidden />
            <div className="relative overflow-hidden rounded-[34px] bg-card">
              <Image
                src="/abdul-rehman.jpg"
                alt="Portrait of Abdul Rehman"
                width={900}
                height={900}
                priority
                sizes="(min-width: 1024px) 420px, 380px"
                className="aspect-[4/5] w-full object-cover object-[50%_30%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-20">
                <p className="text-sm font-medium text-white">Abdul Rehman</p>
                <p className="text-[13px] text-white/70">Co-Founder, Undercraft Studio</p>
              </div>
            </div>
            <div className="absolute -left-4 top-8 hidden rounded-2xl border border-line bg-card/80 px-4 py-3 shadow-[var(--shadow)] backdrop-blur-md sm:block">
              <p className="eyebrow !text-[10px]">Track</p>
              <p className="text-sm font-medium">Agentic AI · PIAIC</p>
            </div>
            <div className="absolute -right-3 bottom-24 hidden rounded-2xl border border-line bg-card/80 px-4 py-3 shadow-[var(--shadow)] backdrop-blur-md sm:block">
              <p className="eyebrow !text-[10px]">Founder</p>
              <p className="text-sm font-medium">Velcarro</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
