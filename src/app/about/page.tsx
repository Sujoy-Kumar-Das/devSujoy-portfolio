import AboutMe from "@/components/ui/home/about/AboutMe";
import EducationDetails from "@/components/ui/home/education/EducationDetails";
import SkillProficiency from "@/components/ui/home/skills/SkillProficiency";
import { Box } from "@mui/material";

export default async function AboutPage() {
  const res = await fetch("https://backend-rosy-chi.vercel.app/skills", {
    next: {
      revalidate: 30,
    },
  });
  const { data: skills } = await res.json();
  return (
    <Box py={10}>
      <Box py={5}>
        <AboutMe />
      </Box>
      <Box py={10}>
        <EducationDetails />
      </Box>
      <Box py={5}>{/* <SkillProficiency skills={skills} /> */}</Box>
    </Box>
  );
}
