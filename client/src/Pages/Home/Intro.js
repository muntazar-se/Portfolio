import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] gb-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi, i'm</h1>
      <h1 className="text-7xl sm:text-2xl text-secondary font-semibold">
        Muntadher Al-Akraa
      </h1>
      <h1 className="text-6xl sm:text-2xl text-white font-semibold">
        I build things for the web 👨🏻‍💻
      </h1>
      <p className="text-white w-2/3 sm:w-full">
        I create responsive, user-friendly web interfaces with a focus on clean
        design and seamless user experiences. My work emphasizes accessibility,
        performance, and crafting visually appealing, intuitive applications.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded sm:border-[1px] ">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
