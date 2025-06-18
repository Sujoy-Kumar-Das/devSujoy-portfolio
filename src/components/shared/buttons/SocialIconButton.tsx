import { IconButton } from "@mui/material";

export default function SocialIconButton({ link, title, icon }) {
  return (
    <IconButton
      component={"a"}
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
