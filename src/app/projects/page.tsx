import ProjectCard from "@/components/ui/home/projects/ProjectCard";
import { TProject } from "@/types/Tproject";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

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
        <Stack direction={"row"} alignItems={"center"} spacing={1} mb={5}>
          <Typography fontSize={{ xs: 16, md: 24 }} fontWeight={"bold"}>
            Projects
          </Typography>
          <Box height={"3px"} width={"10%"} bgcolor={"primary.main"}></Box>
        </Stack>
        <Grid container spacing={3}>
          {projects.map((project: TProject) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
