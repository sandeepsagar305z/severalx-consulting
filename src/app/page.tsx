import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SolutionsSection />
      <PartnersSection />
      <ResourcesSection />
      <AboutSection />
      <InsightsSection />
      <ContactSection />
    </div>
  );
}
