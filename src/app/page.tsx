import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Demo } from "@/components/sections/demo";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { YeetProductPreview } from "@/components/product-preview/yeet-product-preview";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink font-body selection:bg-coral selection:text-cream">
      <Header />
      <Hero />
      <Demo />
      <YeetProductPreview />
      <HowItWorks />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
