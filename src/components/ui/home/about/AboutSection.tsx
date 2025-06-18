"use client";
import { Box, Container, Stack } from "@mui/material";
import AboutLeftSection from "./AboutLeftSection";
import PersonalInfoCard from "./PersonalInfoCard";
export default function AboutSection() {
  return (
    <Box
      component={"div"}
      sx={{ backgroundColor: "background.paper", py: 16 }}
      id="about"
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        component={Container}
        spacing={4}
      >
        <AboutLeftSection />
        <PersonalInfoCard />
      </Stack>
    </Box>
  );
}
