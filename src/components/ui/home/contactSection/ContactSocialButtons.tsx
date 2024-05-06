"use client";
import { GitHub } from "@mui/icons-material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Button, Stack } from "@mui/material";
import { FaLinkedin } from "react-icons/fa";

export default function ContactSocialButtons() {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"} mt={3}>
      <Button>
        <FaLinkedin />
      </Button>
      <Button>
        <GitHub />
      </Button>
      <Button>
        <FacebookOutlinedIcon />
      </Button>
    </Stack>
  );
}
