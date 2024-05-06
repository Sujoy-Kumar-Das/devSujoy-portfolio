import { animateDownloadButtonIcon } from "@/animation/framerMotion/home/homeAnimation";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode } from "react";
export default function DownloadButton({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) {
  return (
    <Button
      component={"a"}
      href={link}
      target="_blank"
      variant="outlined"
      sx={{ overflow: "hidden" }}
    >
      <span>{children}</span>
      <motion.span
        variants={animateDownloadButtonIcon}
        initial={"hidden"}
        animate={"visible"}
      >
        <DownloadIcon />
      </motion.span>
    </Button>
  );
}
