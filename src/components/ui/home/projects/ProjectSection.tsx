import Heading from "@/components/shared/heading/Heading";
import { Box, Button, Container, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default async function ProjectSection() {
  const res = await fetch("http://localhost:5000/projects");
  const { data: projects } = await res.json();

  return (
    <Box py={10}>
      <Heading
        title="Projects"
        subtitle="Explore My Web Development Portfolio and Projects"
      />

      <Container>
        <Grid container spacing={3}>
          {projects.map((project) => (
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
