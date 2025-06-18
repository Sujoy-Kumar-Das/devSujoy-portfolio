import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1586FD",
      light: "#4aa3ff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#6b7280", // neutral gray
    },
    background: {
      default: "#ECF0F1", // soft light background
      paper: "#f8fafc", // card/paper background
    },
    text: {
      primary: "#0f172a", // dark slate
      secondary: "#475569", // muted grayish-blue
    },
    divider: "#e2e8f0",
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',

    h1: {
      color: "#0f172a",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
      "@media (max-width:900px)": {
        fontSize: "2.7rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      color: "#1e293b",
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.3,
      "@media (max-width:900px)": {
        fontSize: "2rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.6rem",
      },
    },
    h3: {
      color: "#1e293b",
      fontWeight: 500,
      fontSize: "2rem",
      lineHeight: 1.4,
      "@media (max-width:900px)": {
        fontSize: "1.6rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.3rem",
      },
    },
    body1: {
      color: "#334155",
      fontSize: "1rem",
      lineHeight: 1.6,
      "@media (max-width:600px)": {
        fontSize: "0.95rem",
      },
    },
    body2: {
      color: "#64748b",
      fontSize: "0.875rem",
      lineHeight: 1.6,
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
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
          fontWeight: 500,
          transition: "all 0.4s ease",
          boxShadow: "none",
          fontSize: "1rem",
          "&:disabled": {
            opacity: 0.6,
            cursor: "not-allowed",
          },
        },
        contained: {
          backgroundColor: "#1586FD",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#1d4ed8",
            boxShadow: "0px 0px 12px #1586FD33",
          },
        },
        outlined: {
          border: "1px solid #1586FD",
          color: "#1586FD",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "rgba(21, 134, 253, 0.05)",
            borderColor: "#1d4ed8",
            boxShadow: "0px 0px 12px #1586FD22",
          },
        },
        text: {
          color: "#1586FD",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "rgba(21, 134, 253, 0.05)",
            textDecoration: "underline",
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
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.05)",
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
