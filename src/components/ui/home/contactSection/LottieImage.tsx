"use client";

import lottie from "@/animation/lottie/Animation - 1715457013130.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { Box } from "@mui/material";
export default function LottieImage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: 260 }}>
      <Player src={lottie} loop autoplay background="#ecf0f1" />
    </Box>
  );
}
