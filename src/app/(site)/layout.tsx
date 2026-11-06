import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Contact";
import { ScrollProgress } from "@/components/interactive";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only z-[80] rounded-full bg-accent px-4 py-2 text-accent-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
