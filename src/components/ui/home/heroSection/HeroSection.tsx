/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  animateDownloadButtonIcon,
  intro,
  introChildren,
} from "@/animation/framerMotion/home/homeAnimation";
import myImage from "@/assets/devImage/me.png";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TextWriterAnimation from "./textWriter/TextWriterAnimation";

export default function HeroSection() {
  return (
    <Box bgcolor={"background.default"}>
      <Stack
        justifyContent={{ xs: "center", md: "space-between" }}
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems={"center"}
        spacing={8}
        height={"90vh"}
        component={Container}
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
            Hello! I&rsquo;m
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
        <Box
          component={motion.div}
          variants={intro}
          initial="hidden"
          animate="visible"
        >
          <Box component={motion.div} variants={introChildren}>
            <Image
              alt="DevSujoy image"
              src={myImage}
              height={300}
              width={300}
              style={{
                borderRadius: "50%",
                border: "4px solid #1586FD ",
                boxShadow: "0px 0px 100px 6px rgba(0,0,21,0.58)",
              }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
