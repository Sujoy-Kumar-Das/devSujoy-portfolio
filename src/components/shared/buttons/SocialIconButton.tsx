import { IconButton } from "@mui/material";
import { ReactNode } from "react";

interface SocialIconButtonProps {
  link: string;
  title: string;
  icon: ReactNode;
}

export default function SocialIconButton({
  link,
  title,
  icon,
}: SocialIconButtonProps) {
  return (
    <IconButton
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      sx={{
        color: "primary.main",
        fontSize: { xs: 25, md: 30 },
        "&:hover": {
          transform: "scale(1.1)",
          transition: "transform 0.2s ease",
        },
      }}
    >
      {icon}
    </IconButton>
  );
}
