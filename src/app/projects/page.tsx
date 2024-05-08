import ProjectCard from "@/components/ui/home/projects/ProjectCard";
import { TProject } from "@/types/Tproject";
import { Box, Container, Grid } from "@mui/material";

export default async function ProjectsPage() {
  const res = await fetch("http://localhost:5000/projects");
  const { data: projects } = await res.json();
  return (
    <Box bgcolor={"background.main"} py={10}>
      <Container>
        <Grid container spacing={3}>
          {projects.map((project: TProject) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
