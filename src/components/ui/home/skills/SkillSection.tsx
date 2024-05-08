import { Box } from "@mui/material";
import SkillProficiency from "./SkillProficiency";

export default async function SkillSection() {
  const res = await fetch("https://backend-rosy-chi.vercel.app/skills", {
    next: {
      revalidate: 30,
    },
  });
  const { data: skills } = await res.json();
  return (
    <Box py={16} sx={{ backgroundColor: "background.paper" }}>
      <SkillProficiency skills={skills} />
    </Box>
  );
}
