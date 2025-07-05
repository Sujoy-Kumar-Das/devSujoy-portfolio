"use client";
import { TProject } from "@/types/Tproject";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
  keyframes,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// Animation keyframes
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function ProjectCardMUI({ project }: { project: TProject }) {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: 8,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        position: "relative",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: (theme) =>
            `0 20px 40px ${
              theme.palette.mode === "dark"
                ? "rgba(0,0,0,0.3)"
                : "rgba(0,0,0,0.15)"
            }`,
          "& .project-image": {
            transform: "scale(1.05)",
          },
          "& .tech-chip": {
            transform: "translateY(-3px)",
            boxShadow: (theme) =>
              `0 4px 8px ${
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.1)"
              }`,
          },
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #3f51b5, #2196f3, #00bcd4)",
          backgroundSize: "200% 200%",
          animation: `${gradientAnimation} 8s ease infinite`,
        },
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          height: 240,
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            "& .view-overlay": {
              opacity: 1,
            },
          },
        }}
      >
        <Image
          src={project.image}
          alt="project image"
          fill
          className="project-image"
          style={{
            objectFit: "fill",
            transition: "transform 0.5s ease",
          }}
          sizes="(max-width: 600px) 100vw, 600px"
          priority
        />

        {/* Overlay with Button */}
        <Box
          className="view-overlay"
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.3s ease",
            p: 3,
          }}
        >
          <Button
            component={Link}
            variant="contained"
            href={`/projects/${project._id}`}
            sx={{
              minWidth: 120,
              animation: `${floatAnimation} 3s ease infinite`,
              background: "linear-gradient(45deg, #3f51b5, #2196f3)",
              "&:hover": {
                background: "linear-gradient(45deg, #2196f3, #3f51b5)",
              },
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      {/* Text Content */}
      <CardContent
        sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}
      >
        <Stack direction="row" alignItems="center" gap={1} mb={1}>
          <Typography
            variant="h6"
            fontWeight={700}
            color="text.primary"
            sx={{
              background: "linear-gradient(90deg, #3f51b5, #2196f3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline",
            }}
          >
            {project.title}
          </Typography>

          <Box
            component={Link}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              borderRadius: "50%",
              width: 34,
              height: 34,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "rotate(45deg) scale(1.1)",
              },
            }}
          >
            <ArrowOutwardIcon fontSize="small" />
          </Box>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
          sx={{
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {project.description ||
            "A customizable portfolio template for creatives and developers."}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {(
            project?.technologies?.slice(0, 3) || [
              "HTML5",
              "CSS3",
              "JavaScript",
            ]
          ).map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              className="tech-chip"
              sx={{
                bgcolor: "background.default",
                color: "text.secondary",
                fontWeight: 600,
                fontSize: "0.7rem",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
