import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { navItems } from "../navbar/navItems";
import FooterContactInfo from "./FooterContactInfo";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      py={10}
      sx={{ backgroundColor: "primary.light" }}
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack direction={"row"} spacing={1}>
            {navItems.map((navItem, index) => (
              <Stack key={navItem.id} direction={"row"} spacing={1}>
                <Typography
                  component={Link}
                  href={navItem.link}
                  color={"body1"}
                  sx={{
                    transition: "color 0.5s ease, transform 0.5s ease",
                    "&:hover": {
                      color: "primary.contrastText",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {navItem.title}
                </Typography>
                {index !== navItems.length - 1 && (
                  <Typography component={"p"} color={"body1"}>
                    |
                  </Typography>
                )}{" "}
              </Stack>
            ))}
          </Stack>
        </Box>
        <Divider
          sx={{
            backgroundColor: "black",
            my: 3,
          }}
        />
        <FooterContactInfo />
      </Container>
    </Box>
  );
}
