import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1586FD",
      light: "#4aa3ff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9CA3AF",
    },
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    text: {
      primary: "#e2e8f0",
      secondary: "#94a3b8",
    },
    divider: "#334155",
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    body1: { color: "#e2e8f0" },
    body2: { color: "#94a3b8" },
    h1: { color: "#ffffff", fontWeight: 700 },
    h2: { color: "#f1f5f9", fontWeight: 600 },
    h3: { color: "#f1f5f9" },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "10px 24px",
          borderRadius: "12px",
          textTransform: "none",
          boxShadow: "none",
          transition: "all 0.5s ease",
          "&:hover": {
            boxShadow: "0px 0px 12px #1586FD33",
            backgroundColor: "#1d4ed8",
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e293b",
          borderRadius: "16px",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});
