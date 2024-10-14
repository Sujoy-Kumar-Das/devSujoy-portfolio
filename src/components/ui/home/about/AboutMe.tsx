import me2 from "@/assets/devImage/me2.png";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import SocialButtons from "./SocialButtons";
export default function AboutMe() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      component={Container}
      spacing={4}
      id="about"
    >
      <Box
        position={"relative"}
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1200"
      >
        <Box
          sx={{
            backgroundColor: "primary.light",
            width: 300,
            height: 350,
            position: "relative",
            zIndex: 1,
            border: "2px solid #1586FD ",
            borderRadius: "10px",
          }}
        >
          <Image
            src={me2}
            alt="dev image"
            style={{ borderRadius: "10px", position: "absolute", bottom: 0 }}
          />
        </Box>
        <Box
          border={"2px solid #1586FD"}
          position={"absolute"}
          top={15}
          left={18}
          height={350}
          width={300}
          zIndex={0}
          borderRadius={"10px"}
        ></Box>
      </Box>

      <Box
        sx={{ width: { xs: "100%", md: "50%" } }}
        data-aos="fade-up-left"
        data-aos-easing="linear"
        data-aos-duration="1200"
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1} mb={1}>
          <Typography
            fontSize={{ xs: 16, md: 24 }}
            fontWeight={"bold"}
            sx={{ overflow: "hidden" }}
          >
            About Me
          </Typography>
          <Box height={"3px"} width={"10%"} bgcolor={"primary.main"}></Box>
        </Stack>
        <Typography
          component={"h1"}
          color={"body1"}
          textAlign={"justify"}
          sx={{
            fontSize: { xs: "30px", md: "50px" },
            fontWeight: "medium",
          }}
        >
          I&rsquo;m Sujoy Kumar Das
        </Typography>
        <Typography
          component={"p"}
          variant="body1"
          color={"body2"}
          textAlign={"left"}
          my={1}
        >
          I create high-quality and user-friendly web applications with React
          JS. Currently, I am exploring the backend with node js, Express js,and
          MongoDB. My goal is to become a proficient MERN stack developer within
          a year.
        </Typography>
        <SocialButtons />

        <Stack
          component={"div"}
          mt={3}
          direction={"row"}
          alignItems={"center"}
          spacing={2}
        >
          <Button
            component="a"
            href="https://drive.google.com/uc?export=download&id=16lBfJX3BxGFqolmV3F_yfbZaQLi9o5ED"
            target="_blank"
          >
            Hire Me
          </Button>

          <Button
            variant="outlined"
            component="a"
            href="https://drive.google.com/uc?export=download&id=16lBfJX3BxGFqolmV3F_yfbZaQLi9o5ED"
            target=""
          >
            Download Resume
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
