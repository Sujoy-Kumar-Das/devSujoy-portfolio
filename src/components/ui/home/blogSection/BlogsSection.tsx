import Heading from "@/components/shared/heading/Heading";
import blogService from "@/services/actions/blog.service";
import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import BlogList from "./BlogList";

export default async function BlogsSection() {
  const blogs = await blogService(3);

  return (
    <Box
      py={10}
      sx={{
        backgroundColor: "background.paper",
      }}
      id="blogs"
    >
      <Container>
        <Heading title="Blogs" subtitle="Explore my coding journal" />

        {/* Display all blogs in a grid with improved spacing */}

        <BlogList blogs={blogs} />

        {blogs.length > 3 && (
          <Box
            display="flex"
            justifyContent="center"
            mt={5}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            <Button
              component={Link}
              href="/blogs"
              variant="contained"
              color="primary"
              sx={{
                padding: "10px 20px",
                borderRadius: "20px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              Show All
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
