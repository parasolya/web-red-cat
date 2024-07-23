import Title from "@/components/ui/Title";
import { advantagesData } from "@/data";
import React from "react";

const OurAdvantages = () => {
  return (
    <section id={advantagesData.id} className="section">
      <div className="container">
        <div className="md:w-2/3 lg:w-[628px] md:flex flex-col justify-between mb-4 md:mb-0">
          <Title
            firstWords={advantagesData.title.firstWords}
            secondWords={advantagesData.title.secondWords}
          />
        </div>
      </div>
    </section>
  );
};

export default OurAdvantages;
