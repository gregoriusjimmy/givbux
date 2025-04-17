import BenefitsSection from "./components/BenefitsSection";
import ChartPreviewSection from "./components/ChartPreviewSection";
import ClaimBonusSection from "./components/ClaimBonusSection";
import CTAButtonsSection from "./components/CTAButtonsSection";
import CTADownloadSection from "./components/CTADownloadSection";
import CTAIconsSection from "./components/CTAIconsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import IntroPopup from "./components/IntroPopup";
import JoinWASection from "./components/JoinWASection";
import News from "./components/News";
import Partners from "./components/Partners";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <IntroPopup />
      <HeroSection />
      <Partners />
      <BenefitsSection />
      <ClaimBonusSection />
      <HowItWorksSection />
      <CTAButtonsSection />
      <JoinWASection />
      <ChartPreviewSection />
      <TestimonialsSection />
      <CTAIconsSection />
      <CTADownloadSection />
      <News />
      <Footer />
    </div>
  );
}
