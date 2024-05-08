"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProjectDetailSlider({ data }) {
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
          <Image alt="" src={item.link} width={800} height={100} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}