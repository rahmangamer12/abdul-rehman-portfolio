"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { profile } from "@/lib/data";
import { Logo } from "./Logo";

const ease = [0.22, 1, 0.36, 1] as const;
const roles = ["AI agents", "SaaS apps", "online stores", "WordPress sites"];
const heroLogos = ["nextjs", "react", "typescript", "tailwind", "claude", "mcp", "neon", "vercel"];

function RotatingWord() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);
  return (
    <span className="relative inline-grid h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease }}
          className="text-accent col-start-1 row-start-1 whitespace-nowrap"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Magnetic({ children, className = "" }: { children: ReactNode; className?: string }) {
  const x = useSpring(0, { stiffness: 250, damping: 18 });
  const y = useSpring(0, { stiffness: 250, damping: 18 });
  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

export function TiltPhoto({ children, className = "" }: { children: ReactNode; className?: string }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 150, damping: 15 });
  const glare = useTransform(
    () => `radial-gradient(500px circle at ${mx.get() * 100}% ${my.get() * 100}%, rgba(255,255,255,0.32), transparent 45%)`,
  );
  const reduce = useReducedMotion();
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  return (
    <div className={`[perspective:1100px] ${className}`} onPointerMove={onMove} onPointerLeave={() => (mx.set(0.5), my.set(0.5))}>
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative">
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[34px] mix-blend-overlay"
          style={{ background: glare }}
        />
      </motion.div>
    </div>
  );
}

export function Hero({ liveCount }: { liveCount: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const up = (d: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease } };

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--hx", `${e.clientX - r.left}px`);
    el.style.setProperty("--hy", `${e.clientY - r.top}px`);
  };

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
      aria-labelledby="hero-title"
    >
      <div className="aurora" aria-hidden>
        <span className="a1" />
        <span className="a2" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
          <div>
            <motion.div {...up(0.05)} className="mb-7 inline-flex items-center rounded-full border border-line bg-card px-4 py-1.5">
              <span className="text-[13px] text-muted">Available for new projects · {profile.location}</span>
            </motion.div>

            <h1 id="hero-title" className="text-[clamp(3.6rem,11.5vw,8.6rem)] leading-[0.86] font-semibold tracking-[-0.05em]">
              <span className="sr-only">Abdul Rehman</span>
              <span aria-hidden className="block">
                {"Abdul".split("").map((c, i) => (
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
                {"Rehman".split("").map((c, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={reduce ? false : { opacity: 0, y: "60%", rotate: 6 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.9, delay: 0.35 + i * 0.05, ease }}
                  >
                    {c}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p {...up(0.7)} className="mt-7 text-[15px] font-medium text-muted">
              {profile.title}
            </motion.p>
            <motion.p {...up(0.8)} className="mt-3 text-[clamp(1.5rem,3.2vw,2.2rem)] leading-tight font-medium tracking-tight">
              I build <RotatingWord />
              <br className="sm:hidden" /> that go live and stay live.
            </motion.p>
            <motion.p {...up(0.9)} className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.valueProp} Co-Founder of Undercraft Studio, founder of Velcarro.
            </motion.p>

            <motion.div {...up(1)} className="mt-9 flex flex-wrap gap-3">
              <Magnetic>
                <Link href="/contact" className="btn btn-primary">
                  Hire me
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/work" className="btn btn-ghost">
                  View work
                </Link>
              </Magnetic>
              <Magnetic>
                <a href="/Abdul-Rehman-CV.pdf" download className="btn btn-ghost">
                  Download CV
                </a>
              </Magnetic>
            </motion.div>

            <motion.div {...up(1.1)} className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="eyebrow">Builds with</span>
              <ul className="flex flex-wrap items-center gap-4">
                {heroLogos.map((l) => (
                  <li key={l} className="opacity-80">
                    <Logo name={l} size={22} />
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease }}
            className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[430px]"
          >
            <TiltPhoto>
              <div className="ring-glow absolute -inset-[2px] rounded-[36px] opacity-90" aria-hidden />
              <div className="relative overflow-hidden rounded-[34px] bg-card">
                <Image
                  src="/abdul-rehman-glasses.jpg"
                  alt="Portrait of Abdul Rehman"
                  width={900}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 430px, 400px"
                  className="aspect-[4/5] w-full object-cover object-[50%_25%]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 pt-24">
                  <p className="text-base font-semibold text-white">Abdul Rehman</p>
                  <p className="text-[13px] text-white/75">Co-Founder, Undercraft Studio</p>
                </div>
              </div>
            </TiltPhoto>
            <div className="float-a absolute -left-3 top-10 rounded-2xl border border-line bg-card px-4 py-3 shadow-[var(--shadow)] sm:-left-8">
              <p className="eyebrow !text-[13px]">Track</p>
              <p className="text-sm font-semibold">Agentic AI · PIAIC</p>
            </div>
            <div className="float-b absolute -right-2 top-[46%] rounded-2xl border border-line bg-card px-4 py-3 shadow-[var(--shadow)] sm:-right-8">
              <p className="eyebrow !text-[13px]">Live builds</p>
              <p className="text-2xl leading-none font-semibold tracking-tight">{liveCount}</p>
            </div>
            <div className="float-a absolute -right-2 -bottom-5 flex items-center gap-2 sm:-right-6 rounded-full border border-line bg-card py-2 pr-4 pl-2 shadow-[var(--shadow)]">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[11px] font-bold text-accent-ink">V</span>
              <span className="text-sm font-medium">Founder, Velcarro</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
