import { TProject } from "@/types/Tproject";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaLink } from "react-icons/fa";

export default function ProjectCard({ project }: { project: TProject }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
      className=" group overflow-hidden"
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "300px",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <Image
          src={project.image}
          alt=""
          layout="fill"
          objectFit="cover"
          style={{
            position: "absolute",
          }}
        />
      </Box>
      <Box
        className=" absolute  inset-0 flex justify-center items-center translate-y-[500px] group-hover:translate-y-0 duration-700 transition-transform ease-in-out"
        sx={{
          backgroundColor: "rgba(102, 111, 115, 0.8)",
          borderRadius: "10px",
        }}
      >
        <Box>
          <Typography
            textAlign={"center"}
            variant="h5"
            color={"white"}
            fontWeight={"bold"}
            mb={2}
          >
            {project.title}
          </Typography>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Stack alignItems={"center"} spacing={3} direction={"row"}>
              <Button
                sx={{ fontSize: 20 }}
                component={"a"}
                href={project.live}
                target="_blank"
              >
                <FaEye />
              </Button>
              <Button
                sx={{ fontSize: 20 }}
                component={Link}
                href={`/projects/${project._id}`}
              >
                <FaLink />
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
