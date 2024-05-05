"use client";
import {
  animateDownloadButtonIcon,
  intro,
  introChildren,
} from "@/animation/framerMotion/home/homeAnimation";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import TextWriterAnimation from "./textWriter/TextWriterAnimation";
import Image from "next/image";
import myImage from "@/assets/devImage/me.png";

export default function HeroSection() {
  return (
    <Container>
      <Stack
        justifyContent={{ xs: "center", md: "space-between" }}
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        height={"80vh"}
      >
        <Box
          component={motion.div}
          variants={intro}
          initial="hidden"
          animate="visible"
        >
          <Typography
            component={motion.h1}
            variant="h4"
            variants={introChildren}
            fontWeight={"bold"}
          >
            Hello! I'm
          </Typography>
          <Typography
            component={motion.p}
            variant="h3"
            variants={introChildren}
            fontWeight={"bold"}
            color={"primary.main"}
            mt={2}
            mb={1}
          >
            Sujoy Kumar Das
          </Typography>
          <Typography component={motion.p} variants={introChildren}>
            <Typography component={"span"} variant="h5">
              I'm a{" "}
            </Typography>
            <TextWriterAnimation />
          </Typography>
          <motion.div
            variants={introChildren}
            className=" flex items-center justify-start space-x-5 mt-5"
          >
            <Button component={Link} href="/contact">
              Say Hello
            </Button>
            <Button variant="outlined" sx={{ overflow: "hidden" }}>
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
        <Box>
          <Image alt="DevSujoy image" src={myImage} height={400} width={400} />
        </Box>
      </Stack>
    </Container>
  );
}
