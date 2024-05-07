import { Button, Stack, Typography } from "@mui/material";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function FooterContactInfo() {
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
        <Button
          sx={{
            height: { xs: 50, md: 70 },
            width: { xs: 50, md: 70 },
            borderRadius: "50%",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "bold",
          }}
          component={"a"}
          href=""
          target="_blank"
        >
          <FaFacebook />
        </Button>
        <Button
          sx={{
            height: { xs: 50, md: 70 },
            width: { xs: 50, md: 70 },
            borderRadius: "50%",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "bold",
          }}
          component={"a"}
          href=""
          target="_blank"
        >
          <FaLinkedin />
        </Button>

        <Button
          sx={{
            height: { xs: 50, md: 70 },
            width: { xs: 50, md: 70 },
            borderRadius: "50%",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "bold",
          }}
          component={"a"}
          href=""
          target="_blank"
        >
          <FaGithub />
        </Button>
      </Stack>
    </Stack>
  );
}
