"use client";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export default function NavChangeColor({ children }: { children: ReactNode }) {
  const [activeNavBg, setActiveNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActiveNavBg(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      component={motion.div}
      sx={{
        backgroundColor: activeNavBg ? "primary.light" : "transparent",
      }}
      className={`py-5 sticky top-0 duration-700 ease-in-out`}
      zIndex={100}
      initial={{
        translateY: "-200px",
        opacity: 0,
      }}
      animate={{
        translateY: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </Box>
  );
}
