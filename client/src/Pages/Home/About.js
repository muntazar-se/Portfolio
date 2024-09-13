import React from "react";
import SectionTitle from "../../Components/SectionTitle";

function About() {
    const skills= [
        "JavaScript",
         "React.js",
         "Node.js",
         "Express.js",
         "MongoDB",
]
  return (
    <div className="">
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col mb-10">
        <div className="h-[40vh] w-1/2  sm:w-full">
          <dotlottie-player
            src="https://lottie.host/b9dde84f-5637-4101-a176-6554220614ef/AsiB3QYHDl.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full ml-10">
          <p className="text-white text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            temporibus maxime voluptatibus ipsum nulla incidunt vel nemo,
            dolorem laboriosam nihil quas unde distinctio facilis ipsam hic,
            dolores nobis assumenda provident.
          </p>
          <p className="text-white text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            natus eum illo architecto recusandae ullam reiciendis distinctio
            repudiandae sint sit omnis reprehenderit doloribus eveniet,
            molestiae saepe qui, blanditiis esse numquam!
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few Technologies I've been working with:
        </h1>
       <div className="flex flex-wrap gap-10 mt-5 mb-10">
       {skills.map((skill, index) => (
          <div key={index} className="border-2 border-tertiary text-tertiary px-10 py-3 ">
            {skill}
          </div>
        ))}
       </div>
      </div>
    </div>
  );
}

export default About;
