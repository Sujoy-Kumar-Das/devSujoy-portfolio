import { Button, Stack } from "@mui/material";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { TSocialLink } from "../about/SocialButtons";

export default async function ContactSocialButtons() {
  const res = await fetch("https://backend-rosy-chi.vercel.app/social-links", {
    cache: "force-cache",
  });
  const { data: socialLinks } = await res.json();
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"} mt={3}>
      {socialLinks.map((socialLink: TSocialLink) => (
        <Button
          key={socialLink._id}
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
          {socialLink.title === "Facebook" ? (
            <FaFacebook />
          ) : socialLink.title === "Linkedin" ? (
            <FaLinkedin />
          ) : socialLink.title === "Github" ? (
            <FaGithub />
          ) : (
            ""
          )}{" "}
        </Button>
      ))}
    </Stack>
  );
}
