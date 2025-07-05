"use client";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import ProjectImageCard from "./ProjectImageCard";

interface IImage {
  link: string;
  _id: string;
}

export default function ProjectImageGallery({ images }: { images: IImage[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImageLink = images[currentImageIndex].link;

  return (
    <Box component="section" mb={6} mt={6}>
      <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
        {/* Large Image - takes full height */}
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Box sx={{ width: "100%" }}>
            <ProjectImageCard imageLink={currentImageLink} isLarge />
          </Box>
        </Grid>

        {/* Thumbnail Container - matches large image height */}
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Grid
            container
            spacing={2}
            sx={{ height: "100%", alignContent: "flex-start" }}
          >
            {images.map((image, index) => (
              <Grid
                item
                xs={6}
                key={image._id || index}
                onClick={() => setCurrentImageIndex(index)}
                sx={{ display: "flex" }} // Important for equal height
              >
                <ProjectImageCard imageLink={image.link} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
