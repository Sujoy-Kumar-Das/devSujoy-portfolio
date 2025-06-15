import {
  animateDownloadButtonIcon,
  intro,
  introChildren,
} from "@/animation/framerMotion/home/homeAnimation";
import DownloadIcon from "@mui/icons-material/Download";
import { Button, Typography } from "@mui/material";
import * as motion from "motion/react-client";
import TextWriterAnimation from "./textWriter/TextWriterAnimation";

export default function LeftHeroSection() {
  return (
    <motion.div variants={intro} initial="hidden" animate="visible">
      <motion.h1 variants={introChildren}>Hello! I&rsquo;m</motion.h1>
      <motion.p variants={introChildren}>Sujoy Kumar Das</motion.p>
      <Typography component={motion.p} variants={introChildren}>
        <Typography component={"span"} variant="h5">
          I{"'"}m a{" "}
        </Typography>
        <TextWriterAnimation />
      </Typography>
      <motion.div
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
      </motion.div>
    </motion.div>
  );
}
