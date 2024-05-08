import ProjectDetailSlider from "@/components/ui/projectDetailSlider/ProjectDetailSlider";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`http://localhost:5000/project/${params.id}`);
  const { data: projectDetail } = await res.json();
  return (
    <Box py={10}>
      <Container>
        <Box mb={5}>
          <ProjectDetailSlider data={projectDetail.images} />
          <Stack direction={"row"} spacing={3} mt={5}>
            <Typography
              color={"body1"}
              fontWeight={"bold"}
              fontSize={{ xs: 16, md: 24 }}
            >
              Source Code{" "}
            </Typography>
            <Typography
              component={"a"}
              href={projectDetail.code.frontend}
              target="_blank"
              color={"primary.main"}
              fontWeight={"bold"}
              fontSize={{ xs: 16, md: 24 }}
            >
              {" "}
              Client{" "}
            </Typography>
            <Typography
              component={"a"}
              href={projectDetail.code.backend}
              target="_blank"
              color={"primary.main"}
              fontWeight={"bold"}
              fontSize={{ xs: 16, md: 24 }}
            >
              {" "}
              Server{" "}
            </Typography>
            <Typography
              component={"a"}
              href={projectDetail.live}
              target="_blank"
              color={"primary.main"}
              fontWeight={"bold"}
              fontSize={{ xs: 16, md: 24 }}
            >
              {" "}
              Live{" "}
            </Typography>
          </Stack>
        </Box>
        {/* description */}
        <Box>
          <Typography
            component={"p"}
            color={"body1"}
            fontWeight={"bold"}
            fontSize={{ xs: 16, md: 24 }}
            mb={2}
          >
            Description
          </Typography>
          <Typography component={"p"} color={"body1"} variant="body1">
            {projectDetail.description}
          </Typography>
        </Box>

        {/* features */}
        <Box sx={{ my: 5 }}>
          <Typography
            component={"p"}
            color={"body1"}
            fontWeight={"bold"}
            fontSize={{ xs: 16, md: 24 }}
            mb={2}
          >
            Features
          </Typography>
          <List component={"ul"}>
            {projectDetail.features.map((item) => (
              <ListItem key={item.id} sx={{ px: 0 }}>
                <Typography
                  sx={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    marginRight: 2,
                  }}
                ></Typography>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* technology */}
        <Box sx={{ my: 5 }}>
          <Typography
            component={"p"}
            color={"body1"}
            fontWeight={"bold"}
            fontSize={{ xs: 16, md: 24 }}
            mb={2}
          >
            Technology
          </Typography>
          <List component={"ul"}>
            {projectDetail.technology.map((item) => (
              <ListItem key={item.id} sx={{ px: 0 }}>
                <Typography
                  sx={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    marginRight: 2,
                  }}
                ></Typography>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}
