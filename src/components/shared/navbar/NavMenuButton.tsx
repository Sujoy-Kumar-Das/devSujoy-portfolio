"use client";
import { motion } from "framer-motion";
import {
  navBgAnimationMobile,
  navItemChildVariants,
  navItemVariants,
} from "@/animation/framerMotion/navbar/MobileMenuAnimation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "./navItems";

export default function NavMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        sx={{
          display: { xs: "flex", md: "none" },
          minWidth: "auto",
          padding: "8px",
          color: "text.primary",
          "&:hover": {
            backgroundColor: "action.hover",
          },
        }}
        aria-label="Toggle menu"
      >
        <MenuIcon fontSize="medium" />
      </Button>

      <Box
        component={motion.div}
        variants={navBgAnimationMobile}
        initial="closed"
        animate={open ? "open" : "closed"}
        sx={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          backgroundColor: "primary.light",
          display: { xs: "block", md: "none" },
          top: 0,
          left: 0,
          zIndex: 1300, // Higher than app bar
          overflow: "hidden",
        }}
      >
        <Stack
          direction="row"
          justifyContent="flex-end"
          sx={{
            padding: 2,
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <Button
            onClick={() => setOpen(false)}
            sx={{
              minWidth: "auto",
              width: 48,
              height: 48,
              borderRadius: "50%",
              color: "text.primary",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              },
            }}
            aria-label="Close menu"
          >
            <CloseIcon fontSize="medium" />
          </Button>
        </Stack>

        <Stack
          sx={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            component={motion.div}
            variants={navItemVariants}
            sx={{
              gap: 1,
              textAlign: "center",
            }}
          >
            {navItems.map((navItem) => (
              <Box
                component={motion.div}
                key={navItem.id}
                variants={navItemChildVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Typography
                  onClick={() => setOpen(false)}
                  component={Link}
                  href={navItem.link}
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
                    fontSize: "1.5rem",
                    textDecoration: "none",
                    "&:hover": {
                      color: "primary.main",
                    },
                    padding: 1,
                    display: "block",
                  }}
                >
                  {navItem.title}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
