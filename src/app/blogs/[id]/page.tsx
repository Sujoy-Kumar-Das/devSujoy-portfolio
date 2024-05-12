import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default async function BlogDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const res = await fetch(`http://localhost:5000/blogs/${id}?limit=9`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: blog } = await res.json();

  return (
    <Box py={10} bgcolor={"background.paper"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { xs: "90%", md: "50%" },
          marginX: "auto",
        }}
      >
        <Box>
          <Image alt="" src={blog.image} height={300} width={900} />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            py={2}
          >
            <Typography
              fontSize={30}
              fontWeight={"bold"}
              color={"primary.main"}
            >
              <FaRegHeart />
            </Typography>
            <Box>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Typography
                  fontSize={20}
                  fontWeight={"bold"}
                  color={"primary.main"}
                >
                  <FaHeart />
                </Typography>
                <Typography fontSize={30} color={"primary.main"}>
                  {blog.likes}
                </Typography>
              </Stack>
              <Typography fontSize={20} color={"primary.main"}>
                {blog.date}
              </Typography>
            </Box>
          </Stack>

          <Box height={2} width={"100%"} bgcolor={"primary.main"}></Box>

          <Box>
            <Typography variant="h5" fontWeight={"bold"} py={2}>
              {blog.title}
            </Typography>
            <Typography fontSize={"body2"} fontWeight={"light"}>
              {blog.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
