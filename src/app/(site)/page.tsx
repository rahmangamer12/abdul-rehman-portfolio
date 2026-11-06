import { Hero } from "@/components/Hero";
import { CtaBand, FeaturedWork, Highlights, ServicesPreview, StackMarquee } from "@/components/Sections";
import { caseStudies, moreProjects } from "@/lib/data";
import { AgentsVsWorkers } from "@/components/ai";

export default function Home() {
  const liveCount = caseStudies.length + moreProjects.length;
  return (
    <>
      <Hero liveCount={liveCount} />
      <StackMarquee />
      <Highlights liveCount={liveCount} />
      <AgentsVsWorkers />
      <FeaturedWork />
      <ServicesPreview />
      <div className="pt-24 sm:pt-32">
        <CtaBand />
      </div>
    </>
  );
}
