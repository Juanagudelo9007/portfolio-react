import React from "react";

const Navbar = () => {
  return (
    <div className="w-full p-2">
      <div className=" w-full flex justify-center items-center gap-4">
        <a
          href="#about"
          className="link text-transparent bg-clip-text bg-linear-to-t from-zinc-900 via-blue-500 to-blue-700 sm:hover:text-blue-400 sm:hover:scale-75  transition-all duration-300 mask-b-from-50%"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="link text-transparent bg-clip-text bg-linear-to-t from-zinc-900 via-blue-500 to-blue-700 sm:hover:text-blue-400 sm:hover:scale-75  transition-all duration-300 mask-b-from-60%"
        >
          Projects
        </a>
        <a
          href="#tools"
          className="link text-transparent bg-clip-text bg-linear-to-t from-zinc-900 via-blue-500 to-blue-700 sm:hover:text-blue-400 sm:hover:scale-75  transition-all duration-300 mask-b-from-50%"
        >
          Tools
        </a>
        <a
          href="#contact"
          className="link text-transparent bg-clip-text bg-linear-to-t from-zinc-900 via-blue-500 to-blue-700 sm:hover:text-blue-400 sm:hover:scale-75  transition-all duration-300 mask-b-from-50%"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
