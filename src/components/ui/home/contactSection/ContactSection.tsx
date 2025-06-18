import Heading from "@/components/shared/heading/Heading";
import { Box, Container, Stack } from "@mui/material";
import ContactLeftSection from "./ContactLeftSection";
import ContactRightSection from "./ContactRightSection";

export default function ContactSection() {
  return (
    <Box py={16} component={"div"} bgcolor={"background.default"} id="contact">
      <Heading title="CONTACT" subtitle="Let's Work together" />

      <Stack
        component={Container}
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={{ xs: 5, md: 3 }}
      >
        <ContactLeftSection />
        <ContactRightSection />
      </Stack>
    </Box>
  );
}
