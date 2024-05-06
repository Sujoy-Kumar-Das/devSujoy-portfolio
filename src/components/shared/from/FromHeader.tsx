import { Typography } from "@mui/material";
import { ReactNode } from "react";

export function FromHeader({ children }: { children: ReactNode }) {
  return (
    <Typography
      sx={{ fontSize: { xs: "30px", sm: "50px" }, fontWeight: "bold" }}
      mb={"20px"}
      textAlign={"center"}
      color={"text.primary"}
    >
      {children}
    </Typography>
  );
}
