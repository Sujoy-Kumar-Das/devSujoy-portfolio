import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1586FD",
      light: "#7fbfff",
      contrastText: "white",
    },
    secondary: {
      main: "#666f73",
    },
    background: {
      default: "#ecf0f1",
      paper: "#dfe6e9",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
          boxShadow: "none",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: { color: "#333333" },
    body2: { color: "#555555" },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
