"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingComponent = () => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  // Simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(oldProgress + Math.random() * 10, 100);
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  // Hide loader when complete
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setShowLoader(false), 500);
    }
  }, [progress]);

  if (!showLoader) return null;

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        zIndex: 9999,
      }}
    >
      {/* Animated Logo/Brand */}
      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        sx={{ mb: 4 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(90deg, #1586FD, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          DevSujoy
        </Typography>
      </Box>

      {/* Animated Dots */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          mb: 4,
        }}
      >
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            component={motion.div}
            initial={{ y: 0 }}
            animate={{
              y: [0, -10, 0],
              transition: {
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.2,
              },
            }}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "primary.main",
            }}
          />
        ))}
      </Box>

      {/* Progress Bar */}
      <Box
        component={motion.div}
        initial={{ width: 0 }}
        animate={{ width: "80%" }}
        transition={{ duration: 0.5 }}
        sx={{
          width: "80%",
          maxWidth: 300,
          height: 6,
          backgroundColor: "divider",
          borderRadius: 3,
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Box
          component={motion.div}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
          sx={{
            height: "100%",
            background: "linear-gradient(90deg, #1586FD, #8b5cf6)",
            borderRadius: 3,
          }}
        />
      </Box>

      {/* Percentage Text */}
      <Typography
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        variant="body2"
        color="text.secondary"
      >
        {Math.round(progress)}%
      </Typography>
    </Box>
  );
};

export default LoadingComponent;
