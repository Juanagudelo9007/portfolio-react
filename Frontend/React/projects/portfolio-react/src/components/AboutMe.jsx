import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";

const AboutMe = () => {
  return (
    <div className="w-full py-20 px-8">
      <div className="w-full flex flex-col justify-center items-center  gap-6">
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
        <div className="w-full flex  justify-center items-center gap-10">
          <a
            href="https://www.linkedin.com/in/juan-agudelo-294b40232/"
            className="text-blue-500 sm:text-white hover:text-blue-500 hover:scale-125  transition-all duration-300"
            target="_blank"
          >
            <CiLinkedin size={26} />
          </a>
          <a
            href="https://github.com/Juanagudelo9007"
            className="text-white  hover:text-white hover:scale-125 transition-all duration-300 "
            target="_blank"
          >
            <AiFillGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
