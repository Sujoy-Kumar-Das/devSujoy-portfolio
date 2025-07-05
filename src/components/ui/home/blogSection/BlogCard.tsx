"use client";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Link as MuiLink,
  Typography,
  keyframes,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// Animation keyframes
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: (theme) =>
            `0 20px 40px ${
              theme.palette.mode === "dark"
                ? "rgba(0,0,0,0.3)"
                : "rgba(0,0,0,0.15)"
            }`,
          "& .blog-image": {
            transform: "scale(1.05)",
          },
        },
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          height: 200,
          overflow: "hidden",
          "&:hover": {
            "& .category-chip": {
              transform: "translateY(-5px)",
              boxShadow: 4,
            },
          },
        }}
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="blog-image"
          style={{
            objectFit: "fill",
            transition: "transform 0.5s ease",
          }}
          sizes="(max-width: 600px) 100vw, 600px"
        />

        {/* Category Chip */}
        <Chip
          label={blog?.category || "Development"}
          className="category-chip"
          sx={{
            position: "absolute",
            bottom: 16,
            left: 16,
            bgcolor: "primary.main",
            color: "primary.contrastText",
            fontWeight: 600,
            fontSize: "0.75rem",
            px: 1,
            transition: "all 0.3s ease",
            boxShadow: 2,
          }}
        />
      </Box>

      {/* Content */}
      <CardContent
        sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          mb={1}
          sx={{
            display: "flex",
            alignItems: "center",
            "&::before": {
              content: '""',
              display: "inline-block",
              width: 12,
              height: 2,
              bgcolor: "primary.main",
              mr: 1,
            },
          }}
        >
          {new Date(blog.createdAt || "June 15, 2023").toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
        </Typography>

        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            mb: 1.5,
            lineHeight: 1.3,
            "& a": {
              textDecoration: "none",
              color: "text.primary",
              backgroundImage: "linear-gradient(currentColor, currentColor)",
              backgroundPosition: "0% 100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "0% 2px",
              transition: "background-size 0.3s ease",
              "&:hover": {
                backgroundSize: "100% 2px",
              },
            },
          }}
        >
          <MuiLink href={`/blogs/${blog._id}`} component={Link}>
            {blog.title}
          </MuiLink>
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
          sx={{
            flex: 1,
            lineHeight: 1.6,
          }}
        >
          {blog.description.length > 160
            ? `${blog.description.slice(0, 160)}...`
            : blog.description}
        </Typography>

        <MuiLink
          component={Link}
          href={`/blogs/${blog._id}`}
          underline="none"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            fontWeight: 600,
            color: "primary.main",
            width: "fit-content",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "primary.dark",
              transform: "translateX(4px)",
              "& svg": {
                transform: "translateX(4px)",
              },
            },
            "& svg": {
              transition: "transform 0.3s ease",
            },
          }}
        >
          Read More <ArrowForwardIcon fontSize="small" sx={{ ml: 0.5 }} />
        </MuiLink>
      </CardContent>
    </Card>
  );
}
