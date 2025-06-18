"use client";
import { inViewContainerVariants } from "@/animation/framerMotion/inview-animation";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import ContactFrom from "./ContactFrom";

export default function ContactRightSection() {
  return (
    <Box
      sx={{ width: { xs: "100%", md: "50%" } }}
      component={motion.div}
      variants={inViewContainerVariants}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
    >
      <ContactFrom />
    </Box>
  );
}
