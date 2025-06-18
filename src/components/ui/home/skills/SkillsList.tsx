"use client";

import {
  inViewContainerVariants,
  inViewItemVariants,
} from "@/animation/framerMotion/inview-animation";
import { TSkill } from "@/types/TSkills";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

export default function SkillsList({ skills }: { skills: TSkill[] }) {
  return (
    <Grid
      container
      spacing={5}
      component={motion.div}
      variants={inViewContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {skills?.map((skill: TSkill) => (
        <Grid
          key={skill._id}
          item
          xs={6}
          md={2}
          component={motion.div}
          variants={inViewItemVariants}
        >
          <SkillCard skill={skill} />
        </Grid>
      ))}
    </Grid>
  );
}
