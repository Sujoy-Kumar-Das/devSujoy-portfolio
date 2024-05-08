import { Stack, Typography } from "@mui/material";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export type TSocialLink = {
  _id: string;
  title: string;
  link: string;
};
export default async function SocialButtons() {
  const res = await fetch("https://backend-rosy-chi.vercel.app/social-links", {
    cache: "force-cache",
  });
  const { data: socialLinks } = await res.json();
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      {socialLinks.map((socialLink: TSocialLink) => (
        <Typography
          key={socialLink._id}
          component={"a"}
          target="_blank"
          href={socialLink.link}
          color={"primary.main"}
          fontWeight={"bold"}
          fontSize={{ xs: 25, md: 30 }}
          className=" hover:scale-125 duration-500 transition-transform ease-in-out"
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
        </Typography>
      ))}
    </Stack>
  );
}
