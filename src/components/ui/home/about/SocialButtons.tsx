"use client";
import { GitHub } from "@mui/icons-material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Stack, Typography } from "@mui/material";
import { FaLinkedinIn } from "react-icons/fa";
export default function SocialButtons() {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      <Typography
        component={"a"}
        target="_blank"
        href="https://google.com"
        color={"primary.main"}
        fontWeight={"bold"}
        className=" hover:scale-125 duration-500 transition-transform ease-in-out"
      >
        <FacebookOutlinedIcon />
      </Typography>
      <Typography
        component={"a"}
        target="_blank"
        href="https://google.com"
        color={"primary.main"}
        fontWeight={"bold"}
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
        className=" hover:scale-125 duration-500 transition-transform ease-in-out"
      >
        <GitHub />
      </Typography>
    </Stack>
  );
}
