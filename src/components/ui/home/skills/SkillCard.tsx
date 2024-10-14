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
      data-aos-duration="1200"
    >
      <Card
        sx={{
          backgroundColor: "background.default",
          px: 1,
          py: 3,
          borderRadius: "10px",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.2)",
            borderColor: "primary.main",
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
