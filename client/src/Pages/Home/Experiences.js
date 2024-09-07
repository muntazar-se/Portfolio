import React, { useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { experiences } from "../../resoures/experiences";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title="Experience" />

      <div className="flex">

        <div className="flex flex-col gap-5">
          {experiences.map((experience, index) => (
            <div >
              <h1
                className={` text-xl ${
                  selectedItemIndex === index
                    ? `text-tertiary border-tertiary`
                    : `text-white`
                }`}
              onClick={() => setSelectedItemIndex(index)}>
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Experiences;
