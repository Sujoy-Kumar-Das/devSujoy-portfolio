import Heading from "@/components/shared/heading/Heading";
import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import BlogSlider from "./BlogSlider";

export default async function BlogsSection() {
  const res = await fetch(`https://backend-rosy-chi.vercel.app/blogs?limit=6`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: blogs } = await res.json();

  return (
    <Box py={10} sx={{ backgroundColor: "background.paper" }}>
      <Container>
        <Heading title="Blogs" subtitle="Explore my coding journal" />

        <BlogSlider blogs={blogs} />
        <Box
          display={"flex"}
          justifyContent={"center"}
          mt={5}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          <Button component={Link} href="/blogs" variant="outlined">
            Show All
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
