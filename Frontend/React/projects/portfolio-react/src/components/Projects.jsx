import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoCss3 } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";

const Projects = () => {
  return (
    <div className="text-white w-full" id="main">
      <h1 className="text-center text-transparent mb-10 text-3xl  bg-clip-text bg-linear-to-t from-[black_10%] via-[#B1AAAD] to-white mask-b-from-40% ">
        Projects
      </h1>
      <div
        id="container"
        className="w-full grid grid-col-1 sm:grid-cols-2 md:grid-cols-3  gap-10 justify-items-center p-10"
      >
        <div
          id="card1"
          className="w-64 flex flex-col items-center gap-2 p-2 bg-[#363535]   text-white border border-[#424242] transition-all  hover:scale-110  hover:shadow-[2px_5px_19px_8px_rgba(0,0,0,0.5)] duration-500 shadow-[2px_2px_8px_4px_rgba(0,0,0,0.5)] hover:-translate-y-4"
        >
          <img
            src="/netflix-clone.png"
            alt=""
            className=" h-32  object-contain   "
          />
          <div className="w-full h-0.5 bg-white mask-l-from-1 " />
          <div
            className="w-full flex flex-col  p-2 text-[10px] gap-2 mask-l-from-90%"
            id="text"
          >
            <h1 className="capitalize hover:scale-125 hover:translate-x-8  transition-transform hover:text-shadow-lg hover:text-shadow-black duration-400 cursor-pointer">
              netflix clone
            </h1>
            <p className="text-justify text-[#B1AAAD]">
              Netflix clone with authentication. Users have their own sections
              to add shows and movies to watch later and favorites.
            </p>
          </div>
          <div className="w-full h-0.5 bg-white mask-l-from-1" />
          <div
            className="w-full justify-center items-center flex gap-2"
            id="tech-icons"
          >
            <span className="text-red-600 ">
              <FaHtml5 />
            </span>
            <span className="text-blue-500">
              <BiLogoCss3 size={18} />
            </span>
            <span className="text-sky-400">
              <FaReact />
            </span>
            <span className="text-blue-400">
              <SiTailwindcss />
            </span>
            <span className="text-amber-400">
              <SiFirebase />
            </span>
            <span className="text-xs text-green-600">Gsap</span>
          </div>
          <div
            className="w-full flex justify-center items-center gap-3"
            id="links"
          >
            <a
              href="https://github.com/Juanagudelo9007/netflix-clone"
              target="_blank"
              className="transition-transform hover:scale-125 duration-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://netflix.juanagudelo.dev/"
              target="_blank"
              className="transition-transform hover:scale-125 duration-400"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
        </div>
        <div
          id="card2"
          className="w-64 flex flex-col items-center gap-2 p-2 bg-[#363535]   text-white border border-[#424242] transition-all  hover:scale-110  hover:shadow-[2px_5px_19px_8px_rgba(0,0,0,0.5)] duration-500 shadow-[2px_2px_8px_4px_rgba(0,0,0,0.5)] hover:-translate-y-4"
        >
          <img
            src="/chat-app.png"
            alt=""
            className=" h-32  object-contain rounded-xl"
          />
          <div className="w-full h-0.5 bg-white mask-l-from-1 " />
          <div
            className="w-full flex flex-col  p-2 text-[10px] gap-2 mask-l-from-92%"
            id="text"
          >
            <h1 className="capitalize hover:scale-125 hover:translate-x-8  transition-transform hover:text-shadow-lg hover:text-shadow-black duration-400 cursor-pointer">
              Chat app
            </h1>
            <p className="text-justify text-[#B1AAAD]">
              Real-time chat application supporting authentication, live
              messaging, adding users, and deleting users.
            </p>
          </div>
          <div className="w-full h-0.5 bg-white mask-l-from-1" />
          <div
            className="w-full justify-center items-center flex gap-2"
            id="tech-icons"
          >
            <span className="text-red-600 ">
              <FaHtml5 />
            </span>
            <span className="text-blue-500">
              <BiLogoCss3 size={18} />
            </span>
            <span className="text-sky-400">
              <FaReact />
            </span>
            <span className="text-blue-400">
              <SiTailwindcss />
            </span>
            <span className="text-xs text-amber-800">Zustand</span>
          </div>
          <div
            className="w-full flex justify-center items-center gap-3"
            id="links"
          >
            <a
              href="https://github.com/Juanagudelo9007/Chat-app-react"
              target="_blank"
              className="transition-transform hover:scale-125 duration-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://chat.app.juanagudelo.dev/"
              target="_blank"
              className="transition-transform hover:scale-125 duration-400"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
        </div>
        <div
          id="card3"
          className="w-64 flex flex-col items-center gap-2 p-2 bg-[#363535]   text-white border border-[#424242] transition-all  hover:scale-110  hover:shadow-[2px_5px_19px_8px_rgba(0,0,0,0.5)] duration-500 shadow-[2px_2px_8px_4px_rgba(0,0,0,0.5)] hover:-translate-y-4"
        >
          <img
            src="/landing-burger-react.png"
            alt=""
            className=" h-32  object-contain rounded-xl"
          />
          <div className="w-full h-0.5 bg-white mask-l-from-1 " />
          <div
            className="w-full flex flex-col  p-2 text-[10px] gap-2 mask-l-from-90%"
            id="text"
          >
            <h1 className="capitalize hover:scale-125 hover:translate-x-8  transition-transform hover:text-shadow-lg hover:text-shadow-black duration-400 cursor-pointer">
              Landing burger place
            </h1>
            <p className="text-justify text-[#B1AAAD]">
              Netflix clone with authentication. Users have their own sections
              to add shows and movies to watch later and favorites.
            </p>
          </div>
          <div className="w-full h-0.5 bg-white mask-l-from-1" />
          <div
            className="w-full justify-center items-center flex gap-2"
            id="tech-icons"
          >
            <span className="text-red-600 ">
              <FaHtml5 />
            </span>
            <span className="text-blue-500">
              <BiLogoCss3 size={18} />
            </span>
            <span className="text-sky-400">
              <FaReact />
            </span>
            <span className="text-blue-400">
              <SiTailwindcss />
            </span>
            <span className="text-amber-400">
              <TbBrandFramerMotion />
            </span>
          </div>
          <div
            className="w-full flex justify-center items-center gap-3"
            id="links"
          >
            <a
              href="https://github.com/Juanagudelo9007/react-landing"
              target="_blank"
              className="transition-transform hover:scale-125 duration-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://burger.juanagudelo.dev/"
              target="_blank"
              className="transition-transform hover:scale-125 duration-400"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
