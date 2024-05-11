"use client";
/* eslint-disable react/no-unescaped-entities */

import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import TextWriterAnimation from "./textWriter/TextWriterAnimation";

export default function LeftSideContent() {
  // animate download button
  const animateDownloadButtonIcon = {
    hidden: {
      y: 0,
    },
    visible: {
      y: 30,
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };

  return (
    <Box component={"div"}>
      <Typography component={"h1"} variant="h4" fontWeight={"bold"}>
        Hello! I&rsquo;m
      </Typography>
      <Typography
        component={"p"}
        variant="h3"
        fontWeight={"bold"}
        color={"primary.main"}
        mt={2}
        mb={1}
      >
        Sujoy Kumar Das
      </Typography>
      <Typography component={"p"}>
        <Typography component={"span"} variant="h5">
          I'm a{" "}
        </Typography>
        <TextWriterAnimation />
      </Typography>
      <motion.div className=" flex items-center justify-start space-x-5 mt-5">
        <Button component={Link} href="/contact">
          Say Hello
        </Button>
        <Button
          component="a"
          target="_blank"
          href="https://drive.google.com/file/d/16lBfJX3BxGFqolmV3F_yfbZaQLi9o5ED/view?usp=sharing"
          variant="outlined"
          sx={{ overflow: "hidden" }}
        >
          <span>Get Resume</span>
          <motion.span
            variants={animateDownloadButtonIcon}
            initial={"hidden"}
            animate={"visible"}
          >
            <DownloadIcon />
          </motion.span>
        </Button>
      </motion.div>
    </Box>
  );
}
