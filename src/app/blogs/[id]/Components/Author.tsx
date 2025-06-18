import { formatDate } from "@/utils/format-date";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { StaticImageData } from "next/image";

interface AuthorProps {
  name: string;
  image: StaticImageData;
  createdAt: string;
}

export default function Author({ author }: { author: AuthorProps }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center" mb={4}>
      <Avatar
        src={author?.image.src}
        alt="Sujoy Kumar Das"
        sx={{
          width: 48,
          height: 48,
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
      <Box sx={{ color: "text.secondary" }}>
        <Typography fontWeight={500}>{author.name}</Typography>
        <Typography variant="body2">{formatDate(author?.createdAt)}</Typography>
      </Box>
    </Stack>
  );
}
