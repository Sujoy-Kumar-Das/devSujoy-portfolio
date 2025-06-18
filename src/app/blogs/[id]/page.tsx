import myImage from "@/assets/me.jpg";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Author from "./Components/Author";
import BlogTagList from "./Components/BlogTagList";

const author = {
  name: "Sujoy Kumar Das",
  createdAt: new Date().toLocaleDateString(),
  image: myImage,
};

export default async function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const res = await fetch(`https://backend-rosy-chi.vercel.app/blogs/${id}`, {
    next: {
      revalidate: 30,
    },
  });

  const { data: blog } = await res.json();
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Article */}
      <Box bgcolor="#fff" borderRadius={3} boxShadow={3} overflow="hidden">
        {/* Image */}
        <Box height={384} position="relative">
          <Image
            src={blog.image}
            alt="Featured"
            layout="fill"
            objectFit="contain"
          />
        </Box>

        {/* Content */}
        <Box p={4}>
          {/* Tags */}
          <BlogTagList tags={blog?.tags || ["React", "Next.js"]} />

          {/* Title */}
          <Typography variant="h2" gutterBottom>
            {blog?.title}
          </Typography>

          {/* Author */}
          <Author author={author} />

          {/* Paragraphs */}

          <Box>{blog.description}</Box>
        </Box>
      </Box>
    </Container>
  );
}
