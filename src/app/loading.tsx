import { Box, CircularProgress } from "@mui/material";

export default function loading() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={50} color="primary" />
    </Box>
  );
}
