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
  // animate download button
  const animateDownloadButtonIcon = {
    hidden: {
      y: 0,
    },
    visible: {
      y: 30,
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };
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
