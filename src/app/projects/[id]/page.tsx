import projectDetailsService from "@/services/actions/projectDetails.service";
import { Box, Container } from "@mui/material";
import ProjectDetailsSection from "./Components/ProjectDetailsSection";
import ProjectHeader from "./Components/ProjectHeader";
import ProjectImageGallery from "./Components/ProjectImageGallery";

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const projectDetail = await projectDetailsService(params.id);

  return (
    <Box pb={3}>
      <ProjectHeader
        title={projectDetail.title}
        liveLink={projectDetail.live}
        githubLink={projectDetail?.code.frontend}
        shortDescription={projectDetail?.shortDescription || "N/A"}
        technologies={projectDetail.technology?.slice(0, 5)}
      />

      <Container>
        <ProjectImageGallery images={projectDetail.images.slice(0, 4)} />

        <ProjectDetailsSection
          description={projectDetail?.description}
          goals={projectDetail?.goals || []}
          implementation={projectDetail?.implementation}
          features={projectDetail?.features || []}
          challenges={projectDetail.challenges || ""}
          solutions={projectDetail.solutions || ""}
          technologies={projectDetail.technology}
          live={projectDetail.live}
          code={projectDetail.code}
        />
      </Container>
    </Box>
  );
}
