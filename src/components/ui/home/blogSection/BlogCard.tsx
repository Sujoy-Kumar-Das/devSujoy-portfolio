import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function BlogCard({ blog }) {
  return (
    <Grid item xs={12} md={4}>
      <Box sx={{ backgroundColor: "background.default", borderRadius: "10px" }}>
        <Box>
          <Image
            alt=""
            src={blog.image}
            height={300}
            width={500}
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.description.length > 100
              ? `${blog.description.slice(0, 100)}...`
              : blog.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ pb: 2 }}>
          <Button
            variant="outlined"
            size="small"
            component={Link}
            href={`/blogs/${blog._id}`}
            className="group overflow-hidden text-center "
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            <span className="font-bold transition-transform transform translate-x-[-200px] opacity-0 group-hover:translate-x-[30px] group-hover:opacity-100">
              <FaArrowRight />
            </span>
            <span className="font-bold transition-transform transform translate-x-0 group-hover:translate-x-[200px]">
              Details
            </span>
          </Button>
        </CardActions>
      </Box>
    </Grid>
  );
}
