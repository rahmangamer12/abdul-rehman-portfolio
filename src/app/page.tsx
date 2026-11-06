import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About, CvBlock, Highlights, MoreProjects, Process, Services, Stack, StackMarquee, Work } from "@/components/Sections";
import { Contact, Footer } from "@/components/Contact";
import { ScrollProgress } from "@/components/interactive";
import { caseStudies, moreProjects } from "@/lib/data";

export default function Home() {
  const liveCount = caseStudies.length + moreProjects.length;
  return (
    <>
      <a href="#main" className="sr-only z-[80] rounded-full bg-accent px-4 py-2 text-accent-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero liveCount={liveCount} />
        <StackMarquee />
        <Highlights liveCount={liveCount} />
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
