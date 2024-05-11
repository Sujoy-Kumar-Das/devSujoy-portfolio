import Heading from "@/components/shared/heading/Heading";
import { Box, Button, Container, Grid } from "@mui/material";
import Link from "next/link";
import SkillCard from "./SkillCard";
import { TSkill } from "@/types/TSkills";
export default async function SkillSection() {
  const res = await fetch(`http://localhost:5000/skills?limit=${24}`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: skills } = await res.json();
  return (
    <Box py={16} sx={{ backgroundColor: "background.paper" }}>
      <Container>
        <Heading
          title="Skills"
          subtitle="Fluent in the Languages of Web Development"
        />
        <Grid container spacing={5}>
          {skills.map((skill: TSkill) => (
            <SkillCard skill={skill} key={skill._id} />
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            variant="outlined"
            component={Link}
            href="/skills"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1700"
          >
            Show All
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
