"use client";
import {
  inViewContainerVariants,
  inViewItemVariants,
} from "@/animation/framerMotion/inview-animation";
import { TProject } from "@/types/Tproject";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }: { projects: TProject[] }) {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      component={motion.div}
      variants={inViewContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {projects.map((project: TProject) => (
        <Grid
          key={project._id}
          item
          xs={12}
          sm={6}
          md={4}
          component={motion.div}
          variants={inViewItemVariants}
        >
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
}
