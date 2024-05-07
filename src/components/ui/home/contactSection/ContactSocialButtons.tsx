import { Button, Stack } from "@mui/material";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSocialButtons() {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"} mt={3}>
      <Button sx={{ py: 1.5, fontSize: 16, fontWeight: "bold" }}>
        <FaLinkedin />
      </Button>
      <Button sx={{ py: 1.5, fontSize: 16, fontWeight: "bold" }}>
        <FaGithub />
      </Button>
      <Button sx={{ py: 1.5, fontSize: 16, fontWeight: "bold" }}>
        <FaFacebook />
      </Button>
    </Stack>
  );
}
