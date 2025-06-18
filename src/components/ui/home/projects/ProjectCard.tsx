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
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
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
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 16,
        },
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          height: 240,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src={project.image}
          alt="project image"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 600px) 100vw, 600px"
          priority
        />
        {/* Overlay with Button */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(1px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.3s ease",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <Button
            component={Link}
            variant="contained"
            href={`/projects/${project._id}`}
          >
            View Details
          </Button>
        </Box>
      </Box>

      {/* Text Content */}
      <CardContent sx={{ p: 3 }}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="h6" fontWeight={600} color="text.primary" noWrap>
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
              bgcolor: "text.primary",
              color: "background.paper",
              borderRadius: "50%",
              width: 34,
              height: 34,
            }}
          >
            <ArrowOutwardIcon fontSize="small" />
          </Box>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
          sx={{ lineHeight: 1.6 }}
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
              sx={{
                bgcolor: "background.default",
                color: "text.secondary",
                fontWeight: 500,
                fontSize: "0.75rem",
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
