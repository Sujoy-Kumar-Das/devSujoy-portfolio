import { Box, Typography } from "@mui/material";

export default function Heading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Box
      component={"div"}
      mb={5}
      sx={{
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        component={"h1"}
        variant="h2"
        fontWeight={"bold"}
        textTransform={"capitalize"}
        color="text.primary"
        mb={1}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        sx={{
          display: "inline-block",
          borderRadius: "5px",
          padding: "5px 10px",
        }}
      >
        {title}
      </Typography>
      <Typography
        component={"h5"}
        variant="h5"
        fontWeight={"medium"}
        textTransform={"capitalize"}
        color="text.secondary"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        sx={{
          lineHeight: 1.6,
          marginTop: "0.5rem",
          padding: "0 15px",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
