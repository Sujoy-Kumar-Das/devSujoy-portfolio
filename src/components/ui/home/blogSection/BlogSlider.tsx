"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./BlogCard";

export default function BlogSlider({ blogs }: { blogs: any }) {
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
      {blogs.map((blog: any) => (
        <SwiperSlide key={blog._id}>
          <BlogCard blog={blog} bgColor={false} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
