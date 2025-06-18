import { inViewItemVariants } from "@/animation/framerMotion/inview-animation";
import SocialIconButton from "@/components/shared/buttons/SocialIconButton";
import socialLinks from "@/staticData/socialLinks";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";

const aboutInfo = [
  { id: crypto.randomUUID(), title: "Name", value: "Sujoy Kumar Das" },
  {
    id: crypto.randomUUID(),
    title: "Email",
    value: "sujoykumardas75@gmail.com",
  },
  { id: crypto.randomUUID(), title: "Age", value: "24" },
  { id: crypto.randomUUID(), title: "From", value: "Chandpur,Bangladesh" },
];

const initialAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const PersonalInfoCard = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        width: { xs: "100%", md: "45%" },
      }}
      component={motion.div}
      variants={initialAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Typography
        variant="h3"
        color={"text.primary"}
        mb={3}
        component={motion.div}
        variants={inViewItemVariants}
      >
        Personal Info
      </Typography>

      <Grid container>
        {aboutInfo.map((info) => (
          <Grid
            key={info.id}
            item
            xs={12}
            md={6}
            component={motion.div}
            variants={inViewItemVariants}
          >
            <Box mb={2}>
              <Typography color={"text.primary"}>{info.title}:</Typography>
              <Typography>{info.value}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

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
};

export default PersonalInfoCard;
