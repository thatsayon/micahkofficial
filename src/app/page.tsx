import { HeroBottom, HeroSection, InteractiveTool } from "@/components/features/home";
import AcRejuvenationSection from "@/components/features/home/AcrejuvenationSection/AcrejuvenationSection";
import HvacEstimateSection from "@/components/features/home/HvacEstimateSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroBottom />
      <InteractiveTool />
      <HvacEstimateSection/>
      <AcRejuvenationSection/>
    </main>
  );
}
