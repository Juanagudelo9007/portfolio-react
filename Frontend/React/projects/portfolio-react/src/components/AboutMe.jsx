import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";

const AboutMe = () => {
  return (
    <div className="w-full py-20 px-8">
      <div className="w-full flex flex-col justify-center items-center  gap-8">
        <div className="w-full flex items-center gap-4 justify-center">
          <h1 className="text-white text-3xl md:text-4xl">Juan Agudelo</h1>
          <img src="code-3.png" alt="" className="h-8 w-8" />
        </div>
        <p className="text-white text-justify">
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
            className="relative px-4 py-2 border border-black bg-white sm:bg-transparent sm:border-transparent  overflow-hidden group cursor-pointer rounded-md text-xs font-bold tracking-normal mask-b-from-0"
            target="_blank"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white   transition-transform duration-400 rounded-md"></span>
            <span className="relative z-10 text-blue-500 transition-colors duration-400  capitalize">
              gitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/juan-agudelo-294b40232/"
            className="relative px-4 py-2 border border-black bg-white mask-b-from-0.5 sm:bg-transparent sm:border-transparent  overflow-hidden group cursor-pointer rounded-md text-xs font-bold tracking-normal"
            target="_blank"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white mask-alpha   transition-transform duration-400 rounded-md"></span>
            <span className="relative z-10 text-blue-500 transition-colors duration-400  capitalize">
              linkedIn
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
