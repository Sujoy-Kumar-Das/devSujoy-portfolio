import SkillGrid from "@/components/ui/home/skills/SkillGrid";
import { Container } from "@mui/material";

export default async function SkillPage() {
  const res = await fetch(`https://backend-rosy-chi.vercel.app/skills`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: skills } = await res.json();
  return (
    <Container sx={{ py: 10 }}>
      <SkillGrid skills={skills} />
    </Container>
  );
}
