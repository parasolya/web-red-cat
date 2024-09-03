"use client";

import ScrollButton from "@/components/ui/ScrollButton";
import Title from "@/components/ui/Title";
import { heroData } from "@/data";

const Hero = () => {
  return (
    <section
      id={heroData.id}
      className="pt-[230px] pb-26 text-white bg-cover bg-center bg-no-repeat bg-heroDesk"
    >
      <div className="container">
        <div className="md:flex justify-between lg:gap-[24px]">
          <div className="md:w-2/3 lg:w-[628px] md:flex flex-col justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="font-thin text-[40px] md:text-[67px] lg:text-[98px] tracking-tight leading-none uppercase">
                {heroData.title.firstWords} <br />
                <span className={"font-medium text-primary"}>
                  {heroData.title.secondWords}
                </span>
              </h1>
            </div>
          </div>
          <div className="w-[180px] md:w-[218px] lg:w-1/2">
            <div className="lg:w-1/2 space-y-5 md:space-y-20">
              <p className="font-extralight">
                <span className="font-bold">{heroData.description.span}</span>{" "}
                {heroData.description.text}
              </p>
              <ScrollButton variant="main" to="contacts">
                {heroData.textButton}
              </ScrollButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
