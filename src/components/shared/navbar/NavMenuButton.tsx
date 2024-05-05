"use client";
import { motion } from "framer-motion";

import {
  navBgAnimationMobile,
  navItemChildVariants,
  navItemVariants,
} from "@/animation/framerMotion/navbar/MobileMenuAnimation";
import MenuIcon from "@mui/icons-material/Menu";
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
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <MenuIcon />
      </Button>

      <Box
        component={motion.div}
        variants={navBgAnimationMobile}
        initial="open"
        animate={open ? "open" : "closed"}
        sx={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          backgroundColor: "primary.light",
          display: { xs: "block", md: "none" },
          top: 0,
          right: 0,
        }}
        className={`duration-500 transition-all ease-out`}
      >
        <Stack direction={"row"} justifyContent={"flex-end"} mt={3} mr={3}>
          <Button
            onClick={() => setOpen((prev: boolean) => !prev)}
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              textAlign: "center",
            }}
          >
            X
          </Button>
        </Stack>
        <Stack
          component={"div"}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
        >
          <Stack component={motion.div} variants={navItemVariants}>
            {navItems.map((navItem) => (
              <Box
                component={motion.div}
                key={navItem.id}
                variants={navItemChildVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  onClick={() => setOpen((prev: boolean) => !prev)}
                  component={Link}
                  href={navItem.link}
                  color={"body1"}
                  fontWeight={"medium"}
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
