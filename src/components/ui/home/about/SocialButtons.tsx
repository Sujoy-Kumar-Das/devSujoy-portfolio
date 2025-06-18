"use client";
import { inViewItemVariants } from "@/animation/framerMotion/inview-animation";
import socialLinks from "@/staticData/socialLinks";
import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export type TSocialLink = {
  _id: string;
  title: string;
  link: string;
};
export default function SocialButtons() {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      {socialLinks.map((socialLink) => (
        <Typography
          key={socialLink.id}
          component={motion.a}
          variants={inViewItemVariants}
          target="_blank"
          href={socialLink.link}
          color={"primary.main"}
          fontWeight={"bold"}
          fontSize={{ xs: 25, md: 30 }}
        >
          {socialLink.icon}
        </Typography>
      ))}
    </Stack>
  );
}
