import projectDetailsService from "@/services/actions/projectDetails.service";
import {
  Box,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

type TFeature = {
  id: string;
  title: string;
};
export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const projectDetail = await projectDetailsService(params.id);

  return (
    <Box py={3}>
      <Container>
        <Box mb={6}>
          {/* Project Slider */}
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "80%" },
              margin: "auto",
              height: 450,
              borderRadius: 2,
              overflow: "hidden",
              backgroundColor: "background.paper",
            }}
          >
            <Image
              alt={`Project Image`}
              src={projectDetail.image}
              fill
              style={{ objectFit: "fill", borderRadius: "12px" }}
            />
          </Box>
          {/* Source Code Links */}
          <Stack
            direction={"row"}
            spacing={2}
            mt={4}
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
          >
            <Typography fontWeight="bold" fontSize={{ xs: 16, md: 20 }}>
              Source Code:
            </Typography>

            <Link
              href={projectDetail?.code?.frontend}
              target="_blank"
              underline="none"
              color="primary"
              sx={{ fontSize: { xs: 14, md: 18 }, fontWeight: "500" }}
            >
              Client
            </Link>
            <Link
              href={projectDetail?.code?.backend}
              target="_blank"
              underline="none"
              color="primary"
              sx={{ fontSize: { xs: 14, md: 18 }, fontWeight: "500" }}
            >
              Server
            </Link>
            <Link
              href={projectDetail?.live}
              target="_blank"
              underline="none"
              color="primary"
              sx={{ fontSize: { xs: 14, md: 18 }, fontWeight: "500" }}
            >
              Live
            </Link>
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Description Section */}
        <Box mb={4}>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={2}
            fontSize={{ xs: 18, md: 22 }}
          >
            Description
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            fontSize={{ xs: 14, md: 16 }}
          >
            {projectDetail?.description}
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Features Section */}
        <Box mb={4}>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={2}
            fontSize={{ xs: 18, md: 22 }}
          >
            Features
          </Typography>
          <List>
            {projectDetail?.features?.map((item: TFeature) => (
              <ListItem key={item.id} sx={{ pl: 0 }}>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    bgcolor: "primary.main",
                    borderRadius: "50%",
                    mr: 2,
                  }}
                />
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontSize: { xs: 14, md: 16 },
                    color: "text.secondary",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Technology Section */}
        <Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={2}
            fontSize={{ xs: 18, md: 22 }}
          >
            Technology
          </Typography>
          <List>
            {projectDetail?.technology?.map((item: TFeature) => (
              <ListItem key={item.id} sx={{ pl: 0 }}>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    bgcolor: "primary.main",
                    borderRadius: "50%",
                    mr: 2,
                  }}
                />
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontSize: { xs: 14, md: 16 },
                    color: "text.secondary",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}
