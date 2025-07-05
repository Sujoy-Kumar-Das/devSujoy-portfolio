import { Box } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";

export default function ProjectImageCard({
  imageLink,
  isLarge = false,
}: {
  imageLink: string;
  isLarge?: boolean;
}) {
  const cardStyles: CSSProperties = {
    borderRadius: "12px",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    aspectRatio: "16/9",
  };

  const hoverStyles: CSSProperties = {
    transform: "scale(1.02)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
  };

  return (
    <Box
      sx={{
        ...cardStyles,
        height: "100%", // Take full height of parent
        // Different cursor for thumbnails
        cursor: isLarge ? "default" : "pointer",
        // Border for active thumbnail
        border: (theme) => (isLarge ? "none" : `2px solid transparent`),
        "&:hover": {
          border: (theme) =>
            isLarge ? "none" : `2px solid ${theme.palette.primary.main}`,
          ...hoverStyles,
        },
      }}
      component="div"
    >
      <Image
        src={imageLink}
        alt="Project detail image"
        fill
        sizes={
          isLarge
            ? "(max-width: 600px) 100vw, 50vw"
            : "(max-width: 600px) 50vw, 25vw"
        }
        style={{
          objectFit: "fill",
          width: "100%",
          height: "100%",
        }}
        quality={isLarge ? 90 : 80}
      />
    </Box>
  );
}
