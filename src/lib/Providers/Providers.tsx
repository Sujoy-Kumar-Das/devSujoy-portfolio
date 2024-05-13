"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactNode, useEffect } from "react";
import { theme } from "../theme/theme";
export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({ once: true });
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
