"use client";

import lottie from "@/animation/lottie/Animation - 1715457013130.json";
import { Player } from "@lottiefiles/react-lottie-player";
export default function LottieImage() {
  return <Player src={lottie} loop autoplay background="#ecf0f1" />;
}
