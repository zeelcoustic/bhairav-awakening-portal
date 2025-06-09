
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import MeditationJourney from "@/components/MeditationJourney";
import PersonasSection from "@/components/PersonasSection";
import BonusSection from "@/components/BonusSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <MeditationJourney />
      <PersonasSection />
      <BonusSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
