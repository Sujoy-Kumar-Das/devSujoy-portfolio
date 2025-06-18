"use client";
import devImage from "@/assets/me.png";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { techIcons } from "./techIcon";

export default function RightHeroSection() {
  // Simple animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        // Scale and opacity animate first
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.6,
        },
        opacity: { duration: 0.6 },
      },
    },
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "100%", md: "50%" },
        display: "flex",
        justifyContent: { xs: "center", md: "flex-end" },
        alignItems: "center",
        minHeight: { xs: 350, sm: 450, md: 550 },
        padding: { xs: 2, sm: 0, md: 0 },
        overflow: "hidden",
      }}
    >
      {/* Container for the entire circular layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: 300, sm: 400, md: 500 },
            height: { xs: 300, sm: 400, md: 500 },
            maxWidth: "100%",
            maxHeight: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Icons Around Image */}
          {techIcons.map((icon, i) => {
            const angle = (360 / techIcons.length) * i;

            // Calculate positions for different screen sizes using CSS calc()
            const mobileX = Math.cos((angle * Math.PI) / 180) * 120; // 120px radius for mobile
            const tabletX = Math.cos((angle * Math.PI) / 180) * 160; // 160px radius for tablet
            const desktopX = Math.cos((angle * Math.PI) / 180) * 200; // 200px radius for desktop

            const mobileY = Math.sin((angle * Math.PI) / 180) * 120;
            const tabletY = Math.sin((angle * Math.PI) / 180) * 160;
            const desktopY = Math.sin((angle * Math.PI) / 180) * 200;

            return (
              <motion.div
                key={icon.id}
                variants={iconVariants}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    // Mobile positioning
                    left: {
                      xs: `calc(50% + ${mobileX}px - 17.5px)`,
                      sm: `calc(50% + ${tabletX}px - 20px)`,
                      md: `calc(50% + ${desktopX}px - 22.5px)`,
                    },
                    top: {
                      xs: `calc(50% + ${mobileY}px - 17.5px)`,
                      sm: `calc(50% + ${tabletY}px - 20px)`,
                      md: `calc(50% + ${desktopY}px - 22.5px)`,
                    },
                    width: { xs: 35, sm: 40, md: 45 },
                    height: { xs: 35, sm: 40, md: 45 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "background.paper",
                    borderRadius: "50%",
                    boxShadow: {
                      xs: "0 1px 4px rgba(0,0,0,0.1)",
                      sm: "0 2px 6px rgba(0,0,0,0.1)",
                      md: "0 2px 8px rgba(0,0,0,0.1)",
                    },
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      boxShadow: {
                        xs: "0 2px 6px rgba(0,0,0,0.15)",
                        sm: "0 3px 8px rgba(0,0,0,0.15)",
                        md: "0 4px 12px rgba(0,0,0,0.15)",
                      },
                    },
                    // Extra small screens handling
                    "@media (max-width: 400px)": {
                      transform: "scale(0.9)",
                      "&:hover": {
                        transform: "scale(0.95)",
                      },
                    },
                  }}
                >
                  <Image
                    src={icon.icon}
                    alt="tech icon"
                    style={{
                      objectFit: "contain",
                      width: "auto",
                      height: "auto",
                      maxWidth: "25px",
                      maxHeight: "25px",
                    }}
                  />
                </Box>
              </motion.div>
            );
          })}

          {/* Profile Image in Center */}
          <motion.div
            variants={profileVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: 180, sm: 240, md: 300 },
                height: { xs: 180, sm: 240, md: 300 },
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid",
                borderColor: "primary.light",
                zIndex: 10,
                transition: "all 0.3s ease",
                cursor: "pointer",
                bgcolor: "background.paper",
              }}
            >
              <Image
                alt="DevSujoy profile image"
                src={devImage}
                fill
                sizes="(max-width: 600px) 180px, (max-width: 960px) 240px, 300px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                priority
              />
            </Box>
          </motion.div>
        </Box>
      </motion.div>

      <style jsx>{`
        @media (min-width: 600px) {
          img {
            max-width: 30px !important;
            max-height: 30px !important;
          }
        }
        @media (min-width: 960px) {
          img {
            max-width: 35px !important;
            max-height: 35px !important;
          }
        }
      `}</style>
    </Box>
  );
}
