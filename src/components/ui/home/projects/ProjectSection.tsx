import Heading from "@/components/shared/heading/Heading";
import { TProject } from "@/types/Tproject";
import { Box, Button, Container, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default async function ProjectSection() {
  const res = await fetch("https://backend-rosy-chi.vercel.app/projects", {
    next: {
      revalidate: 30,
    },
  });
  const { data: projects } = await res.json();

  return (
    <Box py={10}>
      <Heading
        title="Projects"
        subtitle="Explore My Web Development Portfolio and Projects"
      />

      <Container>
        <Grid container spacing={5}>
          {projects.map((project: TProject) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </Grid>
        <Box display={"flex"} justifyContent={"center"} mt={5}>
          <Button>Show All</Button>
        </Box>
      </Container>
    </Box>
  );
}
