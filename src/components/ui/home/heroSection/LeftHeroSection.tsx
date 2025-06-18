"use client";
import {
  animateDownloadButtonIcon,
  intro,
  introChildren,
} from "@/animation/framerMotion/home/homeAnimation";
import DownloadIcon from "@mui/icons-material/Download";
import { Button, Stack, Typography } from "@mui/material";
import * as motion from "motion/react-client";
import TextWriterAnimation from "./textWriter/TextWriterAnimation";

export default function LeftHeroSection() {
  return (
    <motion.div variants={intro} initial="hidden" animate="visible">
      <Typography
        component={motion.h1}
        variant="h2"
        color={"text.primary"}
        variants={introChildren}
      >
        Hello! I&rsquo;m
      </Typography>

      <Typography
        component={motion.h2}
        variant="h1"
        color={"primary.light"}
        variants={introChildren}
        my={1}
      >
        Sujoy Kumar Das
      </Typography>
      <Typography
        component={motion.p}
        variant="h3"
        fontWeight={"medium"}
        variants={introChildren}
      >
        <Typography component={"span"} variant="h3">
          I{"'"}m a{" "}
        </Typography>

        <TextWriterAnimation />
      </Typography>

      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={2}
        mt={3}
        component={motion.div}
        variants={introChildren}
        className=" flex items-center justify-start space-x-5 mt-5"
      >
        <Button component={"a"} href="#contact">
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
      </Stack>
    </motion.div>
  );
}
