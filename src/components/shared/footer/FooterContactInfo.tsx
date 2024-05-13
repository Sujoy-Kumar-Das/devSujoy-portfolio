import { TSocialLink } from "@/components/ui/home/about/SocialButtons";
import { Button, Stack, Typography } from "@mui/material";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default async function FooterContactInfo() {
  const res = await fetch("https://backend-rosy-chi.vercel.app/social-links", {
    cache: "force-cache",
  });
  const { data: socialLinks } = await res.json();
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent={{ xs: "center", md: "space-between" }}
      alignItems={"center"}
      spacing={{ xs: 3, md: 2 }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Button
          sx={{
            height: { xs: 50, md: 70 },
            width: { xs: 50, md: 70 },
            borderRadius: "50%",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "bold",
            transition: "color 0.5s ease, transform 0.5s ease",
            "&:hover": {
              color: "primary.contrastText",
              transform: "scale(1.1)",
            },
          }}
        >
          <FaPhoneAlt />
        </Button>
        <Typography
          sx={{
            fontWeight: "medium",
            fontSize: { xs: "18px", md: "24px" },
            color: "body2",
            cursor: "pointer",
            transition: "color 0.5s ease, transform 0.5s ease",
            "&:hover": {
              color: "primary.contrastText",
            },
          }}
        >
          +880 1319263016
        </Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Button
          sx={{
            height: { xs: 50, md: 70 },
            width: { xs: 50, md: 70 },
            borderRadius: "50%",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "bold",
            transition: "color 0.5s ease, transform 0.5s ease",
            "&:hover": {
              color: "primary.contrastText",
              transform: "scale(1.1)",
            },
          }}
        >
          <MdOutlineMail />
        </Button>
        <Typography
          sx={{
            fontWeight: "medium",
            fontSize: { xs: "18px", md: "24px" },
            cursor: "pointer",
            color: "body2",
            transition: "color 0.5s ease, transform 0.5s ease",
            "&:hover": {
              color: "primary.contrastText",
            },
          }}
        >
          sujoykumardas75@gmail.com
        </Typography>
      </Stack>

      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        {socialLinks.map((socialLink: TSocialLink) => (
          <Button
            key={socialLink._id}
            sx={{
              height: { xs: 50, md: 70 },
              width: { xs: 50, md: 70 },
              borderRadius: "50%",
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: "bold",
              transition: "color 0.5s ease, transform 0.5s ease",
              "&:hover": {
                color: "primary.contrastText",
                transform: "scale(1.1)",
              },
            }}
            component={"a"}
            href={socialLink.link}
            target="_blank"
          >
            {socialLink.title === "Facebook" ? (
              <FaFacebook />
            ) : socialLink.title === "Linkedin" ? (
              <FaLinkedin />
            ) : socialLink.title === "Github" ? (
              <FaGithub />
            ) : (
              ""
            )}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
