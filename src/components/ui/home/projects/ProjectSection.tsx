import Heading from "@/components/shared/heading/Heading";
import projectService from "@/services/actions/projects.service";
import { TProject } from "@/types/Tproject";
import { Box, Button, Container, Grid } from "@mui/material";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default async function ProjectSection() {
  const projects = await projectService(6);
  return (
    <Container
      sx={{
        backgroundColor: "background.default",
        py: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="projects"
    >
      {/* Heading Section */}
      <Heading
        title="Projects"
        subtitle="Explore My Web Development Portfolio and Projects"
        sx={{
          marginBottom: 8,
          textAlign: "center",
        }}
      />

      {/* Projects Grid */}
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project: TProject) => (
          <Grid key={project._id} item xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>

      {/* Show All Projects Button */}
      {projects.length > 6 && (
        <Box mt={6} display="flex" justifyContent="center">
          <Button
            component={Link}
            href="/projects"
            variant="outlined"
            size="large"
            sx={{
              borderRadius: "30px",
              padding: "10px 20px",
            }}
          >
            Show All Projects
          </Button>
        </Box>
      )}
    </Container>
  );
}
