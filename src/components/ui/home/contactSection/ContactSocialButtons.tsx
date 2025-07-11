import { Button, Stack } from "@mui/material";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { TSocialLink } from "../about/SocialButtons";
import socialLinks from "@/staticData/socialLinks";

export default function ContactSocialButtons() {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"} mt={3}>
      {socialLinks.map((socialLink) => (
        <Button
          key={socialLink.id}
          component="a"
          href={socialLink.link}
          target="_blank"
          sx={{
            py: 1.5,
            fontSize: 16,
            fontWeight: "bold",
            transition: "color 0.5s ease, transform 0.5s ease",
            "&:hover": {
              color: "primary.contrastText",
              transform: "scale(1.1)",
            },
          }}
        >
          {socialLink.icon}
        </Button>
      ))}
    </Stack>
  );
}
