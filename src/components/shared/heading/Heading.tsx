"use client";
import { Box, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";

export default function Heading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      mb={5}
      sx={{
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        component={motion.h1}
        variants={textVariants}
        variant="h2"
        textTransform="capitalize"
        color="text.primary"
        mb={1}
      >
        {title}
      </Typography>

      <Typography
        component={motion.h3}
        variants={textVariants}
        variant="h3"
        textTransform="capitalize"
        color="text.secondary"
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
