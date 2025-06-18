import socialLinks from "@/staticData/socialLinks";
import { Button, Stack, Typography } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function FooterContactInfo() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent={{ xs: "center", md: "space-between" }}
      alignItems={"center"}
      spacing={{ xs: 3, md: 4 }}
    >
      {/* Phone Section */}
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Button
          sx={{
            height: { xs: 50, md: 60 },
            width: { xs: 50, md: 60 },
            borderRadius: "50%",
            fontSize: { xs: "18px", md: "22px" },
            backgroundColor: "primary.main",
            color: "white",
            transition: "background-color 0.3s ease, transform 0.3s ease",
            "&:hover": {
              backgroundColor: "primary.light",
              transform: "scale(1.1)",
            },
          }}
        >
          <FaPhoneAlt />
        </Button>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: { xs: "18px", md: "22px" },
            color: "text.primary",
            cursor: "pointer",
            transition: "color 0.3s ease, transform 0.3s ease",
            "&:hover": {
              color: "text.secondary",
            },
          }}
        >
          +880 1319263016
        </Typography>
      </Stack>

      {/* Email Section */}
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Button
          sx={{
            height: { xs: 50, md: 60 },
            width: { xs: 50, md: 60 },
            borderRadius: "50%",
            fontSize: { xs: "18px", md: "22px" },
            backgroundColor: "primary.main",
            color: "white",
            transition: "background-color 0.3s ease, transform 0.3s ease",
            "&:hover": {
              backgroundColor: "primary.light",
              transform: "scale(1.1)",
            },
          }}
        >
          <MdOutlineMail />
        </Button>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: { xs: "18px", md: "22px" },
            color: "text.primary",
            cursor: "pointer",
            transition: "color 0.3s ease, transform 0.3s ease",
            "&:hover": {
              color: "text.secondary",
            },
          }}
        >
          sujoykumardas75@gmail.com
        </Typography>
      </Stack>

      {/* Social Links Section */}
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        {socialLinks.map((socialLink) => (
          <Button
            key={socialLink.id}
            sx={{
              height: { xs: 50, md: 60 },
              width: { xs: 50, md: 60 },
              borderRadius: "50%",
              fontSize: { xs: "18px", md: "22px" },
              backgroundColor: "primary.main",
              color: "white",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.dark",
                transform: "scale(1.1)",
              },
            }}
            component={"a"}
            href={socialLink.link}
            target="_blank"
          >
            {socialLink.icon}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
