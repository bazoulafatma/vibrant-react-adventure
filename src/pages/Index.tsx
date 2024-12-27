import { NavigationBar } from "@/components/NavigationBar";
import { HeroSection } from "@/components/HeroSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <main className="min-h-screen bg-neutral-light">
      <NavigationBar />
      <HeroSection />
      <ProductShowcase />
      <FeatureGrid />
      <Newsletter />
    </main>
  );
};

export default Index;