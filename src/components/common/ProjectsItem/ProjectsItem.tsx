import { ProjectsItemProps } from '@/@types'
import Image from 'next/image'
import React from 'react'

const ProjectsItem: React.FC<ProjectsItemProps> = ({ src, alt}) => {
  return (
    <div className='w-full relative h-[229px] overflow-hidden sm:w-[448px] md:h-[320px] md:w-[330px] lg:w-[560px] '>
       <Image
              className='object-cover'
              fill
              src={src}
              alt={alt}
              sizes='(max-width: 768px) 448px, (max-width: 1280px) 330px, 560px'
              priority
            />
    </div>
  )
}

export default ProjectsItem
