import { Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

const TextWriterAnimation = () => {
  return (
    <Typography
      component={"span"}
      variant="h5"
      sx={{ color: "primary.light" }}
      fontWeight={"medium"}
    >
      <Typewriter
        words={[
          "Frontend Developer.",
          "React Developer.",
          "MERN Stack Developer.",
        ]}
        loop={false}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </Typography>
  );
};

export default TextWriterAnimation;
