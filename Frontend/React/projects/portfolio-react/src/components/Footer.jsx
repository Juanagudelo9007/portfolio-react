import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-white gap-1 p-4">
      <p className="text-xs">©2025 Juan Agudelo. All rights reserved.</p>
      <div className="w-full flex items-center justify-center gap-2">
        <p className="text-xs">Open-source repository available on GitHub</p>
        <a
          href="https://github.com/Juanagudelo9007/portfolio-react"
          target="_blank"
          className="cursor-pointer"
        >
          <FaGithub size={12} />
        </a>
      </div>
      <div className="w-full flex items-center justify-center gap-4">
        <a
          href="https://github.com/Juanagudelo9007"
          target="_blank"
          className="cursor-pointer transition-all duration-400 hover:scale-125"
        >
          <FaGithub size={14} />
        </a>
        <a href="https://www.linkedin.com/in/juan-agudelo-294b40232/" target="_blank" className="cursor-pointer transition-all duration-400 hover:scale-125 hover:text-blue-400">
          <FaLinkedin size={14} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
