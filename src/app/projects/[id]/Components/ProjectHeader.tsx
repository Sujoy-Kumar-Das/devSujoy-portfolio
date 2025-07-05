"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";

type TTechnology = {
  id: string;
  title: string;
};

interface ProjectHeaderProps {
  title: string;
  shortDescription: string;
  technologies: TTechnology[];
  liveLink: string;
  githubLink: string;
}

export default function ProjectHeader({
  title,
  shortDescription,
  technologies,
  liveLink,
  githubLink,
}: ProjectHeaderProps) {
  return (
    <Box
      component="header"
      sx={(theme) => ({
        background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
        py: { xs: 5, md: 8 },
        color: "primary.contrastText",
      })}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left content */}
          <Box width={{ xs: "100%", md: "70%" }}>
            <Typography
              color={"primary.contrastText"}
              variant="h3"
              fontWeight="bold"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {shortDescription}
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1} mt={3}>
              {technologies?.map((tech) => (
                <Chip
                  key={tech.id}
                  label={tech.title}
                  variant="outlined"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Buttons */}
          <Box mt={{ xs: 6, md: 0 }}>
            <Stack direction="row" spacing={2}>
              <Button
                href={liveLink}
                variant="contained"
                sx={{
                  backgroundColor: "primary.contrastText",
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "background.default",
                  },
                }}
                startIcon={<RemoveRedEyeIcon />}
              >
                Live Demo
              </Button>
              <Button
                href={githubLink}
                target="_blank"
                variant="outlined"
                sx={{
                  borderColor: "primary.contrastText",
                  color: "primary.contrastText",
                  "&:hover": {
                    borderColor: "primary.contrastText",
                  },
                }}
                startIcon={<GitHubIcon />}
              >
                View Code
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
