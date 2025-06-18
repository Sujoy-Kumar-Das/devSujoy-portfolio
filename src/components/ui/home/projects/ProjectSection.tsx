import Heading from "@/components/shared/heading/Heading";
import projectService from "@/services/actions/projects.service";
import { Container } from "@mui/material";
import ProjectList from "./ProjectList";

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
      />

      {/* Projects Grid */}
      <ProjectList projects={projects} />
    </Container>
  );
}
