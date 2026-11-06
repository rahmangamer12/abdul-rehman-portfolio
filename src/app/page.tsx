import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About, CvBlock, MoreProjects, Process, Services, Stack, StackMarquee, Work } from "@/components/Sections";
import { Contact, Footer } from "@/components/Contact";
import { caseStudies, moreProjects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only z-[60] rounded-full bg-accent px-4 py-2 text-accent-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero liveCount={caseStudies.length + moreProjects.length} />
        <StackMarquee />
        <Work />
        <MoreProjects />
        <Services />
        <Stack />
        <Process />
        <About />
        <CvBlock />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
