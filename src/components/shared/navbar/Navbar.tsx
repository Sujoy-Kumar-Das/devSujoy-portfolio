import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import NavChangeColor from "./NavChangeColor";
import { navItems } from "./navItems";
import NavLink from "./NavLink";
import NavMenuButton from "./NavMenuButton";

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
          color={"primary.main"}
          sx={{
            cursor: "pointer",
            textDecoration: "none",
          }}
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
            <NavLink navItem={navItem} key={navItem.id} />
          ))}
        </Stack>

        <Box component={"div"}>
          <Button
            component={"a"}
            href="#contact"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            Hire Me
          </Button>
          <NavMenuButton />
        </Box>
      </Stack>
    </NavChangeColor>
  );
}
