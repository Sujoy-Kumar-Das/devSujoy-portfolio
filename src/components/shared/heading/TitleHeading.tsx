import { Box, Stack, Typography } from "@mui/material";

export default function TitleHeading({ title }: { title: string }) {
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={1} mb={5}>
      <Typography fontSize={{ xs: 16, md: 24 }} fontWeight={"bold"}>
        {title}
      </Typography>
      <Box height={"3px"} width={"10%"} bgcolor={"primary.main"}></Box>
    </Stack>
  );
}
