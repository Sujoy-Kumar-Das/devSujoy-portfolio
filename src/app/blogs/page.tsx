import TitleHeading from "@/components/shared/heading/TitleHeading";
import MyPagination from "@/components/shared/pagination/MyPagination";
import BlogCard from "@/components/ui/home/blogSection/BlogCard";
import { Box, Container, Grid } from "@mui/material";

export default async function BlogPage() {
  const res = await fetch(`https://backend-rosy-chi.vercel.app/blogs`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: blogs } = await res.json();
  return (
    <Box py={10} bgcolor={"background.default"}>
      <Container>
        <TitleHeading title="Blogs" />

        <Grid container spacing={3}>
          {blogs.map((blog: any) => (
            <BlogCard blog={blog} key={blog._id} bgColor={true} />
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
          <MyPagination />
        </Box>
      </Container>
    </Box>
  );
}
