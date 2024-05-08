import { TSocialLink } from "@/components/ui/home/about/SocialButtons";
import { Button, Stack, Typography } from "@mui/material";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default async function FooterContactInfo() {
  const res = await fetch("http://localhost:5000/social-links", {
    cache: "no-store",
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
          }}
        >
          <FaPhoneAlt />
        </Button>
        <Typography
          sx={{
            fontWeight: "medium",
            fontSize: { xs: "18px", md: "24px" },
            color: "body2",
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
          }}
        >
          <MdOutlineMail />
        </Button>
        <Typography
          sx={{
            fontWeight: "medium",
            fontSize: { xs: "18px", md: "24px" },
            color: "body2",
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
