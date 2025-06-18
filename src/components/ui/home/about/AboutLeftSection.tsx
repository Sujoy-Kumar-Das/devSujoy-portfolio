import {
  inViewContainerVariants,
  inViewItemVariants,
} from "@/animation/framerMotion/inview-animation";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const expertiseArray = [
  { id: crypto.randomUUID(), title: "Frontend Development" },
  { id: crypto.randomUUID(), title: "React Development" },
  { id: crypto.randomUUID(), title: "Responsive Design" },
  { id: crypto.randomUUID(), title: "Web Performance" },
  { id: crypto.randomUUID(), title: "State Management" },
  { id: crypto.randomUUID(), title: "Modern Styling" },
];

const aboutMeData = [
  {
    id: crypto.randomUUID(),
    data: "I’m a frontend developer with a strong focus on building modern,responsive, and user-friendly web applications. I specialize in React and have experience working with tools like Next.js, MUI, Tailwind CSS,and Redux Toolkit.",
  },
  {
    id: crypto.randomUUID(),
    data: "I care deeply about clean design, performance, and writing scalable,maintainable code. My goal is to create web experience that are both functional and visually polished.",
  },
  {
    id: crypto.randomUUID(),
    data: "I stay up-to-date with the latest frontend technologies to deliver the best solutions for every project.",
  },
];

export default function AboutLeftSection() {
  return (
    <Box
      sx={{ width: { xs: "100%", md: "55%" } }}
      component={motion.div}
      variants={inViewContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={1}
        mb={1}
        component={motion.div}
        variants={inViewItemVariants}
      >
        <Typography variant="h3" sx={{ overflow: "hidden" }}>
          About Me
        </Typography>
        <Box height={"3px"} width={"10%"} bgcolor={"primary.main"}></Box>
      </Stack>

      <Stack direction={"column"} gap={1}>
        {aboutMeData.map((data) => (
          <Typography
            key={data.id}
            variant="body1"
            color={"text.secondary"}
            textAlign={"left"}
            component={motion.p}
            variants={inViewItemVariants}
          >
            {data.data}
          </Typography>
        ))}
      </Stack>
      <Grid container spacing={2} alignItems="center" mt={2}>
        {expertiseArray.map((item) => (
          <Grid
            item
            key={item.id}
            xs={12}
            sm={6}
            md={4}
            component={motion.div}
            variants={inViewItemVariants}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  height: 10,
                  width: 10,
                  backgroundColor: "primary.light",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="body1"
                component="p"
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                {item.title}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
