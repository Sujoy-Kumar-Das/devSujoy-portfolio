import Heading from "@/components/shared/heading/Heading";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import ProjectSlider from "./ProjectSlider";

export default async function ProjectSection() {
  const res = await fetch("https://backend-rosy-chi.vercel.app/projects", {
    next: {
      revalidate: 30,
    },
  });
  const { data: projects } = await res.json();

  return (
    <Box py={16} bgcolor={"background.default"} id="projects">
      <Heading
        title="Projects"
        subtitle="Explore My Web Development Portfolio and Projects"
      />

      <Box width={{ xs: "90%", md: "70%" }} marginX={"auto"}>
        <ProjectSlider projects={projects} />
        <Box
          display={"flex"}
          justifyContent={"center"}
          mt={5}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          <Button component={Link} href="/projects" variant="outlined">
            Show All Projects
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
