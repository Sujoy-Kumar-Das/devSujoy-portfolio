import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface NavLinkProps {
  id: string;
  link: string;
  title: string;
}

export default function NavLink({ navItem }: { navItem: NavLinkProps }) {
  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        "&:hover .underline": {
          transform: "scaleX(1)",
        },
      }}
    >
      <Typography
        component={Link}
        href={navItem.link}
        color="text.primary"
        fontWeight={500}
        sx={{
          textDecoration: "none",
          "&:hover": {
            color: "primary.light",
          },
        }}
      >
        {navItem.title}
      </Typography>
      <Box
        component="div"
        sx={{
          backgroundColor: "primary.light",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          transform: "scaleX(0)",
          transition: "transform 0.3s ease-in-out",
        }}
        className="underline"
      />
    </Box>
  );
}
