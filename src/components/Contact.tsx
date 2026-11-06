"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";
import { Arrow, GitHubIcon, LinkedInIcon, MailIcon, Reveal } from "./ui";

const topics = ["AI agent / automation", "SaaS / web app", "E-commerce store", "WordPress site", "Something else"];

export function Contact({ page = false }: { page?: boolean }) {
  const Heading = page ? "h1" : "h2";
  const [topic, setTopic] = useState(topics[0]);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const msg = String(f.get("message") || "").trim();
    const subject = `Project enquiry: ${topic}${name ? ` from ${name}` : ""}`;
    const body = `${msg}\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const input =
    "w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-[15px] text-ink placeholder:text-faint outline-none transition focus:border-accent";

  return (
    <section className="border-t border-line py-24 sm:py-32" aria-labelledby="contact-title" id="contact">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow mb-4">Contact</p>
          <Heading id="contact-title" className="text-[clamp(2.6rem,7vw,5.2rem)] leading-[0.95] font-semibold tracking-[-0.04em]">
            Have an idea? <span className="serif-i text-gradient block">Let&apos;s build it.</span>
          </Heading>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Tell me what you need: an AI agent, a SaaS app, a store or a website.
          </p>
          <div className="mt-10 space-y-3">
            <a href={`mailto:${profile.email}`} className="group flex items-center gap-4 rounded-2xl border border-line p-4 transition hover:border-line-2">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                <MailIcon />
              </span>
              <span>
                <span className="block text-sm text-muted">Email</span>
                <span className="font-medium">{profile.email}</span>
              </span>
              <Arrow className="ml-auto text-faint group-hover:text-accent" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-line p-4 transition hover:border-line-2">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                <LinkedInIcon />
              </span>
              <span>
                <span className="block text-sm text-muted">LinkedIn</span>
                <span className="font-medium">in/abdulrehman-undercraft</span>
              </span>
              <Arrow className="ml-auto text-faint group-hover:text-accent" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-line p-4 transition hover:border-line-2">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                <GitHubIcon />
              </span>
              <span>
                <span className="block text-sm text-muted">GitHub</span>
                <span className="font-medium">rahmangamer12</span>
              </span>
              <Arrow className="ml-auto text-faint group-hover:text-accent" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="card p-6 sm:p-8" aria-describedby="form-note">
            <fieldset>
              <legend className="mb-3 text-sm font-medium">What do you need?</legend>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={topic === t}
                    onClick={() => setTopic(t)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      topic === t ? "border-accent bg-accent text-accent-ink" : "border-line text-muted hover:border-line-2 hover:text-ink"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Your name</span>
                <input name="name" required autoComplete="name" className={input} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Email</span>
                <input name="email" type="email" required autoComplete="email" className={input} placeholder="you@company.com" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium">Project details</span>
              <textarea name="message" required rows={5} className={`${input} resize-y`} placeholder="What are you building, and by when?" />
            </label>
            <button type="submit" className="btn btn-primary mt-6 w-full justify-center">
              Send message <Arrow />
            </button>
            <p id="form-note" className="mt-4 text-center text-[13px] text-faint" role="status">
              {sent ? "Your email app should open with the message ready. If it didn't, write to " + profile.email : "Opens your email app with the message filled in."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="no-print relative overflow-hidden border-t border-line pt-14 pb-8">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-semibold tracking-tight">Let&apos;s build something real.</p>
            <a href={`mailto:${profile.email}`} className="mt-1 inline-block text-muted underline-offset-4 hover:text-accent hover:underline">
              {profile.email}
            </a>
          </div>
          <nav aria-label="Social" className="flex flex-wrap items-center gap-2">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-ink">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-ink">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-ink">
              <MailIcon />
            </a>
            <a href={profile.undercraft} target="_blank" rel="noopener noreferrer" className="ml-1 rounded-full border border-line px-4 py-2.5 text-sm text-muted transition hover:border-accent hover:text-ink">
              Undercraft Studio
            </a>
          </nav>
        </div>
        <p aria-hidden className="outline-text mt-12 text-center text-[clamp(3.5rem,15vw,13rem)] leading-[0.8] font-semibold tracking-[-0.05em] select-none">
          Abdul Rehman
        </p>
        <div className="mt-8 flex flex-col items-center justify-between gap-2 text-sm text-faint sm:flex-row">
          <p>© 2026 Abdul Rehman · Karachi, Pakistan</p>
          <p>Built with Next.js, Tailwind CSS and Motion</p>
        </div>
      </div>
    </footer>
  );
}
