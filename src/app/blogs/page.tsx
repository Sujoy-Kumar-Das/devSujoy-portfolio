import { Box, Typography } from "@mui/material";

export default function page() {
  return (
    <Box
      height={"100vh"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h4" component={"h1"}>
        Coming soon
      </Typography>
    </Box>
  );
}
