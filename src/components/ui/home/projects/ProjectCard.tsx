import { TProject } from "@/types/Tproject";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaLink } from "react-icons/fa";

export default function ProjectCard({ project }: { project: TProject }) {
  return (
    <Grid item xs={12} md={4} sx={{ overflow: "hidden" }}>
      <Box sx={{ position: "relative" }} className=" group">
        <Image
          src={project.image}
          alt=""
          width={500}
          height={300}
          layout="responsive"
          style={{ borderRadius: "10px", position: "relative" }}
        />
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
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
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
    </Grid>
  );
}
