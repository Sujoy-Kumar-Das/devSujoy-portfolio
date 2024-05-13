import { Box, Typography } from "@mui/material";

export default function Heading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Box component={"div"} mb={10}>
      <Typography
        component={"h1"}
        variant="h2"
        fontWeight={"bold"}
        textAlign={"center"}
        textTransform={"capitalize"}
        color={"body1"}
        mb={1}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        {title}
      </Typography>
      <Typography
        component={"h5"}
        variant="h5"
        fontWeight={"medium"}
        textAlign={"center"}
        textTransform={"capitalize"}
        color={"body2"}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
