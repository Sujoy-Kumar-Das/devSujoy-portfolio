"use client";
import {
  inViewContainerVariants,
  inViewItemVariants,
} from "@/animation/framerMotion/inview-animation";
import Heading from "@/components/shared/heading/Heading";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <Box py={16} bgcolor="background.default">
      <Container>
        <Heading title="Education" subtitle="My Educational Journey" />

        <Grid
          container
          spacing={2}
          alignItems="stretch"
          component={motion.div}
          variants={inViewContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Stack 1 - Left Box */}
          <Grid
            item
            xs={12}
            md={5}
            component={motion.div}
            variants={inViewItemVariants}
          >
            <Box
              sx={{
                height: "100%",
                backgroundColor: "primary.main",
                py: 2,
                px: 3,
                borderRadius: "6px",
                boxShadow: 2,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Typography
                component="h1"
                color="primary.contrastText"
                fontWeight="medium"
                pb={1}
                display="flex"
                alignItems="center"
                gap={1}
                fontSize={{ xs: 14, md: 24 }}
              >
                <FaGraduationCap />
                Diploma in Computer Technology
              </Typography>
              <Typography
                component="p"
                fontSize={{ xs: 12, md: 16 }}
                color="primary.contrastText"
                fontWeight="medium"
              >
                Completed Diploma in Computer Technology from Bangladesh Skill
                Development Institute in 2023.
              </Typography>
            </Box>
          </Grid>

          {/* Center Line & Dot - Stack 1 */}
          <Grid
            item
            xs={12}
            md={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            component={motion.div}
            variants={inViewItemVariants}
          >
            <Box
              sx={{
                width: "2px",
                height: "100%",
                backgroundColor: "#a5b4fc", // indigo-300
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "#818cf8", // indigo-400
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              1
            </Box>
          </Grid>

          {/* Right Spacer */}
          <Grid
            item
            xs={12}
            md={5}
            component={motion.div}
            variants={inViewItemVariants}
          />

          {/* Spacer */}
          <Grid
            item
            xs={12}
            md={5}
            component={motion.div}
            variants={inViewItemVariants}
          />

          {/* Center Line & Dot - Stack 2 */}
          <Grid
            item
            xs={12}
            md={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            component={motion.div}
            variants={inViewItemVariants}
          >
            <Box
              sx={{
                width: "2px",
                height: "100%",
                backgroundColor: "#a5b4fc", // indigo-300
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "#818cf8", // indigo-400
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              2
            </Box>
          </Grid>

          {/* Stack 2 - Right Box */}
          <Grid
            item
            xs={12}
            md={5}
            component={motion.div}
            variants={inViewItemVariants}
          >
            <Box
              sx={{
                height: "100%",
                backgroundColor: "primary.main",
                py: 2,
                px: 3,
                borderRadius: "6px",
                boxShadow: 2,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Typography
                component="h1"
                color="primary.contrastText"
                fontWeight="medium"
                pb={1}
                display="flex"
                alignItems="center"
                gap={1}
                fontSize={{ xs: 14, md: 24 }}
              >
                <FaGraduationCap />
                Secondary School Certificate (S.S.C)
              </Typography>
              <Typography
                component="p"
                fontSize={{ xs: 12, md: 16 }}
                color="primary.contrastText"
                fontWeight="medium"
              >
                Completed Secondary School Certificate (S.S.C) from Puran Bazar
                M.H. High School in 2018.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
