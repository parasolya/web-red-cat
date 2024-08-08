import { TitleProps } from "@/@types";
import clsx from "clsx";


const Title: React.FC<TitleProps> = ({ firstWords, secondWords,  firstWordsClassName,
  secondWordsClassName }) => {
  return (
    <>
      <h1 className={clsx("text-titleBrown font-thin text-[40px] md:text-[67px] lg:text-[98px] tracking-tight leading-none uppercase", firstWordsClassName)}>
        {firstWords}{' '}
        <span className={clsx("font-medium", secondWordsClassName)}>{secondWords}</span>
      </h1>
    </>
  );
};

export default Title;
