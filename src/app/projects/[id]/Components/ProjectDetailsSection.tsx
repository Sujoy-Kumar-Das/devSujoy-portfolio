"use client";

import {
  Box,
  Chip,
  Grid,
  Link as MuiLink,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import ProjectDataList from "./ProjectDataList";

// Define the types for individual items
type TFeature = {
  _id: string;
  title: string;
};

type TTechnology = {
  _id: string;
  title: string;
};

type TCodeLinks = {
  frontend: string;
  backend: string;
};

// Define the props type
interface ProjectDetailsSectionProps {
  description: string;
  goals: TFeature[];
  implementation: string;
  features: TFeature[];
  challenges: string;
  solutions: string;
  technologies: TTechnology[];
  live: string;
  code: TCodeLinks;
}

export default function ProjectDetailsSection({
  description,
  goals,
  implementation,
  features,
  challenges,
  solutions,
  technologies,
  live,
  code,
}: ProjectDetailsSectionProps) {
  return (
    <Box component="div" mb={6}>
      <Grid container spacing={6}>
        {/* Left Column - About */}
        <Grid item xs={12} lg={7}>
          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
            sx={{
              borderBottom: "1px solid",
              pb: 1,
              mb: 3,
              borderColor: "divider",
            }}
          >
            About This Project
          </Typography>

          <Box
            sx={{
              "& h3": { mt: 4, mb: 1 },
              "& p": { mb: 2 },
              "& ul": { pl: 3 },
            }}
          >
            <Typography component={"p"} variant="body1">
              {description}
            </Typography>

            <ProjectDataList title="Project Goals" data={goals} />

            <Typography variant="h6" fontWeight={600}>
              Technical Implementation
            </Typography>
            <Typography component={"p"} variant="body1">
              {implementation}
            </Typography>

            <ProjectDataList title="Key features" data={features} />

            <Typography variant="h6" fontWeight={600}>
              Challenges & Solutions
            </Typography>
            <Typography component={"p"} variant="body1">
              {challenges}
            </Typography>
            <Typography component={"p"} variant="body1">
              {solutions}
            </Typography>
          </Box>
        </Grid>

        {/* Right Column - Project Info */}
        <Grid item xs={12} lg={5}>
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              position: "sticky",
              top: 48,
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Other Information
            </Typography>

            <Box mb={2}>
              <Typography variant="body2" color="text.secondary">
                Technologies
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                {technologies?.map((tech, index) => (
                  <Chip
                    key={tech._id || index}
                    label={tech.title}
                    size="small"
                    sx={{
                      bgcolor: "background.default",
                      color: "text.primary",
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography variant="body2" color="text.secondary">
                Links
              </Typography>
              <Stack direction="row" spacing={2} mt={1}>
                <MuiLink
                  href={live}
                  component={Link}
                  underline="hover"
                  color="primary"
                  target="_blank"
                >
                  Live Demo
                </MuiLink>
                <MuiLink
                  href={code.frontend}
                  component={Link}
                  underline="hover"
                  color="primary"
                  target="_blank"
                >
                  Frontend Code
                </MuiLink>
                <MuiLink
                  href={code.backend}
                  component={Link}
                  underline="hover"
                  color="primary"
                  target="_blank"
                >
                  Backend Code
                </MuiLink>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
