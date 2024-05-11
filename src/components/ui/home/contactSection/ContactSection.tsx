"use client";
import Heading from "@/components/shared/heading/Heading";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Container, Stack, Typography } from "@mui/material";
import ContactFrom from "./ContactFrom";
import ContactSocialButtons from "./ContactSocialButtons";
export default function ContactSection() {
  return (
    <Box py={10} sx={{ backgroundColor: "background.paper" }} component={"div"}>
      <Heading title="CONTACT" subtitle="Let's Work together" />
      <Stack
        component={Container}
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={{ xs: 5, md: 0 }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box>
            <Stack
              direction={"row"}
              spacing={1}
              alignItems={"center"}
              color={"body2"}
            >
              <Typography fontWeight={"bold"} fontSize={"20px"}>
                <PhoneIcon />
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
                <MailIcon />
              </Typography>
              <Typography fontWeight={"bold"} fontSize={"20px"}>
                sujoykumardas75@gmail.com
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Typography fontWeight={"bold"} fontSize={"20px"}>
                <LocationOnIcon />
              </Typography>
              <Typography fontWeight={"bold"} fontSize={"20px"} color={"body2"}>
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
    </Box>
  );
}
