import { Nav } from "@/components/Nav";
import { HomeHero } from "@/components/home/HomeHero";
import { PalaceSection } from "@/components/home/PalaceSection";
import { ExperienceMosaic } from "@/components/home/ExperienceMosaic";
import { WellnessCore } from "@/components/home/WellnessCore";

/** Home page — content for every section is configured in src/lib/home-content.ts */
export default function HomePage() {
  return (
    <>
      <Nav hideAtTop />
      <HomeHero />
      <PalaceSection />
      <ExperienceMosaic />
      <WellnessCore />
    </>
  );
}
