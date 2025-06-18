import { Box, Container, Stack, Typography } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import ContactFrom from "./ContactFrom";
import ContactSocialButtons from "./ContactSocialButtons";
import LottieImage from "./LottieImage";
export default function ContactInfo() {
  return (
    <Stack
      component={Container}
      direction={{ xs: "column", md: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      spacing={{ xs: 5, md: 0 }}
    >
      <Box
        sx={{ width: { xs: "100%", md: "50%" } }}
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1200"
      >
        <LottieImage />

        <Box>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            color={"body2"}
          >
            <Typography
              fontWeight={"bold"}
              fontSize={"20px"}
              sx={{ cursor: "pointer" }}
            >
              <FaPhoneAlt />
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"20px"}
              sx={{ cursor: "pointer" }}
            >
              +880 1319263016
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            color={"body2"}
          >
            <Typography
              fontWeight={"bold"}
              fontSize={"20px"}
              sx={{ cursor: "pointer" }}
            >
              <IoMdMail />
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"20px"}
              sx={{ cursor: "pointer" }}
            >
              sujoykumardas75@gmail.com
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Typography
              fontWeight={"bold"}
              fontSize={"20px"}
              sx={{ cursor: "pointer" }}
            >
              <IoLocation />
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={"20px"}
              color={"body2"}
              sx={{ cursor: "pointer" }}
            >
              Chandpur, Bangladesh
            </Typography>
          </Stack>
        </Box>

        <ContactSocialButtons />
      </Box>

      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <ContactFrom />
      </Box>
    </Stack>
  );
}
