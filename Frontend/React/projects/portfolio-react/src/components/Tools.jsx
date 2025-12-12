import React from "react";

const Tools = () => {
  return (
    <div className="w-full py-10 px-12">
      <h1 className="text-white text-center mb-10">Tools</h1>
      <div
        className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        id="container"
      >
        <div
          className="card w-full min-h-30 sm:min-h-35 md:min-h-40 bg-gray-800 rounded-lg border border-white overflow-hidden flex flex-col p-2 gap-2"
          id="card-1"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/html-logo.png"
              alt="HTML"
              className="w-18 h-18 object-cover"
            />
          </div>
          <h1 className="text-white text-center mt-1">Html</h1>
        </div>
        <div
          className="card w-full min-h-30 sm:min-h-35 md:min-h-40 bg-gray-800 rounded-lg border border-white overflow-hidden flex flex-col items-center justify-center gap-3"
          id="card-2"
        >
          <div className="flex  w-full items-center justify-center">
            <img
              src="/css-logo.png"
              alt="CSS"
              className="w-16 h-16 object-cover"
            />
          </div>
          <h1 className="text-white text-center mt-1">Css</h1>
        </div>
        <div
          className="card w-full min-h-30 sm:min-h-35 md:min-h-40 bg-gray-800 rounded-lg border border-white overflow-hidden flex flex-col items-center justify-center gap-3"
          id="card-3"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/js-log.png"
              alt="JS"
              className="w-18 h-18 object-cover"
            />
          </div>
          <h1 className="text-white text-center mt-1">Js</h1>
        </div>
        <div
          className="card w-full min-h-30 sm:min-h-35 md:min-h-40 bg-gray-800 rounded-lg border border-white overflow-hidden flex flex-col p-2 gap-3"
          id="card-4"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/react-logo.png"
              alt="rect"
              className="w-18 h-18 object-cover"
            />
          </div>
          <h1 className="text-white text-center mt-1">React</h1>
        </div>
        <div
          className="card w-full min-h-30 sm:min-h-35 md:min-h-40 bg-gray-800 rounded-lg border border-white overflow-hidden flex flex-col p-2 gap-3"
          id="card-4"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/firebase-logo.png"
              alt="rect"
              className="w-18 h-18 object-cover"
            />
          </div>
          <h1 className="text-white text-center mt-1">Firebase</h1>
        </div>
        <div
          className="card w-full min-h-30 sm:min-h-35 md:min-h-40 bg-gray-800 rounded-lg border border-white overflow-hidden flex flex-col p-2 gap-3"
          id="card-6"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/git-logo.png"
              alt="git"
              className="w-18 h-18 object-cover"
            />
          </div>
          <h1 className="text-white text-center mt-1">Git</h1>
        </div>
        <div
          className="card w-full min-h-30 sm:min-h-35 md:min-h-40 bg-gray-800 rounded-lg border border-white overflow-hidden flex flex-col p-2 gap-3"
          id="card-7"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/public/github2.png"
              alt="github"
              className="w-18 h-18 object-cover"
            />
          </div>
          <h1 className="text-white text-center mt-1">GitHub</h1>
        </div>
      </div>
    </div>
  );
};

export default Tools;
