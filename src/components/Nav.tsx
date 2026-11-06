"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ui";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto mt-3 flex h-14 max-w-[1200px] items-center justify-between rounded-full px-3 transition-[background-color,border-color,box-shadow] duration-300 sm:px-4 ${
          scrolled || open
            ? "mx-3 border border-line bg-[color-mix(in_oklab,var(--bg)_78%,transparent)] shadow-[var(--shadow)] backdrop-blur-xl sm:mx-auto"
            : "border border-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 pl-1" aria-label="Abdul Rehman, home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-[13px] font-semibold tracking-tight text-accent-ink">
            AR
          </span>
          <span className="hidden text-[15px] font-medium tracking-tight sm:inline">Abdul Rehman</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm transition hover:bg-card-2 hover:text-ink ${
                isActive(l.href) ? "bg-card-2 text-ink" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-primary hidden !h-10 !px-4 !text-sm sm:inline-flex">
            Hire me
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="mx-3 mt-2 rounded-3xl border border-line bg-[color-mix(in_oklab,var(--bg)_92%,transparent)] p-3 shadow-[var(--shadow)] backdrop-blur-xl md:hidden"
        >
          {[...links, { href: "/contact", label: "Hire me" }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`block rounded-2xl px-4 py-3 text-base text-ink hover:bg-card-2 ${isActive(l.href) ? "bg-card-2" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
