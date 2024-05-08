import { Box } from "@mui/material";
import AboutMe from "./AboutMe";
export default function AboutSection() {
  return (
    <Box component={"div"} sx={{ backgroundColor: "background.paper", py: 16 }}>
      <AboutMe />
    </Box>
  );
}
