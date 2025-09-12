import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { PartneredCompaniesSection } from "@/components/sections/PartneredCompaniesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <PartneredCompaniesSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />
    </div>
  );
}
