
import SectionTitle from '../../Components/SectionTitle'
import {projects } from "../../resoures/projects"
import React, { useState } from "react";

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div>
      <SectionTitle title="Projects"/>
      <div className="flex sm:gap-1 sm:flex-col mb-10 " >
    <div className="flex py-10 ">
        <div className="flex flex-col gap-10 sm:justify-between border-l-2 sm:border-l-0 border-[#135e4c82] sm:flex-row sm:overflow-x-scroll w-full">
          {projects.map((project, index) => (
            <div key={index} onClick={() => setSelectedItemIndex(index)}>
              <h1
                className={`text-xl px-10 py-3 cursor-pointer w-80 ${
                  selectedItemIndex === index
                    ? `text-tertiary border-tertiary border-l-4 sm:border-l-0 sm:border-t-2 -ml-1 bg-[#3c5147bd] `
                    : `text-white`
                } ${
                  hoveredIndex === index
                    ? "bg-[#13305e2f] transition duration-300 ease-in-out"
                    : "bg-transparent transition duration-300 ease-in-out"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div></div>
      </div>
         <div className="flex items-center gap-10 sm:flex-col sm:w-full">

         <div className=" mt-10 w-1/2 sm:w-full">
        <h1 className="text-secondary text-4xl py-5 ">{projects[selectedItemIndex].title}</h1>
        <h1 className="text-white text-wrap text-xl py-5  ">{projects[selectedItemIndex].description}</h1>
      </div>
      <dotlottie-player className='h-60 w-72 sm:w-full sm:h-full' src={projects[selectedItemIndex].image} background="transparent" speed="1" 
            loop
            autoplay
            ></dotlottie-player>

            </div>       
     
    </div>
    </div>
  )
}

export default Projects
