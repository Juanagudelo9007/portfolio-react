import React from "react";

const Tools = () => {
  return (
    <div className="w-full py-8 px-12" id="tools">
      <h1 className="tools text-center text-transparent mb-10 text-3xl  bg-clip-text bg-linear-to-t from-[black_10%] via-[#B1AAAD] to-white mask-b-from-50%">
        Tools
      </h1>
      <div
        className="tools w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        id="container"
      >
        <div
          className="tools card w-full min-h-30 sm:min-h-35 md:min-h-40 rounded-lg border bg-[#363535] border-[#424242] overflow-hidden flex flex-col shadow-[2px_2px_8px_4px_rgba(0,0,0,0.5)] items-center justify-center gap-3 hover:shadow-[2px_5px_19px_8px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 transition-all duration-500 hover:-translate-y-4"
          id="card-1"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/html-logo.png"
              alt="HTML"
              className="w-16 h-16 object-cover transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)]"
            />
          </div>
          <h1 className="text-center text-white text-shadow-lg/30 mask-b-from-10%">
            Html
          </h1>
        </div>
        <div
          className="tools card w-full min-h-30 sm:min-h-35 md:min-h-40 rounded-lg border bg-[#363535] border-[#424242] overflow-hidden flex flex-col shadow-[2px_2px_8px_4px_rgba(0,0,0,0.5)] items-center justify-center gap-3 hover:shadow-[2px_5px_19px_8px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 transition-all duration-500 hover:-translate-y-4"
          id="card-2"
        >
          <div className="flex  w-full items-center justify-center">
            <img
              src="/css-logo.png"
              alt="CSS"
              className="w-16 h-16 object-cover transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)]"
            />
          </div>
          <h1 className="text-center text-white text-shadow-lg/30 mask-b-from-10%">
            Css
          </h1>
        </div>
        <div
          className="tools card w-full min-h-30 sm:min-h-35 md:min-h-40 rounded-lg border bg-[#363535] border-[#424242] overflow-hidden flex flex-col shadow-[2px_2px_8px_4px_rgba(0,0,0,0.5)] items-center justify-center gap-3 hover:shadow-[2px_5px_19px_8px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 transition-all duration-500 hover:-translate-y-3 "
          id="card-3"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/js-log.png"
              alt="JS"
              className="w-16 h-16 object-cover transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)] "
            />
          </div>
          <h1 className="text-center text-white text-shadow-lg/30 mask-b-from-10%">
            Js
          </h1>
        </div>
        <div
          className="tools card w-full min-h-30 sm:min-h-35 md:min-h-40 rounded-lg border bg-[#363535] border-[#424242] overflow-hidden flex flex-col shadow-[2px_2px_8px_4px_rgba(0,0,0,0.5)] items-center justify-center gap-3 hover:shadow-[2px_5px_19px_8px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 transition-all duration-500 hover:-translate-y-4"
          id="card-4"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/react-logo.png"
              alt="rect"
              className="w-16 h-16 object-cover transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)] "
            />
          </div>
          <h1 className="text-center text-white text-shadow-lg/30 mask-b-from-10%">
            React
          </h1>
        </div>
        <div
          className="tools card w-full min-h-30 sm:min-h-35 md:min-h-40 rounded-lg border bg-[#363535] border-[#424242] overflow-hidden flex flex-col shadow-[2px_2px_8px_4px_rgba(0,0,0,0.5)] items-center justify-center gap-3 hover:shadow-[2px_5px_19px_8px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 transition-all duration-500 hover:-translate-y-4"
          id="card-4"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/firebase-logo.png"
              alt="rect"
              className="w-16 h-16 object-cover transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)]"
            />
          </div>
          <h1 className="text-center text-white text-shadow-lg/30 mask-b-from-10%">
            Firebase
          </h1>
        </div>
        <div
          className="tools card w-full min-h-30 sm:min-h-35 md:min-h-40 rounded-lg border bg-[#363535] border-[#424242] overflow-hidden flex flex-col shadow-[2px_2px_8px_4px_rgba(0,0,0,0.5)] items-center justify-center gap-3 hover:shadow-[2px_5px_19px_8px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 transition-all duration-500 hover:-translate-y-4"
          id="card-6"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/git-logo.png"
              alt="git"
              className="w-15 h-15 object-cover transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)] "
            />
          </div>
          <h1 className="text-center text-white text-shadow-lg/30 mask-b-from-10%">
            Git
          </h1>
        </div>
        <div
          className="tools card w-full min-h-30 sm:min-h-35 md:min-h-40 rounded-lg border bg-[#363535] border-[#424242] overflow-hidden flex flex-col shadow-[2px_2px_8px_4px_rgba(0,0,0,0.5)] items-center justify-center gap-3 hover:shadow-[2px_5px_19px_8px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 transition-all duration-500 hover:-translate-y-4"
          id="card-7"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/public/github2.png"
              alt="github"
              className="w-14 h-14 object-cover transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)] "
            />
          </div>
          <h1 className="text-center text-white text-shadow-lg/30 mask-b-from-10%">
            GitHub
          </h1>
        </div>
        <div
          className="tools card w-full min-h-30 sm:min-h-35 md:min-h-40 rounded-lg border bg-[#363535] border-[#424242] overflow-hidden flex flex-col shadow-[2px_2px_8px_4px_rgba(0,0,0,0.5)] items-center justify-center gap-3 hover:shadow-[2px_5px_19px_8px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 transition-all duration-500 hover:-translate-y-4"
          id="card-7"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/tailwind-logo.png"
              alt="Tailwindcss"
              className="w-14 h-14 object-contain transition-transform duration-500 hover:scale-110 hover:drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)] "
            />
          </div>
          <h1 className="text-center text-white text-shadow-lg/30 mask-b-from-10%">
            Tailwindcss
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Tools;
