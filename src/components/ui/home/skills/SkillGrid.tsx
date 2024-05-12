import { TSkill } from "@/types/TSkills";
import { Grid } from "@mui/material";
import SkillCard from "./SkillCard";

export default function SkillGrid({ skills }: { skills: TSkill[] }) {
  return (
    <Grid container spacing={5}>
      {skills.map((skill: TSkill) => (
        <SkillCard skill={skill} key={skill._id} />
      ))}
    </Grid>
  );
}
