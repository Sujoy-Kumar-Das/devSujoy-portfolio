import AboutSection from "@/components/ui/home/about/AboutSection";
import ContactSection from "@/components/ui/home/contactSection/ContactSection";
import Education from "@/components/ui/home/education/Education";
import HeroSection from "@/components/ui/home/heroSection/HeroSection";
import ProjectSection from "@/components/ui/home/projects/ProjectSection";
import SkillSection from "@/components/ui/home/skills/SkillSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Education />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
