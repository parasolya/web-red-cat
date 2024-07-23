'use client'

import LinkButton from "@/components/ui/LinkButton";
import Title from "@/components/ui/Title";

const Hero = () => {
  return (
    <section id="hero" className="pt-[180px] pb-26">
      <div className="container">
        <div className="md:flex justify-between lg:gap-[24px]">
          <div className="md:w-2/3 lg:w-[628px] md:flex flex-col justify-between">
            <div className="mb-4 md:mb-0">
              <Title firstWords="Red" secondWords="Web Cat" />
            </div>
          </div>
          <div className="w-[180px] md:w-[218px] lg:w-1/2">
            <div className="lg:w-1/2 space-y-5 md:space-y-4">
              <p className="font-thin">
                <span className="font-normal">a team of enthusiasts</span> who
                are fully committed to the mission of creating unforgettable and
                extraordinary trips to the most beautiful parts of the
                Carpathians. Our goal is not just to show you the natural
                wonders of the mountains, but to provide you with a deep
                immersion in their magical atmosphere.
              </p>
              <LinkButton variant="main" to="about">
                Зв'язатися
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
