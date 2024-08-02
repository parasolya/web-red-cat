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
        slidesPerView={2}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}

        className='swiper h-[100px]'
      >
        <SwiperSlide className="bg-slate-500">slide 1</SwiperSlide>
        <SwiperSlide className="bg-slate-500">slide 2</SwiperSlide>
        <SwiperSlide className="bg-slate-500">slide 3</SwiperSlide>
        <SwiperSlide className="bg-slate-500">Slide 4</SwiperSlide>
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