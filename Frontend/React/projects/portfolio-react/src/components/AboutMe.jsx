import React from "react";


const AboutMe = () => {

 

  return (
    <div className="w-full py-20 px-8" id="about">
      <div className=" w-full flex flex-col justify-center items-center  gap-8">
        <div className="w-full flex items-center gap-4 justify-center">
          <h1 className="title text-blue-400 text-3xl md:text-4xl mask-b-from-60% text-shadow-sm/30 text-shadow-zinc-600">
            Juan Agudelo
          </h1>
          <img src="code-3.png" alt="" className="icon h-8 w-8" />
        </div>
        <p className="parag text-zinc-400 text-justify">
          100% self-taught developer focused on responsive design, mobile-first
          approach, ensuring content adapts to available space. Skilled in HTML,
          CSS, JS, React, TailwindCSS, and Firebase (Auth, Firestore, Storage),
          continuously improving skills with the goal of becoming a full-stack
          developer.
        </p>
        <div
          className="w-full flex  justify-center items-center gap-10"
          id="btns-links"
        >
          <a
            href="https://github.com/Juanagudelo9007"
            className="btn relative px-4 py-2 border border-black bg-white sm:bg-transparent sm:border-transparent  overflow-hidden group cursor-pointer rounded-md text-xs font-bold tracking-normal mask-b-from-40%"
            target="_blank"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white  transition-transform duration-400 rounded-md"></span>
            <span className="relative z-10 text-blue-500 transition-colors duration-400  capitalize  text-sm">
              github
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/juan-agudelo-294b40232/"
            className="btn relative px-4 py-2 border border-black bg-white mask-b-from-40% sm:bg-transparent sm:border-transparent  overflow-hidden group cursor-pointer rounded-md text-xs font-bold tracking-normal"
            target="_blank"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white   transition-transform duration-400 rounded-md"></span>
            <span className="relative z-10 text-blue-500 transition-colors duration-400  capitalize text-sm sm:text-xs">
              linkedIn
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
