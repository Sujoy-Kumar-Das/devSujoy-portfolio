"use client";
import {
  inViewContainerVariants,
  inViewItemVariants,
} from "@/animation/framerMotion/inview-animation";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

export default function BlogList({ blogs }: { blogs: any }) {
  return (
    <Grid
      component={motion.div}
      initial="hidden"
      variants={inViewContainerVariants}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      container
      spacing={4}
      mt={2}
    >
      {blogs.map((blog: any) => (
        <Grid
          component={motion.div}
          variants={inViewItemVariants}
          item
          xs={12}
          md={4}
          key={blog._id}
        >
          <BlogCard blog={blog} />
        </Grid>
      ))}
    </Grid>
  );
}
