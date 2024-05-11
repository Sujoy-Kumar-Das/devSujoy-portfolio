import { TSkill } from "@/types/TSkills";
import { Box, Card, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function SkillCard({ skill }: { skill: TSkill }) {
  return (
    <Grid
      item
      xs={6}
      md={2}
      data-aos="flip-left"
      data-aos-easing="linear"
      data-aos-duration="1700"
    >
      <Card
        sx={{
          backgroundColor: "background.default",
          px: 1,
          py: 3,
          borderRadius: "10px",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            border: "1px solid #1586FD",
            transform: "scale(1.05)",
          },
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={skill.image} alt="" height={50} width={50} />
        </Box>
        <Box sx={{ marginTop: "auto" }}>
          <Typography textAlign="center" py={2} fontSize={16} fontWeight="bold">
            {skill.title}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
}
