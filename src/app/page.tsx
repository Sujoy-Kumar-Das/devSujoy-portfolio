import LoadingComponent from "@/components/shared/loader/Loader";
import AboutSection from "@/components/ui/home/about/AboutSection";
import BlogsSection from "@/components/ui/home/blogSection/BlogsSection";
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
      <SkillSection />
      <ProjectSection />
      <Education />
      <BlogsSection />
      <ContactSection />
    </>
  );
}
