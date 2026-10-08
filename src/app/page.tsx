import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { GiftingSection } from "@/components/GiftingSection";
import { FeaturesTrust } from "@/components/FeaturesTrust";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { CartProvider } from "@/context/CartContext";

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-[#F9F5EC] text-[#1F1917]">
        <Navbar />
        <Hero />
        <FeaturesTrust />
        <MenuSection />
        <ExperienceSection />
        <GiftingSection />
        <Footer />
        <WhatsAppWidget />
      </main>
    </CartProvider>
  );
}
