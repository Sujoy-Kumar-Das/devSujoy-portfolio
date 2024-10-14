"use client";
import { TProject } from "@/types/Tproject";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";

export default function ProjectSlider({ projects }: { projects: TProject[] }) {
  return (
    <Swiper
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1200"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }}
      modules={[Autoplay]}
      style={{
        borderRadius: "10px",
      }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project._id}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
