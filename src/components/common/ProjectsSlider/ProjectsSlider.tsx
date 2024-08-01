"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Button from "@/components/ui/Button";

const ProjectsSlider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        // navigation
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        effect="fade"
        // loop={true}
      >
        <SwiperSlide>slide 1</SwiperSlide>
        <SwiperSlide>slide 2</SwiperSlide>
        <SwiperSlide>slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <div className="swiper-navigation">
        <Button variant="slider" className="prev" type="button">
          Prev
        </Button>
        <Button variant="slider" className="next" type="button">
          Next
        </Button>
      </div>
    </>
  );
};

export default ProjectsSlider;
