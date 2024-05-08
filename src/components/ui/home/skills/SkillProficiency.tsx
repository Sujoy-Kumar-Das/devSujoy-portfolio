import Heading from "@/components/shared/heading/Heading";
import { Box, Container, Stack, Typography } from "@mui/material";

type TSkill = {
  id: string;
  title: string;
  proficiency: string;
};

type TSkills = {
  _id: string;
  frontend: TSkill[];
  backend: TSkill[];
  tools: TSkill[];
};

export default function SkillProficiency({ skills }: { skills: TSkills[] }) {
  return (
    <Container>
      <Heading
        title="Skills"
        subtitle="Fluent in the Languages of Web Development"
      />
      <Box>
        <Typography
          fontWeight={"bold"}
          fontSize={{ xs: "16px", md: "24px" }}
          color={"primary.main"}
        >
          Frontend
        </Typography>

        {skills[0].frontend?.map((frontendSkill: TSkill) => (
          <Box key={frontendSkill.id} sx={{ cursor: "pointer" }}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={1}
              mt={3}
            >
              <Typography textTransform={"uppercase"} color={"body1"}>
                {frontendSkill.title}
              </Typography>
              <Typography color={"body1"}>
                {frontendSkill.proficiency}
              </Typography>
            </Stack>

            <Box position={"relative"}>
              <Box
                sx={{
                  height: 5,
                  width: "100%",
                  backgroundColor: "primary.light",
                  borderRadius: "20px",
                }}
              ></Box>

              <Box
                sx={{
                  height: 5,
                  width: frontendSkill.proficiency,
                  backgroundColor: "primary.main",
                  position: "absolute",
                  top: 0,
                  borderRadius: "20px",
                }}
              ></Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box my={6}>
        <Typography
          fontWeight={"bold"}
          fontSize={{ xs: "16px", md: "24px" }}
          color={"primary.main"}
        >
          Backend
        </Typography>

        {skills[0]?.backend?.map((backendSkill: TSkill) => (
          <Box key={backendSkill.id} sx={{ cursor: "pointer" }}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={1}
              mt={3}
            >
              <Typography textTransform={"uppercase"} color={"body1"}>
                {backendSkill.title}
              </Typography>
              <Typography color={"body1"}>
                {backendSkill.proficiency}
              </Typography>
            </Stack>

            <Box position={"relative"}>
              <Box
                sx={{
                  height: 5,
                  width: "100%",
                  backgroundColor: "primary.light",
                  borderRadius: "20px",
                }}
              ></Box>

              <Box
                sx={{
                  height: 5,
                  width: backendSkill.proficiency,
                  backgroundColor: "primary.main",
                  position: "absolute",
                  top: 0,
                  borderRadius: "20px",
                }}
              ></Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box>
        <Typography
          fontWeight={"bold"}
          fontSize={{ xs: "16px", md: "24px" }}
          color={"primary.main"}
        >
          Software and Tools
        </Typography>

        {skills[0]?.tools?.map((tool: TSkill) => (
          <Box key={tool.id} sx={{ cursor: "pointer" }}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={1}
              mt={3}
            >
              <Typography textTransform={"uppercase"} color={"body1"}>
                {tool.title}
              </Typography>
              <Typography color={"body1"}>{tool.proficiency}</Typography>
            </Stack>

            <Box position={"relative"}>
              <Box
                sx={{
                  height: 5,
                  width: "100%",
                  backgroundColor: "primary.light",
                  borderRadius: "20px",
                }}
              ></Box>

              <Box
                sx={{
                  height: 5,
                  width: tool.proficiency,
                  backgroundColor: "primary.main",
                  position: "absolute",
                  top: 0,
                  borderRadius: "20px",
                }}
              ></Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
