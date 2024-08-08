import { movingLineData } from "@/data";
import clsx from "clsx";
import Marquee from "react-fast-marquee";

const MovingLine = () => {
  const beforeMovingItem =
    "before:content-'' before:bg-about before:w-4 before:h-4 before:bg-contain before:bg-no-repeat before:bg-center before:mr-20";
  
    return (
    <div>
      <Marquee
        autoFill
        speed={80}
        className="py-4 md:py-6 text-white bg-primary bg-opacity-60 "
      >
        {movingLineData.map(({ id, text }) => (
          <div
            key={id}
            className={clsx(
              "mr-8 flex items-center justify-center md:mr-20 text-3xl font-medium uppercase",
              beforeMovingItem
            )}
          >
            <p>{text}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MovingLine;
