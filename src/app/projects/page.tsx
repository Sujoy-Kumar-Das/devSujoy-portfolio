import TitleHeading from "@/components/shared/heading/TitleHeading";
import ProjectCard from "@/components/ui/home/projects/ProjectCard";
import projectService from "@/services/actions/projects.service";
import { TProject } from "@/types/Tproject";
import { Box, Container, Grid } from "@mui/material";

export default async function ProjectsPage() {
  const projects = await projectService();
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
