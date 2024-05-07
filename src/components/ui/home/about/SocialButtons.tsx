import { Stack, Typography } from "@mui/material";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
export default function SocialButtons() {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      <Typography
        component={"a"}
        target="_blank"
        href="https://google.com"
        color={"primary.main"}
        fontWeight={"bold"}
        fontSize={{ xs: 25, md: 30 }}
        className=" hover:scale-125 duration-500 transition-transform ease-in-out"
      >
        <FaFacebook />
      </Typography>
      <Typography
        component={"a"}
        target="_blank"
        href="https://google.com"
        color={"primary.main"}
        fontWeight={"bold"}
        fontSize={{ xs: 25, md: 30 }}
        className=" hover:scale-125 duration-500 transition-transform ease-in-out"
      >
        <FaLinkedinIn />
      </Typography>{" "}
      <Typography
        component={"a"}
        target="_blank"
        href="https://google.com"
        color={"primary.main"}
        fontWeight={"bold"}
        fontSize={{ xs: 25, md: 30 }}
        className=" hover:scale-125 duration-500 transition-transform ease-in-out"
      >
        <FaGithub />
      </Typography>
    </Stack>
  );
}
