import Heading from "@/components/shared/heading/Heading";
import AboutMe from "@/components/ui/home/about/AboutMe";
import EducationDetails from "@/components/ui/home/education/EducationDetails";
import SkillGrid from "@/components/ui/home/skills/SkillGrid";

import { Box, Container } from "@mui/material";

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
      <Box py={5} component={Container}>
        <Heading
          title="Skills"
          subtitle="Fluent in the Languages of Web Development"
        />
        <SkillGrid skills={skills} />
      </Box>
    </Box>
  );
}
