import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Demo } from "@/components/sections/demo";
import { YeetProductPreview } from "@/components/product-preview/yeet-product-preview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink font-body selection:bg-coral selection:text-cream overflow-x-hidden">
      <Header />
      <Hero />
      <Demo />
      <YeetProductPreview />
      <HowItWorks />
      <Cta />
      <Footer />
    </div>
  );
}
