import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

interface ProjectDataListProps {
  title: string;
  data: {
    _id: string;
    title: string;
  }[];
}
export default function ProjectDataList({ title, data }: ProjectDataListProps) {
  return (
    <Box>
      <Typography variant="h6" fontWeight={600}>
        {title}
      </Typography>
      <List sx={{ listStyleType: "disc" }}>
        {data.map((item, index) => (
          <ListItem
            key={item._id || index}
            disableGutters
            sx={{ display: "list-item", py: 0.5 }}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
