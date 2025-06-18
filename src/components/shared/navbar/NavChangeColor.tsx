"use client";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export default function NavChangeColor({ children }: { children: ReactNode }) {
  const [activeNavBg, setActiveNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add a slight delay to the scroll effect to make it smoother
      requestAnimationFrame(() => {
        setActiveNavBg(window.scrollY > 50);
      });
    };

    // Use passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      component={motion.div}
      sx={{
        // Smooth transition for background and padding
        transition: "background-color 0.3s ease, padding-bottom 0.3s ease",
        backgroundColor: activeNavBg ? "background.paper" : "transparent",
        py: 4,
        pb: activeNavBg ? 4 : 2, // Explicitly define both states
        position: "sticky",
        top: 0,
        // Optional: add a subtle shadow when active
        boxShadow: activeNavBg ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
      }}
      zIndex={100}
      initial={{
        translateY: "-500px",
        opacity: 0,
      }}
      animate={{
        translateY: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8, // Increased duration for smoother entry
        type: "spring",
        damping: 10, // More damping for less bounce
        stiffness: 100, // Adjusted stiffness
      }}
    >
      {children}
    </Box>
  );
}
