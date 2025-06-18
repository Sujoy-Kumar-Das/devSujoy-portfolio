"use client";
import {
  inViewContainerVariants,
  inViewItemVariants,
} from "@/animation/framerMotion/inview-animation";
import SocialIconButton from "@/components/shared/buttons/SocialIconButton";
import socialLinks from "@/staticData/socialLinks";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
const contactInfo = [
  {
    id: crypto.randomUUID(),
    title: "Address",
    value: "Chandpur, Bangladesh",
    icon: <LocationOnIcon />,
  },
  {
    id: crypto.randomUUID(),
    title: "Email",
    value: "sujoykumardas75@gmail.com",
    icon: <EmailIcon />,
  },
  {
    id: crypto.randomUUID(),
    title: "Phone",
    value: "+880 1319263016",
    icon: <LocalPhoneIcon />,
  },
];
export default function ContactLeftSection() {
  return (
    <Box
      sx={{ width: { xs: "100%", md: "50%" } }}
      component={motion.div}
      initial="hidden"
      variants={inViewContainerVariants}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Box mb={2}>
        <Typography
          color={"text.primary"}
          variant="h3"
          mb={1}
          component={motion.h3}
          variants={inViewItemVariants}
        >
          Contact Information
        </Typography>
        <Typography
          component={motion.p}
          variants={inViewItemVariants}
          color={"text.secondary"}
          variant="body1"
        >
          Feel free to reach out to me for any questions or opportunities. I
          {"'"}ll get back to you as soon as possible.
        </Typography>
      </Box>

      <Stack sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {contactInfo.map((info) => (
          <Stack
            key={info.id}
            direction={"row"}
            spacing={1}
            alignItems={"center"}
          >
            <Box
              component={motion.div}
              variants={inViewItemVariants}
              sx={{
                backgroundColor: "primary.light",
                color: "primary.contrastText",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                mt: 0.5,
              }}
            >
              {info.icon}
            </Box>
            <Box>
              <Typography
                color="text.primary"
                component={motion.h3}
                variants={inViewItemVariants}
              >
                {info.title}
              </Typography>
              <Typography
                color={"text.secondary"}
                variant="body1"
                component={motion.p}
                variants={inViewItemVariants}
              >
                {info.value}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>

      <Stack direction={"row"} spacing={1} mt={2} alignItems={"center"}>
        {socialLinks.map((socialLink) => (
          <Box component={motion.div} variants={inViewItemVariants}>
            <SocialIconButton
              key={socialLink.id}
              icon={socialLink.icon}
              link={socialLink.link}
              title={socialLink.title}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
