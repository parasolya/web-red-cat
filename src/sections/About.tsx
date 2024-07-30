import Title from "@/components/ui/Title";
import { aboutData } from "@/data";

const About: React.FC = () => {
  return (
    <section id={aboutData.id} className="section text-white font-extralight bg-about bg-brown">
      <div className="container">
        <div className="md:flex justify-between lg:gap-[24px]">
          <div className="md:w-2/3 lg:w-[628px] md:flex flex-col justify-between mb-4 md:mb-0">
            <Title
              firstWords={aboutData.title.firstWords}
              secondWords={aboutData.title.secondWords}
              firstWordsClassName='text-white'
            />
          </div>
          <div className="w-[180px] md:w-[218px] lg:w-1/2 lg:mb-[72px]">
            <div className="lg:w-1/2 space-y-5 md:space-y-4">
              <p className="">
                <span className="font-bold">{aboutData.description1.span}</span>{" "}
                {aboutData.description1.text}
              </p>
              {/* <p className="">
                <span className="font-bold">{aboutData.description2.span}</span>{" "}
                {aboutData.description2.text}
              </p> */}
            </div>
          </div>
        </div>

        <div className="w-full md:flex flex-col lg:flex-row gap-[64px] lg:justify-between md:-mt-[60px] lg:mt-0">
          <div className="order-1 lg:order-2 w-full lg:w-2/5 flex justify-end md:justify-start lg:justify-end">
            <div className="mt-8 md:mt-0">
              <p className="lg:tracking-[0.12em] font-semibold uppercase">
                Innovation Meets
              </p>
              <p className="lg:tracking-[0.12em] font-semibold text-end uppercase">
                Excellence
              </p>
              <p className="lg:tracking-[0.12em] ">
                Experience the synergy of fresh ideas with our team.
              </p>
            </div>
          </div>

          <div className="order-2 lg:order-1 lg:w-full md:flex justify-center md:justify-end lg:justify-between">
            <div className="order-1 lg:order-2 w-full lg:w-2/5 flex justify-end md:justify-start">
              <div className="mt-8 md:mt-0">
                <p className="lg:tracking-[0.12em] font-semibold  uppercase">
                  Your Success,
                </p>
                <p className="lg:tracking-[0.12em] font-semibold text-end uppercase">
                  Our Mission
                </p>
                <p className="lg:tracking-[0.12em] ">
                  We don’t just build websites; we build your digital future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
