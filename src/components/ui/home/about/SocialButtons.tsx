import socialLinks from "@/staticData/socialLinks";
import { Stack, Typography } from "@mui/material";

export type TSocialLink = {
  _id: string;
  title: string;
  link: string;
};
export default function SocialButtons() {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      {socialLinks.map((socialLink) => (
        <Typography
          key={socialLink.id}
          component={"a"}
          target="_blank"
          href={socialLink.link}
          color={"primary.main"}
          fontWeight={"bold"}
          fontSize={{ xs: 25, md: 30 }}
          className=" hover:scale-125 duration-500 transition-transform ease-in-out"
        >
          {socialLink.icon}
        </Typography>
      ))}
    </Stack>
  );
}
