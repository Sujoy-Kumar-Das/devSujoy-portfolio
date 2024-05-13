import TitleHeading from "@/components/shared/heading/TitleHeading";
import ProjectCard from "@/components/ui/home/projects/ProjectCard";
import { TProject } from "@/types/Tproject";
import { Box, Container, Grid } from "@mui/material";

export default async function ProjectsPage() {
  const res = await fetch("https://backend-rosy-chi.vercel.app/projects", {
    next: {
      revalidate: 30,
    },
  });
  const { data: projects } = await res.json();
  return (
    <Box bgcolor={"background.main"} py={10}>
      <Container>
        <TitleHeading title="Projects" />
        <Grid container spacing={3}>
          {projects.map((project: TProject) => (
            <Grid item xs={12} md={4} key={project._id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
