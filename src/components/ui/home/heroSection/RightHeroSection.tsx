import devImage from "@/assets/me.png";
import { Box } from "@mui/material";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function RightHeroSection() {
  return (
    <Box
      component={motion.div}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      sx={{
        position: "relative",
        width: 300,
        height: 300,
        borderRadius: "50%",
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "primary.main",
      }}
    >
      <Box
        component={motion.div}
        // variants={introChildren}
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Image
          alt="DevSujoy image"
          src={devImage}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    </Box>
  );
}
