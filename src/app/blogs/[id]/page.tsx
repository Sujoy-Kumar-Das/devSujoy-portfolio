import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default async function BlogDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const res = await fetch(
    `https://backend-rosy-chi.vercel.app/blogs/${id}?limit=9`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: blog } = await res.json();

  return (
    <Box py={10} bgcolor={"background.default"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { xs: "90%", md: "50%" },
          marginX: "auto",
          backgroundColor: "background.paper",
          borderRadius: "10px",
        }}
      >
        <Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "300px",
              overflow: "hidden",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <Image
              src={blog.image}
              alt=""
              layout="fill"
              objectFit="cover"
              style={{
                position: "absolute",
              }}
            />
          </Box>
          <Box px={2} py={3}>
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
                {blog.shortDescription}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
