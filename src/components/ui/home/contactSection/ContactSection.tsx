import Heading from "@/components/shared/heading/Heading";
import { Box, Container, Stack, Typography } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import ContactFrom from "./ContactFrom";
import ContactSocialButtons from "./ContactSocialButtons";
import LottieImage from "./LottieImage";

export default function ContactSection() {
  return (
    <Box py={10} component={"div"}>
      <Heading title="CONTACT" subtitle="Let's Work together" />
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
          data-aos-duration="1800"
        >
          <LottieImage />

          <Box>
            <Stack
              direction={"row"}
              spacing={1}
              alignItems={"center"}
              color={"body2"}
            >
              <Typography fontWeight={"bold"} fontSize={"20px"}>
                <FaPhoneAlt />
              </Typography>
              <Typography fontWeight={"bold"} fontSize={"20px"}>
                +880 1319263016
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={1}
              alignItems={"center"}
              color={"body2"}
            >
              <Typography fontWeight={"bold"} fontSize={"20px"}>
                <IoMdMail />
              </Typography>
              <Typography fontWeight={"bold"} fontSize={"20px"}>
                sujoykumardas75@gmail.com
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Typography fontWeight={"bold"} fontSize={"20px"}>
                <IoLocation />
              </Typography>
              <Typography fontWeight={"bold"} fontSize={"20px"} color={"body2"}>
                Chandpur, Bangladesh
              </Typography>
            </Stack>
          </Box>

          <ContactSocialButtons />
        </Box>
        <Box
          sx={{ width: { xs: "100%", md: "50%" } }}
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1800"
        >
          <ContactFrom />
        </Box>
      </Stack>
    </Box>
  );
}
