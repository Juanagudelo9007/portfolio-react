import React from "react";

const Navbar = () => {
  return (
    <div className="w-full p-2">
      <div className="w-full flex justify-center items-center gap-4">
        <a
          href=""
          className=" text-transparent bg-clip-text bg-linear-to-t from-black via-blue-500 to-blue-700 sm:hover:text-blue-500 sm:hover:scale-75  transition-all duration-300"
        >
          About Me
        </a>
        <a
          href=""
          className=" text-transparent bg-clip-text bg-linear-to-t from-black via-blue-500 to-blue-700 sm:hover:text-blue-500 sm:hover:scale-75 transition-all duration-300"
        >
          Projects
        </a>
        <a
          href=""
          className=" text-transparent bg-clip-text bg-linear-to-t from-black via-blue-500 to-blue-700 sm:hover:text-blue-500 sm:hover:scale-75 transition-all duration-300"
        >
          Tools
        </a>
        <a
          href=""
          className=" text-transparent bg-clip-text bg-linear-to-t from-black via-blue-500 to-blue-700 sm:hover:text-blue-500 sm:hover:scale-75  transition-all duration-300"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
