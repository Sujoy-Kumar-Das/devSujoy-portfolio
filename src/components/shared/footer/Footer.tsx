import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { navItems } from "../navbar/navItems";
import FooterContactInfo from "./FooterContactInfo";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      py={10}
      sx={{ backgroundColor: "primary.light", color: "white" }}
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <Container>
        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <Stack direction={"row"} spacing={2}>
            {navItems.map((navItem, index) => (
              <Stack
                key={navItem.id}
                direction={"row"}
                spacing={1}
                alignItems="center"
              >
                <Typography
                  component={Link}
                  href={navItem.link}
                  variant="h6"
                  sx={{
                    color: "white",
                    position: "relative",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "primary.contrastText",
                    },
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      height: "2px",
                      backgroundColor: "primary.contrastText",
                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease-in-out",
                    },
                    "&:hover:before": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {navItem.title}
                </Typography>
                {index !== navItems.length - 1 && (
                  <Typography
                    component={"span"}
                    color={"white"}
                    fontWeight="bold"
                  >
                    |
                  </Typography>
                )}
              </Stack>
            ))}
          </Stack>
        </Box>

        <Divider
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            my: 3,
          }}
        />

        {/* Footer Contact Info */}
        <FooterContactInfo />

        {/* Footer Copyright */}
        <Box textAlign="center" mt={4} color="white">
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Sujoy Kumar Das. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
