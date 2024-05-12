"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./BlogCard";

export default function BlogSlider({ blogs }) {
  return (
    <Swiper
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1800"
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {blogs.map((blog) => (
        <SwiperSlide key={blog._id}>
          <BlogCard blog={blog} bgcolor={true} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
