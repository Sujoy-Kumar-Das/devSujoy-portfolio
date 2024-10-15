import { TProject } from "@/types/Tproject";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaLink } from "react-icons/fa";

export default function ProjectCard({ project }: { project: TProject }) {
  return (
    <Box
      sx={{
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        backgroundColor: "#fff",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {/* Image Wrapper */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "200px",
          overflow: "hidden",
        }}
      >
        <Image
          alt={project.title}
          src={project.image}
          fill
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
          className="hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </Box>

      {/* Project Info */}
      <Box sx={{ padding: "20px" }}>
        {/* Project Title */}
        <Typography
          variant="h6"
          fontWeight="700"
          sx={{
            marginBottom: "10px",
            color: "#222",
            fontSize: "1.25rem",
          }}
        >
          {project.title}
        </Typography>

        {/* Buttons */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: "14px",
              padding: "8px 16px",
              borderRadius: "30px",
            }}
            href={project.live}
            target="_blank"
            startIcon={<FaEye />}
          >
            Live Demo
          </Button>

          <Button
            variant="outlined"
            color="primary"
            sx={{
              fontSize: "14px",
              padding: "8px 16px",
              borderRadius: "30px",
            }}
            component={Link}
            href={`/projects/${project._id}`}
            startIcon={<FaLink />}
          >
            Details
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
