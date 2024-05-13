import Heading from "@/components/shared/heading/Heading";
import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import SkillGrid from "./SkillGrid";
export default async function SkillSection() {
  const res = await fetch(
    `https://backend-rosy-chi.vercel.app/skills?limit=${18}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: skills } = await res.json();
  return (
    <Box py={16} sx={{ backgroundColor: "background.paper" }}>
      <Container>
        <Heading
          title="Skills"
          subtitle="Fluent in the Languages of Web Development"
        />
        <SkillGrid skills={skills} />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            variant="outlined"
            component={Link}
            href="/skills"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            Show All
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
