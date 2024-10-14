import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function BlogCard({
  blog,
  bgColor,
}: {
  blog: any;
  bgColor: boolean;
}) {
  return (
    <Box
      bgcolor={`${bgColor ? "background.paper" : "background.default"}`}
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      {/* Image Wrapper */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "200px", // Set a fixed height for the image
          overflow: "hidden",
        }}
      >
        <Image
          alt={blog.title}
          src={blog.image}
          fill
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
          className="hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </Box>

      <CardContent sx={{ py: 2, px: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          fontWeight={600}
          color="text.primary"
        >
          {blog.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            height: "60px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {blog?.shortDescription?.length > 100
            ? `${blog?.shortDescription.slice(0, 100)}...`
            : blog.shortDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{ pb: 2, justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          size="small"
          component={Link}
          href={`/blogs/${blog._id}`}
          sx={{ borderRadius: "8px" }}
          endIcon={<FaArrowRight />}
        >
          Read More
        </Button>
      </CardActions>
    </Box>
  );
}
