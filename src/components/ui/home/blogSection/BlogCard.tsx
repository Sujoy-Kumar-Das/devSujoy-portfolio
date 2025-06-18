import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 16,
        },
      }}
    >
      {/* Image Section */}
      <Box sx={{ position: "relative", height: 200, overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={blog.image}
          alt="Blog Post 1"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            bgcolor: "indigo.900",
            opacity: 0.9,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            bgcolor: "primary.main",
            color: "text.primary",
            px: 1.5,
            py: 0.5,
            fontSize: "0.875rem",
          }}
        >
          {blog?.category || "Development"}
        </Box>
      </Box>

      {/* Content */}
      <CardContent>
        <Typography mb={1} color="text.secondary">
          <span>June 15, 2023</span>
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Link
            href={`/blogs/${blog._id}`}
            underline="none"
            color="text.primary"
            fontWeight={"bold"}
          >
            {blog.title}
          </Link>
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          {blog.description.length > 200
            ? `${blog.description.slice(0, 200)}...`
            : blog.description}
        </Typography>

        <Link
          href={`/blogs/${blog._id}`}
          underline="none"
          color="primary.primary"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            fontWeight: 500,
          }}
        >
          Read More <ArrowForwardIcon fontSize="small" sx={{ ml: 0.5 }} />
        </Link>
      </CardContent>
    </Card>
  );
}
