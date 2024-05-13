import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import NavChangeColor from "./NavChangeColor";
import NavMenuButton from "./NavMenuButton";
import { navItems } from "./navItems";

export default function Navbar() {
  return (
    <NavChangeColor>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        component={Container}
      >
        <Typography
          component={Link}
          href={"/"}
          variant="h5"
          fontWeight={"bold"}
          color={" body1"}
          className=" cursor-pointer"
        >
          DevSujoy
        </Typography>

        <Stack
          direction={"row"}
          display={{ xs: "none", md: "flex" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={5}
        >
          {navItems.map((navItem) => (
            <Box
              component={"div"}
              key={navItem.id}
              sx={{ position: "relative" }}
              className="group"
            >
              <Typography
                component={Link}
                href={navItem.link}
                color={"body1"}
                fontWeight={"medium"}
              >
                {navItem.title}
              </Typography>
              <Box
                component={"div"}
                sx={{ backgroundColor: "primary.main" }}
                className="absolute bottom-0 left-0 right-0 h-[2px]  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
              ></Box>
            </Box>
          ))}
        </Stack>

        <Box component={"div"}>
          <Button
            component={"a"}
            href="/contact"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Hire Me
          </Button>
          <NavMenuButton />
        </Box>
      </Stack>
    </NavChangeColor>
  );
}
