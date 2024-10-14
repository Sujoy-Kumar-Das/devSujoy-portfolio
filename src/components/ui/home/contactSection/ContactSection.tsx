import Heading from "@/components/shared/heading/Heading";
import { Box } from "@mui/material";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <Box py={16} component={"div"} bgcolor={"background.default"} id="contact">
      <Heading title="CONTACT" subtitle="Let's Work together" />
      <ContactInfo />
    </Box>
  );
}
