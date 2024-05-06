import AboutSection from "@/components/ui/home/about/AboutSection";
import ContactSection from "@/components/ui/home/contactSection/ContactSection";
import HeroSection from "@/components/ui/home/heroSection/HeroSection";
import SkillSection from "@/components/ui/home/skills/SkillSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ContactSection />
    </>
  );
}
