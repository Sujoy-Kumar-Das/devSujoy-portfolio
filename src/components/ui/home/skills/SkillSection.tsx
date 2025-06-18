import Heading from "@/components/shared/heading/Heading";
import skillsService from "@/services/actions/skills.server.action";
import { Box, Container } from "@mui/material";
import SkillsList from "./SkillsList";
export default async function SkillSection() {
  const skills = await skillsService();

  return (
    <Box id="skills" py={16} sx={{ backgroundColor: "background.paper" }}>
      <Container>
        <Heading
          title="Skills"
          subtitle="Fluent in the Languages of Web Development"
        />

        <SkillsList skills={skills} />
      </Container>
    </Box>
  );
}
