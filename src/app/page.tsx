import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ConsultingVerticalsSection } from "@/components/sections/ConsultingVerticalsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { ContactSection } from "@/components/sections/ContactSection";

/**
 * Main homepage component that renders all sections of the consulting website
 * Sections are arranged in a logical flow: hero, solutions, consulting verticals, insights, resources, about, contact
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SolutionsSection />
      <ConsultingVerticalsSection />
      <InsightsSection />
      <ResourcesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
