"use client";

import LinkButton from "@/components/ui/LinkButton";
import Title from "@/components/ui/Title";
import { heroData } from "@/data";

const Hero = () => {
  return (
    <section id={heroData.id} className="pt-[180px] pb-26">
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
            <div className="lg:w-1/2 space-y-5 md:space-y-4">
              <p className="font-thin">
                <span className="font-normal">
                  {heroData.description.span}
                  <br />
                </span>
                {heroData.description.text}
              </p>
              <LinkButton variant="main" to="about">
                {heroData.textButton}
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
