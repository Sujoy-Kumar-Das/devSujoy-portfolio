"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type TProductImage = {
  id: string;
  link: string;
};

export default function ProjectDetailSlider({
  data,
}: {
  data: TProductImage[];
}) {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {data?.map((item) => (
        <SwiperSlide
          key={item.id}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "50vh",
              overflow: "hidden",
              borderRadius: "10px",
            }}
          >
            <Image
              src={item.link}
              alt=""
              layout="fill"
              objectFit="cover"
              style={{
                position: "absolute",
              }}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
