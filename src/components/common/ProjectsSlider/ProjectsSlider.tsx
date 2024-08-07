"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Button from "@/components/ui/Button";
import { projectsItemData } from "@/data";
import ProjectsItem from "../ProjectsItem";

import styles from "./ProjectsSlider.module.css";

const ProjectsSlider = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1280: { slidesPerView: 2, spaceBetween: 60 },
        }}
        className={`h-[298px] md:h-[380px] mySwiper`}
      >
        {projectsItemData.map(({ id, src, alt }) => (
          <SwiperSlide key={id}>
            <ProjectsItem src={src} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-navigation relative flex gap-8 mb-8">
        <Button variant="slider" className="prev left-[257px]" type="button">
          Prev
        </Button>
        <Button variant="slider" className="next right-[257px]" type="button">
          Next
        </Button>
      </div>
    </div>
  );
};

export default ProjectsSlider;
