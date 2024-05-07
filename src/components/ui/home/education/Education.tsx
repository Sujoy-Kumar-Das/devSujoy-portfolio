import Heading from "@/components/shared/heading/Heading";
import { Box, Container, Typography } from "@mui/material";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <Box py={10}>
      <Container>
        <Heading title="Education" subtitle="My Educational Journey" />
        <div className="w-full grid grid-cols-9">
          <div className="col-span-4 w-full h-full ">
            <Box
              sx={{
                height: "100%",
                width: "100%",
                backgroundColor: "primary.main",
                py: 2,
                px: 3,
                borderRadius: "6px",
              }}
            >
              <Typography
                variant="h5"
                component={"h1"}
                color={"primary.contrastText"}
                fontWeight={"medium"}
                pb={1}
                display={"flex"}
                alignItems={"center"}
              >
                <span className=" me-1">
                  <FaGraduationCap />
                </span>
                <span>Diploma in Computer Technology</span>
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"primary.contrastText"}
                fontWeight={"medium"}
                pb={1}
              >
                Completed Diploma in Computer Technology from Bangladesh Skill
                Development Institute in 2023.
              </Typography>
            </Box>
          </div>
          <Box className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
              1
            </div>
          </Box>
          <div className="col-span-4 w-full h-full"></div>

          {/* Stack 2 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
              2
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <Box
              sx={{
                height: "100%",
                width: "100%",
                backgroundColor: "primary.main",
                py: 2,
                px: 3,
                borderRadius: "6px",
              }}
            >
              <Typography
                variant="h5"
                component={"h1"}
                color={"primary.contrastText"}
                fontWeight={"medium"}
                pb={1}
                display={"flex"}
                alignItems={"center"}
              >
                <span className=" me-1">
                  <FaGraduationCap />
                </span>
                <span>Secondary School Certificate(S.S.C)</span>
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"primary.contrastText"}
                fontWeight={"medium"}
                pb={1}
              >
                Completed Secondary School Certificate(S.S.C) from Puran Bazar
                M.H. High School in 2018.
              </Typography>
            </Box>
          </div>
        </div>
      </Container>
    </Box>
  );
}
