import { Chip, Stack } from "@mui/material";

export default function BlogTagList({ tags }: { tags: string[] }) {
  return (
    <Stack direction="row" spacing={1} mb={3}>
      {tags.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
            fontWeight: 500,
          }}
        />
      ))}
    </Stack>
  );
}
