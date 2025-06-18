import { Box, Container, Stack } from "@mui/material";
import LeftHeroSection from "./LeftHeroSection";
import RightHeroSection from "./RightHeroSection";

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
        <LeftHeroSection />
        <RightHeroSection />
      </Stack>
    </Box>
  );
}
