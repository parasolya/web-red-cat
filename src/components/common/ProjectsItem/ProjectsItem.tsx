import { ProjectsItemProps } from "@/@types";
import Image from "next/image";
import React from "react";

const ProjectsItem: React.FC<ProjectsItemProps> = ({ src, alt }) => {
  return (
    <div className="w-full relative h-[248px] overflow-hidden sm:w-[448px] md:h-[324px] md:w-[330px] lg:w-[584px] shadow-lg shadow-slate-600/50">
      <Image
        className="object-cover"
        fill
        src={src}
        alt={alt}
        sizes="(max-width: 768px) 448px, (max-width: 1280px) 330px, 593px"
        priority
      />
    </div>
  );
};

export default ProjectsItem;
